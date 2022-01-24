import styled from "styled-components";



export const Ul = styled.ul` 

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 20px 0;

    li{
        list-style: none;
    }

    li:not(:last-child){
        margin-right: 10px;
    }

    li button{
        border: none;
        background-color: #f1008e;
        padding: 20px;
        border-radius: 9999px;
        color: #fff;
        font-size: 1.2em;
        font-weight: bold;
        cursor: pointer;
    }

    li button:hover{
        opacity: 0.8;
    }

    .selected{
        color: #f1008e;
        padding: 18px;
        background-color: #fff;
        border: 2px solid #f1008e;
    }

    .arrows{
        padding: 10px;
    }
    
    .arrows button {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }


`