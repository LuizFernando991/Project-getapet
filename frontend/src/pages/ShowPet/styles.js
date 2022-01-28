import styled from "styled-components";


export const PetContainer = styled.section` 

    width: 70%;
    height: 520px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;



`

export const PetInformationContainer = styled.section` 
    width: 480px;
    height: 520px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    button{
        width: 200px;
        height: 40px;
        border: none;
        border-radius: 9999px;
        background-color: #ED48C3;
        color: #fff;
        font-size: 1em;
        font-weight: bold;
        cursor: pointer;
        align-self: center;
        transition: all ease-in-out 0.4s;
    }

    button:hover{
        background-color: #FA9BEF;
    }

`

export const PetInformation = styled.div` 

    div{
        display: flex;
    }
    h1{
        font-size: 2em;
        color: #f6586f;
        margin-bottom: 6px;
    }

    p{
        padding: 2px;
        font-size: 1.3em;
        font-weight: 600;
        color: #FA9BEF;
        margin-right: 20px;
    
    }

    p span{
        color: #ED48C3;
    }
    
`
export const Adopted = styled.span` 
    align-self: center;
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
    padding: 15px;
    background-color: #2DF846;
    border-radius: 999px;
`