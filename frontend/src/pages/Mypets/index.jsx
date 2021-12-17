import { useEffect, useState, useRef } from "react"
import { useGetUserPets } from "../../hooks/useGetUserPets"



export const Mypets =()=>{

    const isMounted = useRef(false)
    const [ pet, setPets ] = useState({})

    const [ getUserPets ] = useGetUserPets()

    useEffect(()=>{
        getUserPets().then(r => {
            if(isMounted.current){
                setPets(r)
            }
        })
       
        return ()=> {isMounted.current = false}
    }, [getUserPets])


    return(
        <>
                
            

        </>
    )
}