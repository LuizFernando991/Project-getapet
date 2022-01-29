import { useEffect, useRef, useState } from 'react'
import { useGetUserPets } from '../../hooks/useGetUserPets'
import { AdoptedCard } from '../../components/AdoptedCard'
import * as Styled from './styles'

export const MyAdoptions = ()=>{

    const { getUserAdoptions } = useGetUserPets()
    const [ pets, setPets ] = useState([])
    const isMounted = useRef(true)

    useEffect(()=>{

        getUserAdoptions().then((res)=>{
            if(isMounted.current){
                setPets(res.pets)
            }
        })
        return ()=> isMounted.current = false
    })


    return(
        <Styled.MyAdoptions>
            <h1>Minhas Adoções:</h1>
            <Styled.MyAdoptionsContainer>
                { pets.length > 0 ? 
                pets.map((pet, index)=><AdoptedCard key={index} pet={pet}/>)  : <p>Não há adoções</p>  
            }
            </Styled.MyAdoptionsContainer>
        </Styled.MyAdoptions>
    )
}