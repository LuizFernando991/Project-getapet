import { useNavigate } from 'react-router-dom'
import api from "../helpers/api"
import { useFlashMessage } from '../hooks/useFlashMessage'

export const usePet = ()=>{
    
    const navigate = useNavigate()

    const [ setFlashMessage ] = useFlashMessage()

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
        navigate('/mypets')

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

    return { createPet, removePet }
}