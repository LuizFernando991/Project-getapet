import { useState } from 'react'
import { usePet } from '../../hooks/usePet'
import { Link } from 'react-router-dom'
import * as Styled from './styles'



export const PetCardMypets = ({pet, onClick})=>{

    const { concludeAdoption } = usePet()

    const [ isAvailable, SetIsAvailable ] = useState(pet.available)

    const handleOnConcludeButtonClick = ()=>{
        concludeAdoption(pet._id)
        SetIsAvailable(false)

    }
    
    return (
        <Styled.Card>
            <img src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`} alt={pet.name} />

            <h2>{pet.name}</h2>

            <p>Idade: {pet.age} {pet.age > 1 ? 'Anos' : 'Ano'}</p>

            {isAvailable ?
                <button onClick={handleOnConcludeButtonClick}>Concluir adoção</button>
                :
                <h3>Adotado!</h3>
            }
            <Styled.ButtonContainer>
                <Link to={`/editpet/${pet._id}`}>Editar</Link>
                <button onClick={()=>onClick(pet._id)}>Excluir</button>
            </Styled.ButtonContainer>
        </Styled.Card>
    )
}