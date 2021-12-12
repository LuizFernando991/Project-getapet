import api from '../helpers/api'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFlashMessage } from './useFlashMessage'






export const useAuth= ()=>{

    const { setFlashMessage } = useFlashMessage()

    const register= async (user)=>{

        let msgText = 'Cadastro realizado com sucesso!'
        let msgType = 'success'

        try{
            const data = await api.post('/users/register', user)


            const resData = data.data


            return resData

        }catch(err){
            msgText = err.response.data.message
            msgType = 'error'
        }


        setFlashMessage(msgText, msgType)
    }

    return {register}

}