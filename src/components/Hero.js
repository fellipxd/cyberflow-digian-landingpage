import Button  from 'react-bootstrap/Button';
import React from 'react';
import styled from 'styled-components';
import hero from '../images/slider-img.png'



const Content =styled.div`
    background: #383CC1;
     height: 80vh;
    width: 100%;
    border-radius: 0 0 50% 0;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 2rem;
    overflow: hidden;
     
    @media screen and (max-height:674px){
        height: 120vh;
        }




   
    @media screen and (max-width:768px){
        border-radius: 0;
        padding: 6rem  2rem;
        border-radius:  0;
        }
      
        


    img{
        display: inline-block;
        height: 70%;
        position: absolute;
        left: 5%; top: 15%;

        @media screen and (max-width:1024px){
            opacity: .2;
            left: auto; 
            
        }

       
        
    }
`

const Desc = styled.div`
    width: 35%;
    position: absolute;
        right: 9%; 
        color: #fff;
        text-align: center;
        font-size: 1.5rem;
        
       
        @media screen and (max-width:1024px){
            width: 80%;
            font-size: 1.5rem;
            
        }
        @media screen and (max-width:768px){
            position: relative;
            width: 100%;
            font-size: 1.1rem;
            right: auto;
        }
        @media screen and (max-width:420px){
        
        }




        h2{
            font-weight: bold;

            @media screen and (max-width:1024px){
              
    }
        }
        #contact-btn{
            background: rgba(18, 14, 67, 0.4);
            
            border: none;
            outline: none;
            @media screen and (max-width:768px){
                background: rgba(18, 14, 67, 0.8);
        }
        @media screen and (max-width:1024px){
       font-size: 1.15rem;
    }
   
        }
`






export default function Hero() {
    return (
        <Content id='home'>
          <img src={hero} alt='hero-fig' /> 
          <Desc>
              <h2>Digital Marketing experts</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   </p>
              <Button href="#" id='contact-btn'>Get a Quote</Button>
          </Desc>
            
        </Content>
    )
}
