import React from 'react';
import styled from 'styled-components';
import CardBox from './Card';




const Content = styled.div`
     padding: 1.5rem 2rem;
     display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    position: relative;
    top: 100%;
`
const Heading = styled.div`
text-align: center;
    display: flex;
    flex-direction:column ;
`

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    flex-direction:row ;
    gap: 3rem;
    padding: 1rem 3rem;
    
`







export default function Services() {
    return (
        <Content id='services'>
            <Heading>
                <h3> Our Services</h3>
                <p>minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Heading>

         <CardWrapper>
         <CardBox/>
         </CardWrapper>
           
        </Content>
    )
}
