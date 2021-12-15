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
            api.defaults.headers.Authorizarion = `Bearer ${JSON.parse(token)}`
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


        setAuthenticated(true)

        localStorage.setItem('token', JSON.stringify(data.token))

        navigate('/')


    }


    const logout =()=>{

        let msgText = 'Logout realizado com sucesso'
        let msgType = 'success'

        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorizarion = undefined

        navigate('/')

        setFlashMessage(msgText, msgType)

    }

    const login = async(user)=>{

        let msgText = 'Login realizado com sucesso'
        let msgType = 'success'

        try{

            const data = await api.post('/users/login', user)
            const resData = data.data

            await authUser(resData)

        }catch(err){
            msgText = err.response.data.message
            msgType = 'error'
        }

        setFlashMessage(msgText, msgType)


    }

    const edit = async(user)=>{

        let msgType = 'sucess'

        let formData = new FormData()

        Object.keys(user).forEach((key) =>
            formData.append(key, user[key]),
        )

        const data = await api
        .patch(`/users/edit/${user._id}`, formData, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((err) => {
            console.log(err)
            msgType = 'error'
            return err.response.data
        })

        setFlashMessage(data.message, msgType)
    }

    

    return [register, logout, login, edit, authenticated]

}