import * as Styled from './styles'
import { Link } from 'react-router-dom'

import PatasImg from '../../images/patas.png'

import { Input } from '../../components/Form/Input'


export const Register = ()=>{

    const handleOnChange =()=>{

    }


    return(

        
        <Styled.Container>
            <Styled.ContainerRegister>
                <h1>Registrar</h1>
                <form>
                    <Input text='Nome' type='text' name='name' placeholder='Digite seu nome' handleOnChange={handleOnChange}/>
                    <Input text='Telefone' type='text' name='phone' placeholder='Digite o seu telefone' handleOnChange={handleOnChange}/>
                    <Input text='Email' type='email' name='email' placeholder='Digite seu email' handleOnChange={handleOnChange}/>
                    <Input text='Senha' type='password' name='password' placeholder='Digite uma senha' handleOnChange={handleOnChange}/>
                    <Input text='Confirmação de senha ' type='password' name='confirmpassword' placeholder='Confirme a senha' handleOnChange={handleOnChange}/>
                    <input type="submit" value='Cadastrar'/>
                </form>
            <p>Já possui conta? <Link to='/login'><span>Entrar</span></Link></p>
            </Styled.ContainerRegister>
            <img src={PatasImg} alt='patas' />
        </Styled.Container>


    )
}