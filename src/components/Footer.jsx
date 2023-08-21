import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <Copyright>Developed by <a href="https://www.linkedin.com/in/adarshchavhan21" target='_blank'>Adarsh Chavhan</a></Copyright>
  )
}

const Copyright = styled.p`
    margin-top: 50px;
    padding: 25px;
    text-align: center;
    background: ${({theme})=> theme.baseColor};
    color: #fff;
    font-size: 13px;
    > a{
        text-decoration: underline;
    }
`;

export default Footer