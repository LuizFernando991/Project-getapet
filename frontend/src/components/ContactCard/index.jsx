import * as Styled from './styles'


export const ContactCard = ({msg, setIsActived})=>{

    console.log(msg)

    return(
        <>
            <Styled.CardContainer onClick={()=>setIsActived(false)}/>
            <Styled.CardContact>
                <h1>{msg}</h1>
                <button onClick={()=>setIsActived(false)}>OK</button>
            </Styled.CardContact>
        </>
    )
}