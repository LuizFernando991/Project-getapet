const Pet = require('../models/Pet')

const ObjectId = require('mongoose').Types.ObjectId

const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-token')



module.exports = class PetController{


    static async create(req, res){

        const { name, age, weight, color } = req.body

        const images = req.files

        const available = true

        // images upload

        if(!images || images.length === 0){
            res.status(422).json({ message : 'A imagem é obrigatória' })
        }

        // get user owner

        const token = getToken(req)
        const user = await getUserByToken(token)


        // create a pet

        const pet = new Pet({
            name,
            age,
            weight,
            color,
            available,
            images: [],
            user: {
                _id : user.id,
                name : user.name,
                image : user.image,
                phone : user.phone
            }
        })



        images.map((image) => {
            pet.images.push(image.filename)
        })

        
        

        try{

            const newPet = await pet.save()
            res.status(201).json({
                message : 'Pet cadastrado com sucesso!',
                newPet
            })

        }catch(err){
            res.status(500).json({ message : err})
        }
    }

    static async getAll(req, res){

        //pagination 
        
        const NumPage = req.query['page']

        let page

        let offset 

        let next

        let numberOfPages

        const limitPerPage = 10


        if(!NumPage || NumPage === 1){
            page = 1
            offset = 0 
        }else{
            page = parseInt(NumPage)
            offset = (page - 1) * limitPerPage
        }


        const numOfPets = await Pet.count()


        if(offset + 4 >= numOfPets){
            next = false
        }else{
            next = true
        }

        numberOfPages = Math.ceil(numOfPets/limitPerPage)
        

        const pets = await Pet.find(null, null, { limit : limitPerPage, skip : offset}).sort('-createdAt')

        res.status(200).json({ pets : pets, numberOfPages : numberOfPages, haveNextPage : next })
    }

    static async getNewPets(req, res){

        const pets = await Pet.find(null, null, { limit : 5}).sort('-createdAt')
        
        res.status(200).json({ pets : pets })
    }

    static async getAllUserPets(req, res){

        const token = getToken(req)
        const user = await getUserByToken(token)

        
        const userId = user._id.toString()

        const pets = await Pet.find({ "user._id" : userId}).sort('-createdAt')

        res.status(200).json({ pets : pets })
    }
    
    static async getAllUserAdoptions(req, res){
        
        const token = getToken(req)
        const user = await getUserByToken(token)

        
        const userId = user._id.toString()

        const pets = await Pet.find({ "adopter._id" : userId}).sort('-createdAt')

        res.status(200).json({ pets : pets })

    }

    static async getPetById(req, res){

        const petId = req.params.id

        // check if id is valid
        if(!ObjectId.isValid(petId)){
            res.status(422).json({ message : 'ID inválido!'})
            return
        }

        const pet = await Pet.findById(petId)

        if(!pet){
            res.status(404).json({ message : 'Pet não encontrado'})
        }else{
            res.status(200).json({ pet : pet})
        }
    }

    static async removePetById(req, res){

        const petId = req.params.id

        // check if id is valid
        if(!ObjectId.isValid(petId)){
            res.status(422).json({ message : 'ID inválido!'})
            return
        }

        const pet = await Pet.findById(petId)

        if(!pet){
            res.status(404).json({ message : 'Pet não encontrado'})
            return
        }

        // check if logged in user registered the pet

        const token = getToken(req)
        const user = await getUserByToken(token)

        if( user._id.toString() !== pet.user._id){
            res.status(422).json({ message : 'Houve um problema em processar a sua solicitação, por favor tente mais tarde!'})
            return
        }

        await Pet.deleteOne({ _id : petId})

        res.status(200).json({ message : 'Pet removido!'})

    }

    static async updatePet(req, res){

        const petId = req.params.id

        const { name, age, weight, color, available } = req.body

        const images = req.files

        const updatedImages = []

        images.map((image)=>{
            updatedImages.push(image.filename)
        })

        let updatedData = {
            name : name,
            age : age,
            weight : weight,
            color : color,
            available : available
        }

        if(updatedImages.length > 0){
            updatedData = { ...updatedData, images : updatedImages}
        }

        // check if id is valid
        if(!ObjectId.isValid(petId)){
            res.status(422).json({ message : 'ID inválido!'})
            return
        }

        const pet = await Pet.findById(petId)

        if(!pet){
            res.status(404).json({ message : 'Pet não encontrado'})
            return
        }

        // check if logged in user registered the pet

        const token = getToken(req)
        const user = await getUserByToken(token)

        if( user._id.toString() !== pet.user._id){
            res.status(422).json({ message : 'Houve um problema em processar a sua solicitação, por favor tente mais tarde!'})
            return
        }

        // update pet at db

        await Pet.findByIdAndUpdate(petId, updatedData)
        
        res.status(200).json({ message : 'Pet atualizado!'})
    }

    static async schedule(req, res){

        const petId = req.params.id

        // check if pet exists
        
        if(!ObjectId.isValid(petId)){
            res.status(422).json({ message : 'ID inválido!'})
            return
        }
        const pet = await Pet.findById(petId)
        // check if user is owner

        const token = getToken(req)
        const user = await getUserByToken(token)

        if( user._id.toString() === pet.user._id){
            res.status(422).json({ message : 'Você não pode agendar uma visita com o seu própio pet!'})
            return
        }

        // check if user has already scjeduled a visit

        if(pet.adopter){
            if(pet.adopter._id.equals(user.id)){
                res.status(422).json({ message : 'Você já agendou uma visita!'})
                return
            }
        }

        // add user to pet

        pet.adopter = {
            _id : user._id,
            name : user.name,
            image : user.image
        }
        
        await pet.findByIdAndUpdate(petId, pet)

        res.status(200).json({ message : `A visita foi agedada com sucesso, entre em contato com ${pet.user.name} pelo telefone ${pet.user.phone}`})

    }

    static async concludeAdoption(req, res){

        const petId = req.params.id

        // check if pet exists

        if(!ObjectId.isValid(petId)){
            res.status(422).json({ message : 'ID inválido!'})
            return
        }

        const pet = await Pet.findById(petId)

        if(!pet){
            res.status(404).json({ message : 'Pet não encontrado'})
            return
        }

        // check if logged in user registered the pet

        const token = getToken(req)
        const user = await getUserByToken(token)

        if( user._id.toString() !== pet.user._id){
            res.status(422).json({ message : 'Houve um problema em processar a sua solicitação, por favor tente mais tarde!'})
            return
        }

        pet.avaible = false

        await Pet.findByIdAndUpdate(petId, pet)

        res.status(200).json({ message : 'Parabéns! A adoção foi concluída!'})

    }

}