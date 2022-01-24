import styled from "styled-components";

export const CardContainer = styled.div` 

    width: 260px;
    height: 300px;
    background-color: #f6586f;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    border-radius: 5px;
    transform: scale(0.9);
    &:hover{
        transform: scale(1);
    }
    transition: all ease-in-out 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img{
        width: 120px;
        height: 120px;
        border-radius: 9999px;
        box-shadow: 0 0 1em #f1008e;
    
    }

    div{
        text-align: center;
        color: #fff;
        
        h3{
            margin-bottom: 5px;
            font-size: 2em;
            font-weight: bold;
        }
    }

    a{
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        background-color: #f1008e;
        padding: 14px;
        border-radius: 20px;
        transition: all ease-in-out 0.4s;
        
    }

    a:hover{
        opacity: 0.8;
        box-shadow: 0 0 0.5em #f1008e;
    }

`