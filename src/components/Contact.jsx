import React from 'react'
import styled from 'styled-components'
import { devices } from '../style/Constants'
import { Icon } from '@iconify/react';

const Contact = () => {

  return (
        <Wrapper className='wrapper' id='contact'>
        <Heading data-aos='fade-right'>
            <span>04.</span>Let's talk
        </Heading>

        <Content>
            <Left>
                <p data-aos='fade-up'>One of my favorite things about developing web applications is the variety in projects. So if you want to collaborate or have some work for me , get in touch and tell me what you have in mind.</p>
                <nav data-aos='fade-up'>
                <a href="https://linkedin.com/in/adarshchavhan21">
                    <Icon icon="ri:linkedin-fill" width="18" />
                </a>
                <a href="https://github.com/adarshchavhan01">
                <Icon icon="ri:github-line" width="18" />
                </a>
                <a href="mailto:adarshchavhan01@gmail.com">
                <Icon icon="ic:outline-email" width="18" />
                </a>
                <a href="tel:7769929460">
                <Icon icon="tabler:phone" width="18" />
                </a>
                </nav>
            </Left>
            <Form data-aos='fade-up' action='https://formspree.io/f/xgejkanv' method='POST'>
                <input type="text" name="name" placeholder='Name' required/>
                <input type="email" name="email" placeholder='Email' required/>
                <textarea rows={4} name="message" placeholder='Message' required/>
                <button type='submit'>Submit</button>
            </Form>
        </Content>

    </Wrapper>
  )
}


const Wrapper = styled.div`
    padding: 50px 0;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    @media ${devices.xs} {
        padding: 15px;
    }
    
`;

const Heading = styled.h2`
    span{
        margin-right: 20px;
    }
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    gap: 50px;
    @media ${devices.xs} {
        flex-direction: column-reverse;
    }
`;

const Form = styled.form`
flex: 1;
    width: 100%;
    max-width: 400px;
    padding: 60px 25px 25px 25px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 25px;
    background: ${({theme})=> theme.bgColor1};
    border-radius: 10px;
    input,
    textarea{
        width: 100%;
        background: ${({theme})=> theme.bgColor};
        border: 0;
        outline: 0;
        padding: 15px 10px;
        font-family: inherit;
        color: ${({theme})=> theme.textColor1};
        border-radius: 5px;
        border: 1px solid ${({theme})=> theme.shadowColor};
        resize: none;
        overflow: auto;
        &::placeholder{
            color: ${({theme})=> theme.textColor};
        }
    }

    button{
        padding: 10px;
        background: ${({theme})=> theme.baseColor};
        color: #fff;
        border-radius: 5px;
        border: 1px solid  ${({theme})=> theme.baseColor};
        &:hover{
            background: transparent;
            color:  ${({theme})=> theme.baseColor};
        }
    }
`;


const Left = styled.div`
    flex: 1;
    padding: 20px 0;
    >p{
        line-height: 200%;
        font-size: 14px;
        @media ${devices.xs} {
            font-size: 13px;   
        }
    }

    > nav{
        padding: 10px 0;
        display: flex;
        gap: 10px;
        >a{
            display: flex;
            padding: 10px;
            background: ${({theme})=> theme.bgColor1};
            border-radius: 10px;
            &:hover{
                background: ${({theme})=> theme.baseColor};
                color: #fff;
            }
        }
    }

`;

export default Contact