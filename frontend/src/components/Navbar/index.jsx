
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../../components/Menu'
import Logo from '../../images/logo.png'
import * as Styled from './styles'



// context

import { UserContext } from '../../contexts/UserContext'


export const Navbar =()=>{

    const { authenticated } = useContext(UserContext)



    return(

        <Styled.Nav>

            <Styled.Logo>
                <Link to='/'><img src={Logo} alt="Get A Pet" /></Link>
                
            </Styled.Logo>

            <Styled.Menu>
                
                {authenticated ? 
                    (
                    <Menu/>
                    ) 
                    : 
                    (
                    <>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Entrar</Link>
                        </li>
                        <li>
                            <Link to="/register">Cadastrar</Link>
                        </li>
                    </>
                    )
                
                }
            </Styled.Menu>

        </Styled.Nav>

    )
}