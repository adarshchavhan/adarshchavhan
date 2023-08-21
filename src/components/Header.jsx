import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { devices } from '../style/Constants'
import { Icon } from '@iconify/react';

const Header = ({theme, handleTheme}) => {

    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!open);
    }

  return (
    <StyledHeader>
        <Wrapper>
            <Logo src='/logo.svg' width={20} data-aos='zoom-in' data-aos-delay="1200"/>
            <Nav data-aos='fade-down' data-aos-delay="900">
                <Button onClick={handleTheme}>
                    <Icon icon={theme==='dark' ? "mingcute:sun-line" : "bx:moon"} width={18} />
                </Button>
                
                <MenuButton onClick={handleMenu}>
                    <Icon icon="heroicons-solid:menu-alt-3" width="20" />
                </MenuButton>
                
                {open && <Backdrop onClick={handleMenu}></Backdrop>}
                    
                    <Menu className={open ? 'open' : ''}>
                        <MenuItem as='buttton' onClick={handleMenu}>
                        <Icon icon="gg:close-r" width="18" />
                        </MenuItem>
                        <MenuItem href='#home' onClick={handleMenu}>
                            <span>01.</span>Home
                        </MenuItem>
                        <MenuItem href='#skills' onClick={handleMenu}>
                            <span>02.</span>Skills
                        </MenuItem>
                        <MenuItem href='#projects' onClick={handleMenu}>
                            <span>03.</span>Projects
                        </MenuItem>
                        <MenuItem href='#contact' onClick={handleMenu}>
                            <span>04.</span>Contact
                        </MenuItem>
                    </Menu>
                
            </Nav>
        </Wrapper>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
    width: 100%;
    height: 70px;
    backdrop-filter: blur(10px);
    border-bottom:1px solid ${({theme})=> theme.bgColor};
    position: fixed;
    top: 0;
    z-index: 2;
`;

const Wrapper = styled.div`
    max-width: 1350px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.img`
    width: 32px;
    margin: 15px;
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    padding: 20px;
    border-radius: 50%;
    display: flex;
    @media ${devices.sm}{
        padding: 15px;
    }
`;

const MenuButton = styled(Button)`
    display: none;
    @media ${devices.sm}{
        display: flex;
    }
`;

const Menu = styled.nav`
    display: flex;
    align-items: center;

    @media ${devices.sm} {
        width: 200px;
        height: 100vh;
        flex-direction: column;
        background: ${({theme})=> theme.bgColor1};
        position: fixed;
        top: -10px;
        right: 0;
        transform: translate(200px);
        transition: all .2s ease-in-out;
        &.open{
            transform: translate(0px);
            box-shadow: 0 0 20px ${({theme})=> theme.shadowColor};
        }
    }
`;

const MenuItem = styled.a`
    padding: 20px;
    font-size: 14px;
    font-family:  ${({theme})=> theme.cursiveFont};
    cursor: pointer;
    > span{
        color: ${({theme})=> theme.baseColor};
    }

    &:first-child{
        display: none;
    }

    &:hover{
        color: ${({theme})=> theme.baseColor};
    }
    @media ${devices.sm} {
        width: 100%;
        &:first-child{
            display: flex;
            justify-content: flex-end;
        }
    }
`;

const Backdrop = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 0;
    position: fixed;
    top: 0;
    left: 0;
`;

export default Header