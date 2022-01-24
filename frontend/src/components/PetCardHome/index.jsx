import { Link } from 'react-router-dom'
import * as Styled from './styles'


export const PetCardHome = ({pet})=>{


    return(
        <>
            <Styled.CardContainer>
                <img src={`http://localhost:5000/images/pets/${pet.images[0]}`} alt={pet.name} />
                <div>
                    <h3>{pet.name}</h3>
                    <p>Idade: {pet.age}</p>
                </div>
                <Link to="/">Ver Mais</Link>
            </Styled.CardContainer>
        </>
    )

}