import React from 'react'
import styled from 'styled-components'
import { devices } from '../style/Constants'
import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <Wrapper className='wrapper' id='home'>
        <BlueText data-aos='fade-up' data-aos-delay="600">Hi there, I'm</BlueText>
        <BigText data-aos='fade-up' data-aos-delay="800">
            Adarsh Chavhan.
            <br/>
            <span>I'm full stack developer.</span>
        </BigText>

        <Para data-aos='fade-up' data-aos-delay="1000">
        I enjoy developing websites and web applications. Love to have conversations about anything and everything.
        </Para>

        <img src="../.." alt="" />

        <Button href={'/resume.pdf'} download={'resume.pdf'}  data-aos='fade-up' data-aos-delay="1200">Resume</Button>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    height: 100vh !important;
    max-height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    @media ${devices.xs} {
        padding: 15px;
    }
`;

const BlueText = styled.h2`
    color: ${({theme})=> theme.baseColor};
    font-family: ${({theme})=> theme.cursiveFont};
    font-weight: 500;
    font-size: 16px;
    &:after{
        background: ${({theme})=> theme.shadowColor};
    }
`;

const BigText = styled.h1`
    font-size: 60px;
    font-family: 'Inter', sans-serif;
    color: ${({theme})=> theme.textColor1};
    > span{
        color: ${({theme})=> theme.textColor};
    }

    @media ${devices.sm} {
        font-size: 48px;
    }
    @media ${devices.xs} {
        font-size: 38px;
    }
`; 

const Para = styled.p`
    max-width: 500px;
    display: inline-block;
    font-family: 'Inter', sans-serif;
    line-height: 200%;
`;

const Button = styled.a`
    display: inline-block;
    border: 1px solid ${({theme})=> theme.baseColor};
    color: ${({theme})=> theme.baseColor};
    padding: 12px 40px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    &:hover{
        background: ${({theme})=> theme.baseColor};
        color: #fff;
    }
`;

export default Hero