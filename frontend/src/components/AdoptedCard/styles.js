import styled from "styled-components";


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

    h4{
        color: #19ACE7;
        font-weight: bold;
        font-size: 14px;

        span{
            color: #7FFFD4;
        }
    }
    
`

export const ButtonContainer = styled.div` 

    display: flex;
    justify-content: space-between;

    a{
        width: 100px;
        height: 40px;
        font-size: 13px;
        font-weight: bold;
        color: #fff;
        border-radius: 5px;
        text-decoration: none;
        background-color: #19ACE7;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        transition: all ease-in 0.4;
    }
    a:hover{
        padding: 18px;
        border: 2px solid #19ACE7;
        color: #19ACE7;
        background-color: #fff;
    }


`