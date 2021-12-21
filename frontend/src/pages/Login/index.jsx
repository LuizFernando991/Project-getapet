import * as Styled from './styles'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

import PatasImg from '../../images/patas.png'

import { Input } from '../../components/Form/Input'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'


export const Login = ()=>{

    const [showPassword, setShowPassword] = useState(false)
    const [ user, setUser ] = useState({})

    const { login } = useContext(UserContext)

    const handleOnChange =(e)=>{
        setUser({...user, [ e.target.name] : e.target.value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        login(user)
    }


    return(

        
        <Styled.Container>
            <Styled.ContainerLogin showPassword = { showPassword }>
                <h1>Entrar</h1>
                <form onSubmit={handleSubmit}>
                    
                    <Input text='Email' type='email' name='email' placeholder='Digite seu email' handleOnChange={handleOnChange}/>
                    <Input text='Senha' type={showPassword? 'text':'password'} name='password' placeholder='Digite sua senha' handleOnChange={handleOnChange}/>
                    
                    {showPassword? <IoEyeOutline onClick={()=>{setShowPassword(!showPassword)}} className='passIcon'/> : <IoEyeOffOutline className='passIcon' onClick={()=>{setShowPassword(!showPassword)}}/>}
                    
                    <input type="submit" value='Entrar'/>
                </form>
            <p>Não possui conta? <Link to='/register'><span>Cadastrar</span></Link></p>
            </Styled.ContainerLogin>
            <img src={PatasImg} alt='patas' />
        </Styled.Container>


    )
}