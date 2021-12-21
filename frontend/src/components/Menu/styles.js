import styled from "styled-components";


export const Menu = styled.div`


    width: 50px;
    height: 50px;
    border-radius: 10000px;
    background-color: #eee;
    
    
  
    

    img{
        width: 50px;
        height: 50px;
        border-radius : 10000px;
        cursor: pointer;
        
    }


`

export const DropDownMenu = styled.div` 

    position: relative;
    top: 0px;
    right: 100px;
    background-color: #eee;
    width: 150px;
    border-radius: 20px 3px 20px 3px;
    padding: 0.35em;
    box-shadow: 0 0 0.1em #111;

    ul{
        width: 100%;
    }
    li{
        width: 100%;
        list-style: none;
        text-align: center;
    }



`