import React from 'react'
import styled from 'styled-components'
import { devices } from '../style/Constants'
import { Icon } from '@iconify/react';

const Skills = () => {
    const theme = localStorage.getItem("theme");

  return (
        <Wrapper className='wrapper' id='skills'>
        <Heading data-aos='fade-right'>
            <span>02.</span>Tech-stack that I know
        </Heading>

        <Menu>
            <MenuItem data-aos='fade-up'>
                <Icon icon="icomoon-free:html-five" width="65" />
                <Poppover>HTML</Poppover>
            </MenuItem>

            <MenuItem data-aos='fade-up'>
                <Icon icon="devicon-plain:css3" width="65" />
                <Poppover>CSS</Poppover>
            </MenuItem>

            <MenuItem data-aos='fade-up'>
                <Icon icon="akar-icons:javascript-fill" width="65" />
                <Poppover>JavaScript</Poppover>
            </MenuItem>

            <MenuItem data-aos='fade-up'>
                <Icon icon="akar-icons:react-fill" width="65" />
                <Poppover>React</Poppover>
            </MenuItem>

            <MenuItem data-aos='fade-up'>
                <Icon icon="akar-icons:redux-fill" width="65" />
                <Poppover>Redux</Poppover>
            </MenuItem>

            <MenuItem data-aos='fade-up'>
                <Icon icon="fa-brands:node" width="65" />
                <Poppover>Node</Poppover>
            </MenuItem>

            <MenuItem data-aos='fade-up'>
                <Icon icon={`skill-icons:expressjs-${theme==='dark' ? 'dark' : 'light'}`} width="65" />
                <Poppover>Express</Poppover>
            </MenuItem>

            <MenuItem data-aos='fade-up'>
                <Icon icon="simple-icons:mongodb" width="65" />
                <Poppover>MongoDB</Poppover>
            </MenuItem>

            <MenuItem data-aos='fade-up'>
                <Icon icon="mingcute:github-fill" width="65" />
                <Poppover>Github</Poppover>
            </MenuItem>

            <MenuItem data-aos='fade-up'>
                <Icon icon="teenyicons:npm-solid" width="65" />
                <Poppover>NPM</Poppover>
            </MenuItem>
        </Menu>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    height: fit-content;
    padding: 50px 0;
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

const Menu = styled.nav`
    padding: 50px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;
    @media ${devices.sm} {
        gap: 20px;
        padding: 25px 0;
    }
`;

const MenuItem = styled.div`
    padding: 25px;
    border: 1px solid ${({theme})=> theme.textColor};
    border-radius: 14px;
    position: relative;
    
    @media ${devices.sm} {
        >svg{
        width: 50px;
        }   
    }

    @media ${devices.md} {
        >svg{
        width: 40px;
        }   
    }

    &:hover{
        color: ${({theme})=> theme.baseColor};
        border: 1px solid ${({theme})=> theme.baseColor};
        > div{
            scale: 1;
        }
    }
`;

const Poppover = styled.div`
    background: ${({theme})=> theme.baseColor};
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    padding: 6px 15px;
    border-radius: 5px;
    line-height: 6px;
    display: flex;
    position: absolute;
    bottom: -7px;
    right: -20px;
    scale: 0;
    transition: all .5s ease-in-out;
`;

export default Skills