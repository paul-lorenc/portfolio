import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pdf from '../assets/pdfs/Final_Report.pdf'

function BlogPhilaform(props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col className="about-left" fluid={true} md={1}>
                <h6 style={{marginTop: '10px', color: '#EDF2F7'}}>Philaform</h6>
                
                </Col>
                <Col className="about-right" fluid={true} md={11}>
                <p style={{marginTop: '10px'}}>This is the project I pursued for my Senior Project for UPenn. For this project I teamed up with 5 other computer science seniors and a team of 3 Penn Law Grad Students to build a comprehensive webform to screen and apply for Philadelphia Housing Tax Abatements. We completed a comprehensive report of our process and our findings which you can read <a href={Pdf}>here</a></p>
                <p>To quickly summarize, Philadelphia’s recent push to support new construction and rehabilitation projects has added value to many neighborhoods, but this has come at the cost of eviction of some lifelong residents. A variety of different tax abatement programs are currently being offered by the city, however, many residents are not accessing them, and in turn aren’t able to pay their new increased property taxes and are being evicted from their homes. The process to determine eligibility and apply is complicated, leaving many residents incapable of doing this process without assistance. Community Legal Services (CLS), a Philadelphia-based Nonprofit Organization hosts a weekly clinic to help residents find applicable programs, but it is time-consuming to look through all 10+ sets of eligibility requirements and applications with each client. </p>
                <p>PhilaForm addresses the core problems the CLS team and residents face, leveraging public data sets to simplify identifying candidates and answering eligibility questions. We use open-source libraries to parse through these data sets and populate application form PDFs. PhilaForm empowers individuals to be able to determine their eligibility for tax abatement programs and fill out the corresponding forms more easily and with greater independence from CLS.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default BlogPhilaform;