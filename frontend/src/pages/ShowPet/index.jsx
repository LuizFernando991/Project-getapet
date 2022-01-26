import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { usePet } from "../../hooks/usePet"
import { PetImages } from "../../components/PetImages"
import * as Styled from "./styles"

export const ShowPet = ()=>{

    const { getPetById } = usePet()
    const [ pet, setPet ] = useState('')
    const { id } = useParams()
    const isMounted = useRef(true)

    useEffect(()=>{
        getPetById(id).then((data)=>{
            if(isMounted.current){
                setPet(data)
            }
        })
        return ()=>{ isMounted.current = false }
    }, [getPetById, id])


    return(
        <Styled.PetContainer>
            <PetImages pet={pet} />
            <Styled.PetInformationContainer>
                <Styled.PetInformation>

                </Styled.PetInformation>
            </Styled.PetInformationContainer>
        </Styled.PetContainer>
    )
}