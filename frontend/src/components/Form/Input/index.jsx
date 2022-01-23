import * as Styled from './styles'


export const Input =({ type, text, name, value, placeholder = '', handleOnChange, multiple = false})=>{

    return(

        <Styled.Input>
            <label htmlFor={name}>{text}:</label>
            <input type={type} min={0} value={value} name={name} id={name} placeholder={placeholder}  onChange={handleOnChange} {...(multiple ? {multiple} : '')}/>
        </Styled.Input>

    )
}