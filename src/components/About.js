import React from 'react';
import Button  from 'react-bootstrap/Button';
import styled from 'styled-components';
import about from '../images/about-img.png';



const  Content = styled.div`
   
    background: #383CC1;
    height: 100vh;
    border-radius: 30% 0 30% 0;
    display: flex;
    flex-direction: row;
    position: relative;
    top: 100%S;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 2rem;
    @media screen and (max-width:1024px){
        border-radius: 0;
      
        }

    img{
        display: inline-block;
        height: 70%;
        position: absolute;
        right: 5%; 
        @media screen and (max-width:768px){
        opacity: .1;
        }
        @media screen and (max-width:1024px){
       opacity: .15;
    }
        
    }
`

const Desc = styled.div`
    width: 40%;
    position: absolute;
        left: 15%; top: 40%;
        color: #fff;
        text-align: left;
        z-index: 10;
       
        @media screen and (max-width:1024px){
           font-size: 1.5rem;
           top: 25%;
           width: 70%;
    }
    @media screen and (max-width:1000px){
            left: auto; top: 25%;
            margin: auto;
            font-size: 1.2rem;
            width: 90%;
        }
        @media screen and (max-width:468px){
            left: auto; top: 3%;
            
        }

        h3{
            font-weight: bold;
            @media screen and (max-width:1024px){
             font-size: 3rem;
    }
    @media screen and (max-width:768px){
           font-size: 2rem;
        }
        }
        #contact-btn{
            background: rgba(18, 14, 67, 0.4);
            border: none;
            outline: none;

            @media screen and (max-width:1024px){
             font-size: 1.5rem;
    }
    @media screen and (max-width:768px){
           font-size: 1rem;
        }
        }
`








export default function About() {
    return (
        <Content id='about'>
           <Desc>
               <h3>About Us</h3>
               <p>
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
               </p>
               <Button href="#" id='contact-btn'>Get a Quote</Button>
           </Desc>
           <img src={about} alt='about-fig' /> 
        </Content>
    )
}
