import api from '../helpers/api'

import { useState } from 'react'
import { useFlashMessage } from './useFlashMessage'
import { useNavigate } from 'react-router-dom'






export const useAuth= ()=>{

    const { setFlashMessage } = useFlashMessage()

    const [ authenticated  , setAuthenticated ] = useState(false)

    const navigate = useNavigate()

    const register= async (user)=>{

        let msgText = 'Cadastro realizado com sucesso!'
        let msgType = 'success'

        try{
            const data = await api.post('/users/register', user)


            const resData = data.data

            await authUser(resData)



        }catch(err){
            msgText = err.response.data.message
            msgType = 'error'
        }


        setFlashMessage(msgText, msgType)
    }

    const authUser = async(data)=>{


        setAuthenticated(true)

        localStorage.setItem('token', JSON.stringify(data.token))

        navigate('/')


    }

    return {register}

}