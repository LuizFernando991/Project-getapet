import styled, {css, keyframes} from "styled-components";

const translateMessage = keyframes`

    0%{ opacity : 0.6 }
    100%{ opacity : 1 }




`


export const Message = styled.div` 

    position: absolute;
    width: 500px;
    text-align: center;
    background-color: #fff;
    padding: 1em;
    border: 1px solid #fff;
    border-radius: 20px 3px 20px 3px;
    left: 0;
    right: 0;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
    box-shadow: 0 0 0.3em #fff;
    


    ${({type})=> css`

        ${type === 'success' ? 'color : #1ED604;' : ''}
        ${type === 'error' ? 'color: #FB2020;' : ''}
    
    
    `}

    .button{
        position: absolute;
        top: 0;
        right: 0;
        color: #e1e1e1;
        font-size: 30px;
        cursor: pointer;
    }

    .button:hover{
        color: #111;
    }

    animation-name: ${translateMessage};
    animation-duration: 0.3s;
    animation: ease;

`

