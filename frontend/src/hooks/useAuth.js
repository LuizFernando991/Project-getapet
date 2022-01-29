import api from '../helpers/api'

import { useState, useEffect } from 'react'
import { useFlashMessage } from './useFlashMessage'
import { useNavigate } from 'react-router-dom'


export const useAuth= ()=>{

    const [ setFlashMessage ] = useFlashMessage()

    const [ authenticated  , setAuthenticated ] = useState(false)

    const navigate = useNavigate()


    useEffect(()=>{
        const token = localStorage.getItem('token')

        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
    }, [])    



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

        localStorage.setItem('token', JSON.stringify(data.token))
        setAuthenticated(true)

        navigate('/')

    }

    const logout =()=>{

        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        navigate('/')


    }

    const login = async(user)=>{


        try{

            const data = await api.post('/users/login', user)
            const resData = data.data

            await authUser(resData)

        }catch(err){
            console.log(err)
        }



    }

    const edit = async(user)=>{

        let msgType = 'success'

        let formData = new FormData()

        Object.keys(user).forEach((key) =>
            formData.append(key, user[key])
        )

        const data = await api
        .patch(`/users/edit/${user._id}`, formData, {
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
    }

    

    return [register, logout, login, edit, authenticated]

}