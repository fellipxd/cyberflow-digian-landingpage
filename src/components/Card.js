import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import about from '../Data/AboutInfo'

 







const CardLogo =styled.div`
 display: inline-block;
 margin: auto;
 padding: 1rem;

 img{
     height: 100px;
 }
`


const Wrapper = styled.div`
    #card{
        width: 18rem;
        flex: 1 1 18rem ;
        text-align: center;
        
    }
`


const CardLink = styled(Link)`
    text-decoration: none;
    color: #000;
`

 const CardBox =() => {
    return (
        <>

{about.map((about, index) => 
              <Wrapper key={about.id}> 
                 <Card  id='card'>
                 <CardLogo><img src={about.logo} alt='logo'/></CardLogo>
                 <Card.Body>
                 <Card.Title>{about.title}</Card.Title>
                 <Card.Text>
                  {about.desc}
                 </Card.Text>
                 <CardLink to='/'>Read More <BsArrowRight/></CardLink>
                 </Card.Body>
                 </Card>
                 </Wrapper>
            )}
       




        </>

       
    )
}





export default CardBox







