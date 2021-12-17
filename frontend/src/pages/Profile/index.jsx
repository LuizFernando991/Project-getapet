import { useState, useEffect, useContext, useRef } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useGetUser} from '../../hooks/useGetUser'


import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'
import { Input } from '../../components/Form/Input'
import PatasImg from '../../images/patas.png'

import * as Styled from './styles'


export const Profile = ()=>{

    const isMounted = useRef(true)
    const [user, setUser] = useState({})
    const [preview, setPreview] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    
    const [getCheckUser] = useGetUser()

    const { edit } = useContext(UserContext)

    const handleChange = (e)=>{

        setUser({...user, [e.target.name] : e.target.value})
    }

    const onFileChange = (e)=>{
        setPreview(e.target.files[0])
        setUser({...user, [e.target.name] : e.target.files[0]})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        edit(user)
        
    }

    useEffect(()=>{
        getCheckUser().then(r => {
            if(isMounted.current){
                setUser(r)
            }
        })

        return ()=> {isMounted.current = false}
    }, [ getCheckUser])

    return(
        <Styled.Container>
            <Styled.ContainerEdit>
                <h1>Editar Perfil</h1>
                {process.env.REACT_APP_API}
                {(user.image || preview) && (
                    <Styled.UserImage>
                        <img className='img-profile' alt={user.name} src={preview ? URL.createObjectURL(preview) : `http://localhost:5000/images/users/${user.image}`} />
                    </Styled.UserImage>

                )}
                <form onSubmit={handleSubmit} >
                    <Input text='Nome' type='text' name='name' placeholder='Digite seu nome'  handleOnChange={handleChange} value={user.name || ''} />
                    <Input text='Telefone' type='text' name='phone' placeholder='Digite o seu telefone'  handleOnChange={handleChange} value={user.phone || ''} />
                    <Input text='Email' type='email' name='email' placeholder='Digite seu email' handleOnChange={handleChange} value={user.email || ''} />
                    <Input text='Senha' type={showPassword? 'text' : 'password'} name='password' placeholder='Digite uma senha' handleOnChange={handleChange} />
                    <Input text='Confirmação de senha ' type = {showPassword? 'text' : 'password'} name='confirmpassword' placeholder='Confirme a senha' handleOnChange={handleChange} />
                    <Input text='Imagem ' type = 'file' name='image' handleOnChange={onFileChange}/>
                    {showPassword? <IoEyeOutline onClick={()=>{setShowPassword(!showPassword)}} className='passIcon'/> : <IoEyeOffOutline className='passIcon' onClick={()=>{setShowPassword(!showPassword)}}/>}
                    <input type="submit" value='Salvar'/>
                </form>
            
            </Styled.ContainerEdit>
            <img className='patas' src={PatasImg} alt='patas' />
        </Styled.Container>
    )
}