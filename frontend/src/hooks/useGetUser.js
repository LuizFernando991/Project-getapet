import { useCallback } from 'react'
import api from '../helpers/api'


export const useGetUser= ()=>{

    
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