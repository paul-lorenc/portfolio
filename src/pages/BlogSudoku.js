import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BlogSudoku(props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col className="about-left" fluid={true} md={1}>
                <h6 style={{marginTop: '10px', color: '#EDF2F7'}}>ORTools Sudoku Reduction</h6>
                
                </Col>
                <Col className="about-right" fluid={true} md={11}>
                <p><a href="https://www.cs.ox.ac.uk/people/paul.goldberg/FCS/sudoku.html">Sudoku is an NP-complete problem</a></p>
                <p>To create a sudoku solving algorithm, one could try and create and optimize an algorithm specific to the sudoku problem. However, the more practical strategy, which I used, was to map a given sudoku problem into a SAT problem, and use a modern SAT solver to efficiently solve the statement, which is then mapped back into sudoku form.</p>
                <p>For this project, I created a series of algorithms read in a sudoku, map it to an instance of a CNF problem, then solve it using <a href="https://developers.google.com/optimization/">ORTools</a>. This included adding boolean logic to constrain known values, constrain one number in each row, column, and box, and breaking symmetry in order to efficiently search for solutions. Overall, my implementation was able to complete large, 30x30 sudokus in under a minute. </p>
                </Col>
            </Row>
        </Container>
    );
}

export default BlogSudoku;