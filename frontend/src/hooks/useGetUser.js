import api from '../helpers/api'

import { useCallback } from 'react'


export const useGetApi= ()=>{


    const getCheckUser = useCallback(async()=>{
        const dataRes = await api.get('/users/checkuser', {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })

        return dataRes.data
    }, [])

    
    return [getCheckUser]

}