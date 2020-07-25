import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage(props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col className="about-left" fluid={true} md={2}>
                <h4 style={{marginTop: '10px', color: '#EDF2F7'}}>About Me</h4>
                
                </Col>
                <Col className="about-right" fluid={true} md={10}>
                <p style={{marginTop: '10px'}}>My name is Paul Lorenc, I am a recent graduate from the University of Pennsylvania, where I received a Bachelor of Science and Engineering degree from the Computer Science program. Within computer science I am particularly interested in practically solving non-polynomial problems using SAT-solvers. I am also interested in using machine learning to analyze complicated "human problems" like music and visual art. In my free time I like producing music and creating animations using Blender.  </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutPage;