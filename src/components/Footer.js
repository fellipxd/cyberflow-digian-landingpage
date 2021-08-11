import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {MdLocationOn, MdEmail, MdLocalPhone} from 'react-icons/md'





const FooterContainer =styled.div`
    display: flex;
    flex-direction: row;
    padding: 4rem 2rem 0 2rem;
    margin-top: 1.5rem;
    position: relative;
    bottom: 0;
    color: #fff;
    background: #383CC1;
    border-radius: 50% 0 0 0;
    align-items: center;
    justify-content: center;
     input{
         padding: 1rem;
         background: transparent;
         outline: none;
        border: none;
     }

     

    @media screen and (max-width:768px){
        flex-direction: column;
        padding: 2rem;
        border-radius:  0;
        text-align: center;
        }
        @media screen and (max-width:768px){
        #footer_box{
            margin-top: 1rem;
        }
        }


    p{
        width: 300px;
    }
    a{
        text-decoration: none;
    color: #fff;
    cursor: pointer;
    }
    ul{
        list-style: none;
        margin-left: -2rem;
    }

    #Btn{
        width: 100%;
        background: #6EC72D;
        padding:.5rem;
    }
   

  
`



const Wrapper =styled.div`
    width: 80%;
    margin: 5rem auto 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width:768px){
        flex-direction: column;
        }


`

const Links = styled(Link)`
    text-decoration: none;
    color: #fff;
    cursor: pointer;
`









export default function Footer() {
    return (
        <FooterContainer>
           
          <Wrapper>
          <div>
                <h4><Links to='/'>Digian</Links></h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   
                </p>
            </div>


            <div id='footer_box'>
                <h4>Links</h4>
                <ul>
                    <li><Links>Home</Links></li>
                    <li><Links>About</Links></li>
                    <li><Links>Services</Links></li>
                    <li><Links>Contact Us</Links></li>
                </ul>
            </div>

            <div id='footer_box'>
                <h4> Subscribe</h4>
                <form>
                    <input type='email' placeholder='Enter email'/>
                    <hr/>
                    <input type='submit' value='Submit' id='Btn'/>
                </form>
            </div>
            <div id='footer_box'>
                <h4>Address</h4>
                <ul>
                    <li> <MdLocationOn/> Location</li>
                    <li> <MdLocalPhone/>  Call +01 1234567890</li>


                    <li>  <MdEmail/> <a href="mailto:demo@gmail.com">demo@gmail.com</a></li>
                </ul>
                <div id='icons'>

                </div>
            </div>
           
          </Wrapper>
        </FooterContainer>
    )
}
