import { useEffect, useState, useRef } from "react"
import { useGetUserPets } from "../../hooks/useGetUserPets"
import { usePet } from '../../hooks/usePet'
import { PetCardMypets } from "../../components/PetCardMypets"

import * as Styled from './styles'

export const Mypets =()=>{

    const isMounted = useRef(true)
    const { removePet } = usePet()
    const [ pets, setPets ] = useState([])

    const [ getUserPets ] = useGetUserPets()

    const handleOnDeleteClick = (petId)=>{
        const updatedPets = pets.filter(pet => pet._id !== petId)
        setPets(updatedPets)
        removePet(petId)
    }

    useEffect(()=>{
        getUserPets().then(r => {
            if(isMounted.current){
                setPets(r.pets)
            }
        })
        
        return ()=> {isMounted.current = false}
    }, [getUserPets])


    
    return(
        <Styled.MyPets>
            <h1>Meus Pets:</h1>
            <Styled.MyPetsContainer>
                
                { pets.length > 0 ? (
                    pets.map(pet => <PetCardMypets onClick={handleOnDeleteClick} key={pet._id} pet={pet}/>)
                ) 
                :
                <p>Você não tem pets cadastrados!</p>
                }
                
            </Styled.MyPetsContainer>
        </Styled.MyPets>
    )
}