import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Case from '../Data/Case';
import {BsArrowRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';





const Content =styled.div`
    
    display: flex;
    flex-direction: column;
    position: relative;
    top: 100%;
    align-items: center;
    padding: 1.5rem 2rem;

    @media screen and (max-width:768px){
            margin-top: 2rem;
        }

`
const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    flex-direction:row ;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 1rem 3rem;
    width: 100%;
    
`
const CaseWrapper = styled.div`
position: relative;
align-items: center;



    #Casecard{
        width: 28rem;
        margin: auto;
        flex: 1 1 28rem ;
        text-align: center;

       
        @media screen and (max-width:1024px){
       width: 15rem;
    }
    @media screen and (max-width:768px){
            width: 15rem;
            
        }
        
    }
`
const CardLink = styled(Link)`
    text-decoration: none;
    color: #000;
`







export default function CaseStudies() {
    return (
        <Content>
            <h3>Our Case Studies</h3>
            <CardWrapper>
            
{Case.map((Case, index) => 
              <CaseWrapper  key={Case.id}>
                 <Card  id='Casecard'>
                 <Card.Img variant="top" src={Case.img} />
                 <Card.Body>
                 <Card.Title>{Case.title}</Card.Title>
                 <Card.Text>
                  {Case.desc}
                 </Card.Text>
                 <CardLink to='/'>Read More <BsArrowRight/></CardLink>
                 </Card.Body>
                 </Card>
                 </CaseWrapper>
            )}
       
         </CardWrapper>
          
        </Content>
    )
}
