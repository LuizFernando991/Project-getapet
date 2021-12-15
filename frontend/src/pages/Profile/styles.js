import styled from "styled-components";



export const Container = styled.div` 


    min-height: 100vh;
    padding-top: 10%;
    background: linear-gradient(90deg, rgba(241,0,142,1) 0%, rgba(255,244,56,0.7959558823529411) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        margin-top: -240px;
        margin-left: 500px;
        z-index: 1;
    }


`

export const ContainerEdit = styled.section` 

    
    width: 500px;
    padding: 20px;
    border-radius: 20px 3px 20px 3px;
    background-color: #fff;
    z-index: 2;
    box-shadow: 0 0 0.3em #fff;

    h1{
        width: 100%;
        text-align: center;
        color: #f1008e;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    
    input[type='submit']{
        width: 100%;
        height: 50px;
        background: linear-gradient(90deg, rgba(241,0,142,0.9) 0%, rgba(255,244,56,0.7959558823529411) 100%);
        border: none;
        border-radius: 20px 3px 20px 3px;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        transition: all ease 0.2s;
        cursor: pointer;
        
    }


    input[type='submit']:hover{
        background: linear-gradient(90deg, rgba(241,0,142,1) 0%, rgba(255,244,56,1) 100%);
        
    }

    p {
        color: #000;
        margin-top: 20px;
    }

    .passIcon{
        font-size: 20px;
        position: relative;
        top: -125px;
        left: 425px;
        cursor: pointer;
    }


    .passIcon:hover{
        color: #111;
    }


`