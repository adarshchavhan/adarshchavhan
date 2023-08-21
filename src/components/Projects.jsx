import React from 'react'
import styled from 'styled-components'
import { devices } from '../style/Constants'
import { Icon } from '@iconify/react';
import projects from '../assets/Projects';

const Projects = () => {

  return (
        <Wrapper className='wrapper' id='projects'>
        <Heading data-aos='fade-right'>
            <span>03.</span>Some things that I've built
        </Heading>

        <Menu>

            {projects.map(item => (
                
                <MenuItem data-aos='fade-up' key={item.id}>
                    <Thumbnail>
                        <img src={item.image} alt="" />
                    </Thumbnail>
                    <Info>
                        <Title>{item.title}</Title>
                        <Brief>{item.description}</Brief>
                        <Skills>
                            {item.skills.map(skill => (
                                <Skill>{skill}</Skill>
                            ))}
                        </Skills>

                        <More>
                            <Button href={item.github}>
                            <Icon icon="mingcute:github-line" width="24" />
                            </Button>
                            <Button href={item.url}>
                            <Icon icon="akar-icons:link-out" width="24" />
                            </Button>
                        </More>
                    </Info>
                </MenuItem>

            ))}

        </Menu>
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

const Menu = styled.div`
    padding: 50px 0;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    @media ${devices.md} {
        gap: 30px;
    }
`;

const MenuItem = styled.div`
    width: calc(100% / 2 - 40px);
    transition: all .5s linear;
    padding: 7px;
    border-radius: 10px;

    @media ${devices.md} {
        width: calc(100% / 2 - 40px);
    }

    @media ${devices.sm} {
        width: 100%;
        max-width: 400px;
        margin: 0px auto;
    }

    &:hover{
        box-shadow: 0 2px 4px ${({theme})=> theme.textColor};
        transform: translateY(-5px);
        > div > img{
            filter: grayscale(0);
        }
    }
`;

const Thumbnail = styled.div`
    > img{
        width: 100%;
        border-radius: 10px;
        filter: grayscale(.7);
    }
`;

const Info = styled.div``;

const Title = styled.h3`
    font-size: 18px;
    color: ${({theme})=> theme.textColor1};
    padding: 10px 0;
`;

const Brief = styled.p`
    font-size: 14px;
    color: ${({theme})=> theme.textColor};
    background: ${({theme})=> theme.bgColor1};
    padding: 15px;
    border-radius: 10px;
    line-height: 200%;
    @media ${devices.xs} {
            font-size: 13px;   
        }
`;


const Skills = styled.ul`
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 10px;
`;

const Skill = styled.li`
    padding: 0px 5px;
    list-style-type: none;
    background: ${({theme})=> theme.bgColor1};
    font-family: ${({theme})=> theme.cursiveFont};
    font-size: 12px;
`;


const More = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

const Button = styled.a`
    padding: 10px;
    border-radius: 10px;
    display: flex;
    &:hover{
        background: ${({theme})=> theme.bgColor1};
    }
`;

export default Projects