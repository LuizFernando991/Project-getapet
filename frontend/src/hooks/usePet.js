import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import api from "../helpers/api"
import { useFlashMessage } from '../hooks/useFlashMessage'

export const usePet = ()=>{
    
    const navigate = useNavigate()

    const [ setFlashMessage ] = useFlashMessage()

    const getPetById = useCallback(async(id)=>{
        
        const pet = await api.get(`/pets/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                'Content-Type': 'multipart/form-data'
            }
        })


        return (pet.data.pet)
    }, [])

    const getAllPets = useCallback(async(page)=>{
        
        const pets = await api.get(`/pets?page=${page}`)
        return (pets.data.pets)
    }, [])

    const getNewPets = useCallback(async(id)=>{
        
        const pet = await api.get(`/pets/newpets`)


        return (pet.data.pets)
    }, [])

    const createPet = async (pet)=>{
        let msgType = 'success'

        let formData = new FormData()

        await Object.keys(pet).forEach((key) =>{
            if(key === 'images'){
                for(let i = 0; i < pet[key].length; i++){
                    formData.append('images', pet[key][i])
                }

            }else{
                formData.append(key, pet[key])
            }
        })

        const data = await api
        .post(`/pets/create`, formData, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            
            return response.data
        })
        .catch((err) => {
            
            msgType = 'error'
            return err.response.data
        })
        
        setFlashMessage(data.message, msgType)
        if(msgType === 'success'){
            navigate('/mypets')
        }

    }

    const removePet = async(id)=>{

        let msgType = 'success'

        const data = await api.delete(`/pets/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then((response)=>{
            return response.data
        }).catch((err)=>{
            msgType = 'error'
            return err.response.data
        })

        setFlashMessage(data.message, msgType)
    }

    const editPet = async(pet)=>{

        let msgType = 'success'
        let formData = new FormData()


        Object.keys(pet).forEach((key)=>{
            if(key === 'images'){
                for(let i = 0; i < pet[key].length; i++){
                    formData.append('images', pet[key][i])
                }
            }else{
                formData.append(key, pet[key])
            }
        })

        const data = await api
        .patch(`/pets/${pet._id}`, formData, {
            headers : {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then((response)=>{
            return response.data
        }).catch((err)=>{
            msgType = 'error'
            return err.response.data
        })
        
        setFlashMessage(data.message, msgType)
        if(msgType === 'success'){
            navigate('/mypets')
        }

    }

    return { createPet, removePet, getPetById, editPet, getNewPets, getAllPets }
}