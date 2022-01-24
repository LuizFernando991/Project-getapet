import styled, {css} from "styled-components"

export const Container = styled.div` 
    width: 600px;
    height: 600px;
    overflow: hidden;
    margin: 10px auto;
    position: relative;
    border-radius: 3px;


    .right-arrow{
        font-size: 40px;
        color: #fb008e;
        position: absolute;
        top: 45%;
        right: 5px;
        cursor: pointer;
    }
    .left-arrow{
        font-size: 40px;
        color: #fb008e;
        position: absolute;
        top: 45%;
        left: 5px;
        cursor: pointer;
    }

    .left-arrow:hover, .right-arrow:hover{
        transform: scale(1.2);
        transition: all ease-in-out 0.2s;
    }

`
export const H1 = styled.h1` 
    margin-left: 20px;
    color: #f6586f;
    font-weight: bold;

`

export const SliderContainer = styled.div` 
    width: 100000000px;
    height: 600px;
    overflow: hidden;
    display: flex;
    ${({slider})=> css` 
        margin-left: -${slider}px;
    `}

    transition: all ease-in 0.4s;
    

`

export const NewPetContainer = styled.a`
    width: 600px;
    height: 600px;
    background-color: #f1f1f1;
    ${({img})=> css` 
       background-image: ${img};
    `}
    background-size: cover;

    h1{
        margin-left: 20px;
        margin-top: 500px;
        color: #fff;
        text-shadow: -1px -1px 0 #fb008e, 1px -1px 0 #fb008e, -1px 1px 0 #fb008e, 1px 1px 0 #fb008e;
    }

    cursor: pointer;

`

export const AllPetsContainer = styled.section` 

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;

`

export const NoPets = styled.div` 

    width: 100%;
    margin: 250px auto;
    text-align: center;

    h1{
        color: #f6586f;
    }

`


