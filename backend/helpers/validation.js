        
        
//validation
function validation(req, res, next){


    const { name, email, phone, password, confirmpassword } = req.body

    
    
    if(!name){
        res.status(422).json({message : 'O nome é obrigatório'})
        return
    }
    if(!email){
        res.status(422).json({message : 'O e-mail é obrigatório'})
        return
    }
    if(!phone){
        res.status(422).json({message : 'O telefone é obrigatório'})
        return
    }
    if(!password){
        res.status(422).json({message : 'A senha é obrigatória'})
        return
    }
    if(!confirmpassword){
        res.status(422).json({message : 'A confirmação de senha é obrigatória'})
        return
    }
    if(password !== confirmpassword){
        res.status(422).json({message : 'As senhas devem ser iguais'})
        return
    }

    next()
}

module.exports = validation