import styled from "styled-components"


export const Card = styled.div` 

    width: 240px;
    height: 320px;
    margin-right: 30px;
    margin-top: 20px;
    background: linear-gradient(180deg, rgba(241,0,142,0.6) 40%, rgba(241,0,142,0.3) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;

    img{
        width: 140px;
        height: 140px;
        border-radius: 9999px;
    }

    h2{
        color: #19ACE7;
        font-weight: bold;
    }
    h3{
        color: #FFFF00;
    }

    p{
        color: #19ACE7;
        font-weight: bold;
        font-size: 12px;
    }

    button{
        border: none;
        font-weight: bold;
        color: #fff;
        border-radius: 5px;
        text-decoration: none;
        background-color: #19ACE7;
        padding: 8px;
        cursor: pointer;
    }

    
`

export const ButtonContainer = styled.div` 

    display: flex;
    justify-content: space-between;

    button{
        margin-left: 20px;
        width: 60px;
        height: 30px;
        border: none;
        font-size: 13px;
        border-radius: 5px;
        background-color: red;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
    }
    button:hover{
        opacity: 0.8;
    }

    a{
        width: 60px;
        height: 30px;
        font-size: 13px;
        font-weight: bold;
        color: #fff;
        border-radius: 5px;
        text-decoration: none;
        background-color: #19ACE7;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    a:hover{
        opacity: 0.9;
    }


`