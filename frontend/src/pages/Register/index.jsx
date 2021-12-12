import * as Styled from './styles'
import { Link } from 'react-router-dom'

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'
import PatasImg from '../../images/patas.png'
import { useContext, useState } from 'react'

import { Input } from '../../components/Form/Input'

import { UserContext } from '../../contexts/UserContext'


export const Register = ()=>{

    const { register } = useContext(UserContext)

    const [showPassword, setShowPassword] = useState(false)

    const [ user, setUser ] = useState({})



    const handleOnChange = (e)=>{
        setUser({...user, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e)=>{

        e.preventDefault()


        register(user)

    }


    return(

        
        <Styled.Container>
            <Styled.ContainerRegister>
                <h1>Registrar</h1>
                <form onSubmit={handleSubmit}>
                    <Input text='Nome' type='text' name='name' placeholder='Digite seu nome' handleOnChange={handleOnChange}/>
                    <Input text='Telefone' type='text' name='phone' placeholder='Digite o seu telefone' handleOnChange={handleOnChange}/>
                    <Input text='Email' type='email' name='email' placeholder='Digite seu email' handleOnChange={handleOnChange}/>
                    <Input text='Senha' type={showPassword? 'text' : 'password'} name='password' placeholder='Digite uma senha' handleOnChange={handleOnChange}/>
                    <Input text='Confirmação de senha ' type = {showPassword? 'text' : 'password'} name='confirmpassword' placeholder='Confirme a senha' handleOnChange={handleOnChange}/>
                    {showPassword? <IoEyeOutline onClick={()=>{setShowPassword(!showPassword)}} className='passIcon'/> : <IoEyeOffOutline className='passIcon' onClick={()=>{setShowPassword(!showPassword)}}/>}
                    <input type="submit" value='Cadastrar'/>
                </form>
            <p>Já possui conta? <Link to='/login'><span>Entrar</span></Link></p>
            </Styled.ContainerRegister>
            <img src={PatasImg} alt='patas' />
        </Styled.Container>


    )
}