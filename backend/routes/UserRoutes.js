const express = require('express')
const UserController = require('../controllers/UserController')

// middlewares

const verifyToken = require('../helpers/verify-token')
const validation = require('../helpers/validation')
const { imageUpload } = require('../helpers/image-upload')

const router = express.Router()

router.get('/checkuser', UserController.checkUser)

router.get('/:id', UserController.getUserById)

router.post('/register', validation,  UserController.register)

router.post('/login', UserController.login)

router.patch('/edit/:id', verifyToken, imageUpload.single('image'), validation, UserController.editUser)


module.exports = router