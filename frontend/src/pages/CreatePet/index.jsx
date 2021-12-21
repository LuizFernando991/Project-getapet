import { useState } from 'react'

import PatasImg from '../../images/patas.png'
import { Input } from '../../components/Form/Input'
import * as Styled from './styles'



export const CreatePet = ()=>{


    const [ pet, setPet ] = useState({})

    const handleOnChange = (e)=>{
        setPet({...pet, [e.target.name] : e.target.value})
        
    }

    const OnFileChange =(e)=>{
        
        setPet({...pet, [e.target.name] : e.target.files})
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        
    }


    return(
               
        <Styled.Container>
            <Styled.ContainerRegister>
                <h1>Cadastrar Novo Pet</h1>
                <form onSubmit={handleOnSubmit}>
                    <Input text='Nome' type='text' name='name' placeholder='Digite o nome do pet' handleOnChange={handleOnChange}/>
                    <div className='sub-form'>
                        <Input  text='Idade' type='number' name='age' placeholder='Digite a idade do pet' handleOnChange={handleOnChange}/>
                        <Input text='Peso (Kg)' type='number' name='weight' placeholder='Digite o peso do pet' handleOnChange={handleOnChange}/>
                        <Input text='Cor' type='text' name='color' placeholder='Digite a cor do pet' handleOnChange={handleOnChange}/>
                    </div>
                    <Input text='Fotos do pet ' type = 'file' name='images' multiple={'multiple'} handleOnChange={OnFileChange}/>
                    <input type="submit" value='Cadastrar'/>
                    
                </form>
            </Styled.ContainerRegister>
            <img src={PatasImg} alt='patas' />
        </Styled.Container>



    )
}