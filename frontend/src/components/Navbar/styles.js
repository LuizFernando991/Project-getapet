import styled from "styled-components";



export const Nav = styled.nav` 

    display: flex;
    justify-content: space-between;
    padding: 1em 1.5em;
    border-bottom: 1px solid #dff;
    background: linear-gradient(90deg, rgba(241,0,142,1) 0%, rgba(255,244,56,0.7959558823529411) 100%);
    

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
        border: 2px solid transparent;
    }

    a:hover{
        border-bottom: 3px solid #ff1493;
        color: #fff;
    }

`