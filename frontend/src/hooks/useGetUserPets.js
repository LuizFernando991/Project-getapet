import api from '../helpers/api'

import { useCallback } from 'react'


export const useGetUserPets= ()=>{


    const getUserPets = useCallback(async()=>{
        const dataRes = await api.get('/pets/mypets', {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })

        return dataRes.data
    }, [])

    const getUserAdoptions = useCallback(async()=>{
        const dataRes = await api.get('/pets/myadoptions', {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })


        return dataRes.data
    }, [])

    
    return {getUserPets, getUserAdoptions}

}