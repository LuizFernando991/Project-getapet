

const petValidation = (req, res, next)=>{


    const { name, age, weight, color } = req.body


    if(!name){
        res.status(422).json({ message : "O nome é obrigatório!"})
        return
    }
    if(!age){
        res.status(422).json({ message : "A idade é obrigatória!"})
        return
    }
    if(!weight){
        res.status(422).json({ message : "O peso é obrigatório!"})
        return
    }
    if(!color){
        res.status(422).json({ message : "A cor é obrigatória!"})
        return
    }

    next()
}

module.exports = petValidation 



