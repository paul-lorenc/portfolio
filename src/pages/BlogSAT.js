import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BlogSAT(props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col className="about-left" fluid={true} md={1}>
                <h6 style={{marginTop: '10px', color: '#EDF2F7'}}>Python SAT Solver</h6>
                
                </Col>
                <Col className="about-right" fluid={true} md={11}>
                    <p>I completed this project for CIS189 at UPenn, called "Solving Hard Problems in Practice." This class focused on using programming tools to solve NP-hard problems. </p>
                    <p>The <a href="https://en.wikipedia.org/wiki/Boolean_satisfiability_problem">Boolean Satisfiability Problem</a>, or more simply SAT problem, asks for the 'solving set' of TRUE and FALSE values which makes a Boolean statement TRUE. The SAT problem is proven to be NP-complete, which means that any NP problem is at most as hard to solve as the SAT problem. In turn this means that if you can reduce the SAT problem to another problem (in polynomial time) then the problem can be proved to be NP-complete (there are more steps to this but this is the high level idea). Because of how abstract the problem is, creating polynomial transformations from this problem is useful in proving NP-completeness. </p>
                    <p>The SAT solver itself is an implementation of the <a href="https://en.wikipedia.org/wiki/DPLL_algorithm">Davis–Putnam–Logemann–Loveland (DPLL) algorithm</a> using Two-Watched literals, it also implements Unit Propagation and a static, two-sided version of the Jeroslaw-Wang decision heuristic. These additions make this implementation rival the performance of state-of-the-art SAT solvers of the 80's and 90's. Unfortunately I cannot release any code publically due to the nature of the course, however, I am extremely happy with how this project turned out, and would love to discuss implementation details personally as long as you are not a current 189 student!</p>
                </Col>
            </Row>
        </Container>
    );
}

export default BlogSAT;