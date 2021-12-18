import * as Styled from './styles'


export const Input =({ type, text, name, placeholder, handleOnChange, value, multiple})=>{


    return(

        <Styled.Input>
            <label htmlFor={name}>{text}:</label>
            <input type={type} min={0} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} {...(multiple ? {multiple} : '')}/>
        </Styled.Input>

    )
}