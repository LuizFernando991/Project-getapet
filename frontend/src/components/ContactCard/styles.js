import styled from "styled-components";


export const CardContainer = styled.div` 

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0, 0, 0, 0.5)


`

export const CardContact = styled.div` 

    width: 500px;
    color: #1ED604;
    height: 140px;
    position: absolute;
    padding: 10px;
    top: 40%;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    background-color: #fff;
    font-size: 10px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    border-radius: 10px;


    button{
        background-color: #1ED604;
        border: none;
        padding: 10px;
        border-radius: 10px;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
    }
    button:hover{
        opacity: 0.8;
    }
    
`