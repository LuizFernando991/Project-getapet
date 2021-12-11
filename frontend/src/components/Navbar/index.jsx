
import { Link } from 'react-router-dom'
import * as Styled from './styles'



export const Navbar =()=>{





    return(

        <Styled.Nav>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Entrar</Link>
                </li>
                <li>
                    <Link to="/register">Cadastrar</Link>
                </li>
            </ul>

        </Styled.Nav>

    )
}