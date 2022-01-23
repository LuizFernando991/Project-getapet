import { useState, useEffect } from 'react'
import { usePet } from '../../hooks/usePet'
import { useParams } from 'react-router-dom'
import PatasImg from '../../images/patas.png'
import { Input } from '../../components/Form/Input'
import * as Styled from './styles'



export const EditPet = ()=>{


    const [ pet, setPet ] = useState('')
    const { editPet,  getPetById} = usePet()
    const { id } = useParams()

    const handleOnChange = (e)=>{
        setPet({...pet, [e.target.name] : e.target.value})
        
    }

    const OnFileChange =(e)=>{
        
        setPet({...pet, [e.target.name] : e.target.files})
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        editPet(pet)
        
    }

    useEffect(()=>{
        getPetById(id).then(res => setPet(res))
    }, [id, getPetById])


    return(
               
        <Styled.Container>
            <Styled.ContainerRegister>
                <h1>Editar Pet</h1>
                <form onSubmit={handleOnSubmit}>
                    <Input text='Nome' type='text' name='name' placeholder='Digite o nome do pet' handleOnChange={handleOnChange} value={pet.name || ''}/>
                    <div className='sub-form'>
                        <Input  text='Idade' type='number' name='age' placeholder='Digite a idade do pet' handleOnChange={handleOnChange} value={pet.age || ''}/>
                        <Input text='Peso (Kg)' type='number' name='weight' placeholder='Digite o peso do pet' handleOnChange={handleOnChange} value={pet.weight || ''}/>
                        <Input text='Cor' type='text' name='color' placeholder='Digite a cor do pet' handleOnChange={handleOnChange} value={pet.color || ''}/> {/*  || '' serve para corrigir o bug do undefined */}
                    </div>
                    <Input text='Fotos do pet ' type = 'file' name='images' multiple={'multiple'} handleOnChange={OnFileChange}/>
                    <input type="submit" value='Salvar'/>
                    
                </form>
            </Styled.ContainerRegister>
            <img src={PatasImg} alt='patas' />
        </Styled.Container>

    )
}