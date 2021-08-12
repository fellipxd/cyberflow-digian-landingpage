import React from 'react';
import {FaQuoteLeft} from 'react-icons/fa';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import avi from '../images/client.jpg';
import testimonial from '../Data/Testimonial';
import SwiperCore, { Pagination} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"





const TestimonialContainer = styled.div`
    width: 100%;
    padding: 1.5rem 2rem;
    position: relative;
    top: 100%;
    margin-top: 3rem;
    @media screen and (max-width:768px){
        margin-top: 15rem;
       
        }
    

    #swiper-container{
       align-items: center;
       justify-content: center;
       margin: auto;
      
    }
`
const SwiperContainer = styled.div`
  
     display: flex;
    width: 100%;
    padding: 1rem;
   
 


`
const TestimonialCard = styled.div`
    padding: 1rem;
    width: 60vw;
    border-radius: 10px;
    box-shadow: 0 1rem 2rem rgba(22, 65, 184, 0.2);
    display: flex;
    margin: auto;
    flex-direction: column;
    background:  #383CC1;
    align-items: center; 

    
`
const Avatar = styled.img`
position: relative;
bottom: 9vh;
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    object-fit: cover;
    
`




const TestimonialIcon = styled.div`
padding: .5rem 1rem;

width: max-content;
border-radius: 20px;
font-size: 1rem;

@media screen and (max-width:768px){
       margin: auto;
   }
`
const Wrapper = styled.div`
    padding: 4rem;
    width: 100%;
    @media screen and (max-width:1024px){
        padding: 10rem;
    }
    
    
`








SwiperCore.use([Pagination]);


export default function Testimonial()  {
    return (
        <TestimonialContainer>
          
       





            <SwiperContainer id='swiper-container'>
        <Swiper  pagination={{ "dynamicBullets": true}}spaceBetween={10} centeredSlides={true} autoplay={{"delay": 2000, "disableOnInteraction": false}} loop={true} slidesPerView={1} className='myswiper'>
       {testimonial.map((testimonial, index) => 
                 <SwiperSlide  id='slide' key={testimonial.id}> 
      <Wrapper>
      <TestimonialCard>
  <Avatar src={avi} alt='testimonial avatar'/>
 <h4>{testimonial.title}</h4>
 <TestimonialIcon><FaQuoteLeft/></TestimonialIcon>
 <p>{testimonial.desc}</p>


 
</TestimonialCard>
      </Wrapper>
</SwiperSlide>
       
       )}
           
            

        </Swiper>
        
        </SwiperContainer>
       
        </TestimonialContainer>

        
    )
}
