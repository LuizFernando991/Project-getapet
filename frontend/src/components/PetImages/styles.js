import styled, {css} from "styled-components";


export const ImagesContainer = styled.div` 
    width: 550px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;


`


export const PreviewImageContainer = styled.div` 
    height: 420px;
    width: 100px;


`

export const MainImage = styled.div` 
    
    width: 445px;
    height: 400px;
    margin-left: 30px;

    img{
        width: 445px;
        height: 400px;
    }

`

export const Arrows = styled.div` 

    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg{
        color: #fb008e;
        font-size: 2em;
    }

    &:hover{
        transform: scale(1.2);
    }

`

export const Images = styled.div` 

    width: 100%;
    height: 380px;
    overflow-y: hidden;
    img{
        width: 100px;
        margin-bottom: 12px;
        height: 100px;
        cursor: pointer;
    }
`

export const ImageSlider = styled.div` 
    ${({slider})=>css` 
        margin-top: -${slider}px; 
    `}
    
    transition: all ease-in-out 0.5s;

`