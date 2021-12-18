import { useEffect, useState, useRef } from "react"
import { useGetUserPets } from "../../hooks/useGetUserPets"

import * as Styled from './styles'

export const Mypets =()=>{

    const isMounted = useRef(true)
    const [ pets, setPets ] = useState([])

    const [ getUserPets ] = useGetUserPets()

    useEffect(()=>{
        getUserPets().then(r => {
            if(isMounted.current){
                setPets(r.pets)
            }
        })
        
        return ()=> {isMounted.current = false}
    }, [getUserPets])


    
    return(
        <Styled.MyPetsContainer>
            <h1>My Pets</h1>
            
            { pets.length > 0 ? (
                pets.map(pet => <p key={pet._id}>{pet.name}</p>)
            ) 
            :
            <p>'Nenhum pet'</p>
            }
            
        </Styled.MyPetsContainer>
    )
}