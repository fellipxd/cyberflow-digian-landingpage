import React from 'react';
import styled from 'styled-components';

import {HashLink as Link } from 'react-router-hash-link';
import { FaTimes } from 'react-icons/fa';





const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background:#383CC1;
    padding: 2rem;
    display: grid;
    align-items: center;
    top: 0;left: 0;
    transition: 0ms.3s ease-in-out;
    opacity: ${({isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    color: #fff;

`
const CloseIcon = styled(FaTimes)`
    color: #fff;

`
const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    
`

const SidebarMenu = styled.ul`
 display: grid;
 grid-template-columns: 1fr;
 text-align: center;
 
`

const SidebarWrapper = styled.div`
    color: #fff;

`

const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    margin-top: 4rem;
    text-decoration: none;
    list-style: none;
    transition: 0ms.2s ease-in-out;
    color:  #fff;

    &:hover{
        color: #fff;
        transition: 0ms.2s ease-in-out;
    }
`

const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebtnRoute = styled(Link)`
     border-radius: 50px;
   background: transparent;
   white-space: nowrap;
   padding: 10px 22px;
   color: #fff;
   font-size: 1.5rem;
   border: 1px solid #fff;
   outline: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   margin-top: 4rem;

   &:hover{
       transition: all 0.2s ease-in-out;
       transform: translateY(-5px) scale(1.1);  
   }
`










export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='#home'>
                        Home
                    </SidebarLink>
                    <SidebarLink to='#about'>
                       About
                    </SidebarLink>
                    <SidebarLink to='#services'>
                        Services
                    </SidebarLink>
                    <SidebarLink to='#contact'>
                        Contact Us
                    </SidebarLink>
                   
                </SidebarMenu>
                <SideBtnWrap>
                       <SidebtnRoute to='/Login'>Get a Quote</SidebtnRoute>
                   </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
