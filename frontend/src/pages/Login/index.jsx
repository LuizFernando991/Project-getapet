import * as Styled from './styles'
import { Link } from 'react-router-dom'

import PatasImg from '../../images/patas.png'

import { Input } from '../../components/Form/Input'


export const Login = ()=>{

    const handleOnChange =()=>{

    }


    return(

        
        <Styled.Container>
            <Styled.ContainerLogin>
                <h1>Registrar</h1>
                <form>
                    
                    <Input text='Email' type='email' name='email' placeholder='Digite seu email' handleOnChange={handleOnChange}/>
                    <Input text='Senha' type='password' name='password' placeholder='Digite uma senha' handleOnChange={handleOnChange}/>
                    
                    <input type="submit" value='Entrar'/>
                </form>
            <p>Não possui conta? <Link to='/register'><span>Cadastrar</span></Link></p>
            </Styled.ContainerLogin>
            <img src={PatasImg} alt='patas' />
        </Styled.Container>


    )
}