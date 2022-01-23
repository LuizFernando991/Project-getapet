const express = require('express')
const PetContoller = require('../controllers/PetController')


const router = express.Router()

// middlewares

const verifyToken = require('../helpers/verify-token')
const petValidation = require('../helpers/pet-validation')
const { imageUpload } = require('../helpers/image-upload')
const PetController = require('../controllers/PetController')


router.patch('/conclude/:id', verifyToken, PetController.concludeAdoption)

router.patch('/:id', verifyToken, imageUpload.array('images'), petValidation, PetContoller.updatePet)

router.patch('/schedule/:id', verifyToken, PetController.schedule)

router.post('/create', verifyToken, imageUpload.array('images'), petValidation, PetContoller.create)

router.get('/', PetController.getAll)

router.get('/newpets', PetController.getNewPets)

router.get('/mypets', verifyToken, PetContoller.getAllUserPets)

router.get('/myadoptions', verifyToken, PetController.getAllUserAdoptions)

router.get('/:id', PetContoller.getPetById)

router.delete('/:id', verifyToken,  PetContoller.removePetById)


module.exports = router