import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { usePet } from "../../hooks/usePet"
import { PetImages } from "../../components/PetImages"
import { useNavigate } from "react-router-dom"
import * as Styled from "./styles"

export const ShowPet = ()=>{

    const { getPetById, getSchedule } = usePet()
    const [ pet, setPet ] = useState('')
    const { id } = useParams()
    const isMounted = useRef(true)
    const navigate = useNavigate()

    useEffect(()=>{
        getPetById(id).then((data)=>{
            window.scroll(0, 0)
            if(isMounted.current){
                setPet(data)
            }
        })
        return ()=>{ isMounted.current = false }
    }, [getPetById, id])

    const handleButtonClick = async(id)=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
            return
        }
        const message  = await getSchedule(id)

        console.log(message)
    }

    return(
        <Styled.PetContainer>
            <PetImages pet={pet} />
            <Styled.PetInformationContainer>
                <Styled.PetInformation>
                    <h1>{pet.name}</h1>
                    <div>
                        <p><span>Idade:</span> {pet.age} {pet.age > 1 ? 'anos' : 'ano'}</p>
                        <p><span>Peso:</span> {pet.weight} Kg</p>
                        <p><span>Anunciante:</span> {pet ? pet.user.name : ''}</p>
                        <p><span>Cor: </span>{pet.color}</p>
                    </div>
                </Styled.PetInformation>
                {pet.available ? <button onClick={()=>handleButtonClick(id)}>Agendar uma visita</button> : <Styled.Adopted>Adotado!</Styled.Adopted>}
            </Styled.PetInformationContainer>
        </Styled.PetContainer>
    )
}
