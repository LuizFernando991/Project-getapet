import styled from "styled-components";



export const Nav = styled.nav` 

    display: flex;
    justify-content: space-between;
    padding: 1em 1.5em;
    background-color: #fff438;
    

`

export const Logo = styled.div` 

    display: flex;
    align-items: center;

    img{
        width: 40px;
        margin-right: 0.8em;
    }



`

export const Menu = styled.ul` 

    display: flex;
    align-items: center;
    list-style: none;

    li, a{
        text-decoration: none;
        color: #f1008e;
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s;
        padding: 0.5em 0.8em;
        border-radius: 3px;
    }

    a:hover{
        background-color: #ff1493;
        color: #fff;
    }

`