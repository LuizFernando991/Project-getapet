
import { Link } from 'react-router-dom'
import * as Styled from './styles'


export const AdoptedCard = ({pet})=>{


    return(
        <Styled.Card>
            <img src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`} alt={pet.name} />

            <h2>{pet.name}</h2>

            <h4>Contato para adoção: <span>{pet.user.phone}</span></h4>

            
            <Styled.ButtonContainer>
                <Link to={`/pet/${pet._id}`}>Ver Mais</Link>    
            </Styled.ButtonContainer>
        </Styled.Card>
    )
}