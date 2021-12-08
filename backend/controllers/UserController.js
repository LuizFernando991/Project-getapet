const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createUserToken = require('../helpers/create-user-tolken')
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-token')


module.exports = class UserController{

    static async register(req, res){
       
        const { name, email, phone, password, confirmpassword } = req.body


        // check if user exists

        const userExists = await User.findOne({ email : email })

        if(userExists){
            res.status(422).json({message : 'Usuário já cadastrado!'})
            return
        }

        // create a password

        const salt = await bcrypt.genSalt(12)

        const passwordHash = await bcrypt.hash(password, salt)

        // create a user

        const user = new User({
            name : name,
            phone : phone,
            email : email, 
            password : passwordHash
        })
        
        try{
            const newUser = await user.save()
            
            await createUserToken(newUser, req, res)

        }catch(err){
            res.status(500).json({ message : err})
        }
    }

    static async login(req, res){

        const { email, password } = req.body

        if(!password){
            res.status(422).json({message : 'A senha é obrigatória'})
            return
        }

        if(!email){
            res.status(422).json({message : 'O e-mail é obrigatório'})
            return
        }

        // check if user exists

        const user = await User.findOne({ email : email })


        if(!user){
            res.status(422).json({message : 'Email não encontrado!'})
            return
        }

        // check if password match with db password

        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword){
            res.status(422).json({message : 'Senha inválida!'})
            return
        }

        await createUserToken(user, req, res)

    }

    static async checkUser(req, res){

        let currentUser 

        if(req.headers.authorization){

            const token = getToken(req)
            const decoded = jwt.verify(token, 'nossosecret')

            currentUser = await User.findById(decoded.id)

            // removendo a senha do retorno
            currentUser.password = undefined


        }else{
            currentUser = null
        }

        res.status(200).send(currentUser)
    }

    static async getUserById(req, res){

        const id = req.params.id

        const user = await User.findById(id).select('-password')

        if(!user){
            res.status(422).json({
                message : "Usuário não encontrado!"
            })
        }
        
        res.status(200).json(user)

    }

    static async editUser(req, res){
        
        const id = req.params

        const { name, email, phone, password, confirmpassword } = req.body


        const token = getToken(req)

        const user = await getUserByToken(token)

        // check if email has already taken
        
        const userExists = await User.findOne({ email : email})
        
        if(user.email !== email && userExists){
            res.status(422).json({
                message : 'Email já cadastrado!'
            })
            return
        }

        user.name = name

        user.email = email

        user.phone = phone

        if(password === confirmpassword){

            const salt = await bcrypt.genSalt(12)
            const passwordHash = await bcrypt.hash(password, salt)

            user.password = passwordHash
        }

        if(req.file){
            user.image = req.file.filename
        }

        try{

            await User.findOneAndUpdate(
                { _id : user.id },
                { $set: user },
                { new : true }
            )

            //await User.updateOne({ _id : user.id }, user)



            res.status(200).json({
                message : 'Usuário atualizado com sucesso!'
            })

        }catch(err){
            res.status(500).json({ message : err })
            return
        }
    }

}