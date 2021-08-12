import React from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript } from '@react-google-maps/api';





const Content = styled.div`
    padding: 1.5rem 2rem;
    position: relative;
    top: 100%;
    display: flex;
    flex-direction: row;


    @media screen and (max-width:768px){
        flex-direction: column;
        
        
        }
`

const FormContainer =styled.div`
    padding: 2rem;
    width: 50%;
    display: flex;
    flex-direction: column;


    @media screen and (max-width:768px){
          width: 100%;
          margin: auto;
          padding: 1rem;
       
        }
   
    form{
        display: flex;
        flex-direction: column;
    }
    input{
        padding: 1rem 2rem;
    }
    #input{
        padding: 1rem 2rem;
        margin-top: 2rem;
    }
    textarea{
        min-height: 200px;
        
    }
    .btn{
        background:#383CC1 ;
        width: 30%;
        color: #fff;
        @media screen and (max-width:768px){
          width: 100%;
       
        }


        
    }
`

const MapWrapper =styled.div`
    width: 50vw;
    
    padding: 2rem;


    @media screen and (max-width:768px){
          width: 100%;
          height: 10%;
         
       
        }
`










const containerStyle = {
    width: '100%',
    height: '60vh'
   
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };


export default function Contact() {
    return (
        <Content id='contact'>
           <FormContainer>
                   <form>
                       <input type='text' placeholder='Full Name'/>
                       <input type='email' placeholder='Email' id='input' />
                       <input type='number' placeholder='Phone number' id='input' />
                       <textarea placeholder='Message' id='input' />
                       <input type="submit"  value="SEND" id='input' className='btn' />
                      
                   </form>
           </FormContainer> 

          <MapWrapper>
          <LoadScript
      googleMapsApiKey="AIzaSyACOv-9z04WBFd0hE8vuGiC06xvkp5vGk4"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
       
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
          </MapWrapper>
        </Content>
    )
}
