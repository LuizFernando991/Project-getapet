const express = require('express')
const UserRoutes = require('./routes/UserRoutes')
const PetRoutes = require('./routes/PetRoutes')
const cors = require('cors')

const app = express()


//Config JSON response //

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())


//Solve CORS

app.use(cors({ credentials : true, origin : 'http://localhost:3000'}))

//Public folder

app.use(express.static('public'))

//Routes

app.use('/users', UserRoutes)
app.use('/pets', PetRoutes)


app.listen(5000)