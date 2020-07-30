import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BlogCPU(props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col className="about-left" fluid={true} md={1}>
                    <h6 style={{marginTop: '10px', color: '#EDF2F7'}}>Compiler and CPU</h6>
                </Col>
                <Col className="about-right" fluid={true} md={11}>
                <p>For my BSE degree at UPenn, I needed to complete a basic introduction to computer engineering. This introduction was split into two levels, the compiler level and raw computer architecture level. During my second year, I built a compiler that would turn a text file written in a defined, turing-complete, language, into a series of LC4 commands. LC4 was the ISA we used throughout my time at Penn. It was a simplified ISA that was made up of 8 abstract registers, and defined a little over 20 different manipulations of these registers.</p>
                <p>Later, during my senior year, I then constructed a superscalar, pipelined CPU that takes in programs written in this ISA, and simulates the behavior of an actual piece of silicon. This left me with a fully functional computer that I built from the ground up.</p>
                <p>I enjoyed working on these projects greatly and would love to discuss furthur if you have any questions.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default BlogCPU;