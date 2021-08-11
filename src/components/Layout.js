import React from 'react';
import Container from 'react-bootstrap/Container';







export const Layout = (props) => {
    return (
        <Container style={{backgroungColor: '#383CC1'}}>
            {props.children}
        </Container>
    )
}
