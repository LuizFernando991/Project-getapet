import { useEffect, useState, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGetUser } from '../../hooks/useGetUser'
import { UserContext } from '../../contexts/UserContext'
import UserImage from '../../images/userProfileDefaut.jpg'


import * as Styled from './styles'


export const Menu =()=>{

    const isMounted = useRef(true)

    const [ user, setUser ] = useState({})
    const [ isOpen, setIsOpen ] = useState(false)
    const [ getCheckUser ] = useGetUser()

    const { logout } = useContext(UserContext)

    const handleOnLogout =(e)=>{
        e.preventDefault()
        logout()
    }

    useEffect(()=>{
        getCheckUser().then(r => {
            if(isMounted.current){
                setUser(r)
            }
        })

        return ()=> {isMounted.current = false}
    }, [getCheckUser])


    return(
        <Styled.Menu onClick={()=>{setIsOpen(!isOpen)}}>
            {user.image ?
                <img src={`http://localhost:5000/images/users/${user.image}`} alt={user.name} />
                :
                <img src={UserImage} alt={user.name} />
            }
            {isOpen &&
            <Styled.DropDownMenu>
                <ul>
                    <li>
                        <Link to='/Profile'>Perfil</Link>
                    </li>
                    <li>
                        <Link to='/mypets'>Meus pets</Link>
                    </li>
                    <li>
                        <Link to='#' onClick={handleOnLogout}>Sair</Link>
                    </li>
                </ul>
            </Styled.DropDownMenu>
            }
        </Styled.Menu>
    )

}