import styled from "styled-components";


export const Input = styled.div` 

    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    color: #f1008e;
    text-align: center;
    margin-top: 5px;

    label{
        margin-bottom: 0.3em;
        font-weight: bold;
        font-size: 1em;
    }


    input{

        padding: 0.7em;
        border: 3px solid #f1008e;;
        border-radius: 5px;
        text-align: center;

    }

    input::placeholder{

        color: #950F76;;
    }

    input:focus{
        outline: none;
        
    }


`