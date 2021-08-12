import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {HashLink as Link } from 'react-router-hash-link';
import {FaBars} from 'react-icons/fa'














const Navbox = styled.nav`
   background: ${({scrollNav}) => (scrollNav ? '#383CC1' : 'transparent')};
    height: 80px;
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    position: sticky;
    top: 0;
    right: 0;left: 0;
    z-index: 10;
    overflow-x: hidden;
    margin-top: -80px;

    @media screen and (max-width:960px){
        transition: 0ms.8s all ease;
    }

`
const NavContainer =styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 9rem;
   
    @media screen and (max-width:768px){
        padding: 0 .5rem;
    }
    
`
const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        
        color: #fff;
    }

`
const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width:1024px){
        display: block;
        position: absolute;
        top: -20%; right: 0;
        transform: translate(-100%, 65%);
        font-size: 2rem;
        cursor: pointer;
        color: #fff;
    }
`
const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align:center;
    margin-right: -22px;
    
    @media screen and (max-width:1024px){
        display: none;
    }
`

const NavItem = styled.li`
    height: 80px;
`
const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover{
        border-bottom: 3px solid #fff;
        color: #fff;
    }

`
const NavBtn = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width:1024px){
        display: none;
    }
`
const NavbtnLink = styled(Link)`
   border-radius: 50px;
   background: #a7cc7b;
   white-space: nowrap;
   padding: 10px 22px;
   color: #fff;
   font-size: 1.2rem;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;

   &:hover{
       transition: all 0.2s ease-in-out;
       background: #fff;
       color: #a7cc7b;
       border: 1px solid #a7cc7b;
   }
`





















export const Nav = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect (() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
             <Navbox scrollNav={scrollNav}>
               <NavContainer>
                   <NavLogo to='/'>
                       Digian
                   </NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars/>
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to="#home">Home</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="#about">About</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="#services">Services</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="#contact">Contact Us</NavLinks>
                       </NavItem>
                   </NavMenu>
                   <NavBtn > 
                       <NavbtnLink to="/" >Get a Quote</NavbtnLink>
                   </NavBtn>
               </NavContainer>
            </Navbox>
        </>
    )
}
