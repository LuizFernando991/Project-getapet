import { Link } from 'react-router-dom'
import * as Styled from './styles'



export const PetCardMypets = ({pet, onClick})=>{

    

    return (
        <Styled.Card>
            <img src={`http://localhost:5000/images/pets/${pet.images[0]}`} alt={pet.name} />

            <h2>{pet.name}</h2>

            <p>Idade: {pet.age} {pet.age > 1 ? 'Anos' : 'Ano'}</p>

            {pet.adopter &&
                <button>Concluir adoção</button>
            }
            <Styled.ButtonContainer>
                <Link to={`/editpet/${pet._id}`}>Editar</Link>
                <button onClick={()=>onClick(pet._id)}>Excluir</button>
            </Styled.ButtonContainer>
        </Styled.Card>
    )
}