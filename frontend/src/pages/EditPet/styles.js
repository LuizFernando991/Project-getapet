import styled from "styled-components";

export const Container = styled.section` 

    min-height: 100vh;
    padding-top: 6%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        margin-top: -200px;
        margin-left: 500px;
        z-index: 1;
    }



`

export const ContainerRegister = styled.div` 



    width: 900px;
    padding: 40px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 20px 3px 20px 3px;
    border: 3px solid  #f1008e;
    box-shadow: 0 0 0.5em #f1008e;
    z-index: 2;

    h1{
        width: 100%;
        text-align: center;
        color: #f1008e;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .sub-form{
        display: flex;
        align-items: center;
        justify-content: space-between    ;
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


`