import { useState, useEffect } from 'react'
import { useGetApi} from '../../hooks/useGetUser'


import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'
import { Input } from '../../components/Form/Input'
import PatasImg from '../../images/patas.png'

import * as Styled from './styles'

export const Profile = ()=>{

    const [user, setUser] = useState({
        name : '',
        phone: '',
        email : '',
    })
    const [showPassword, setShowPassword] = useState(false)
    
    const [getCheckUser] = useGetApi()

    const handleChange = (e)=>{

        setUser({...user, [e.target.name] : e.target.value})

    }

    const onFileChange = (e)=>{
        setUser({...user, [e.target.name] : e.target.files[0]})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        
    }

    useEffect(()=>{
        getCheckUser().then(r => setUser(r))
    }, [ getCheckUser])

    return(
        <Styled.Container>
            <Styled.ContainerEdit>
                <h1>Editar usuário</h1>
                <form onSubmit={handleSubmit} >
                    <Input text='Nome' type='text' name='name' placeholder='Digite seu nome'  handleOnChange={handleChange} value={user.name} />
                    <Input text='Telefone' type='text' name='phone' placeholder='Digite o seu telefone'  handleOnChange={handleChange} value={user.phone} />
                    <Input text='Email' type='email' name='email' placeholder='Digite seu email' handleOnChange={handleChange} value={user.email} />
                    <Input text='Senha' type={showPassword? 'text' : 'password'} name='password' placeholder='Digite uma senha' onChange={handleChange}/>
                    <Input text='Confirmação de senha ' type = {showPassword? 'text' : 'password'} name='confirmpassword' placeholder='Confirme a senha' onChange={handleChange} />
                    <Input text='Imagem ' type = 'file' name='image' onChange={onFileChange}/>
                    {showPassword? <IoEyeOutline onClick={()=>{setShowPassword(!showPassword)}} className='passIcon'/> : <IoEyeOffOutline className='passIcon' onClick={()=>{setShowPassword(!showPassword)}}/>}
                    <input type="submit" value='Salvar'/>
                </form>
            
            </Styled.ContainerEdit>
            <img src={PatasImg} alt='patas' />
        </Styled.Container>
    )
}