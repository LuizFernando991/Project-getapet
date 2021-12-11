
import { Link } from 'react-router-dom'
import * as Styled from './styles'

import Logo from '../../images/logo.png'


export const Navbar =()=>{





    return(

        <Styled.Nav>

            <Styled.Logo>
                <img src={Logo} alt="Get A Pet" />
                
            </Styled.Logo>

            <Styled.Menu>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Entrar</Link>
                </li>
                <li>
                    <Link to="/register">Cadastrar</Link>
                </li>
            </Styled.Menu>

        </Styled.Nav>

    )
}