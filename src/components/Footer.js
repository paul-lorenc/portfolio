import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-1">
                    <Col className="p-0">Made with React.js</Col>
                    <Col className="p-0 d-flex justify-content-end">pjlorenc@gmail.com</Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;