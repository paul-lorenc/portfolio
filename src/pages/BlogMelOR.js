import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player/youtube';
import Pdf from '../assets/pdfs/MelOR_README.pdf';

function BlogMelor(props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col className="about-left" fluid={true} md={1}>
                <h6 style={{marginTop: '10px', color: '#EDF2F7'}}>MelOR</h6>
                
                </Col>
                <Col className="about-right" fluid={true} md={11}>
                <div>
                    <div className='player-wrapper'>
                        <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=6Qb5tm105R4'
                        width='100%'
                        height='100%'
                        />
                    </div>
                    <p style={{marginTop: '10px'}}>The attached video shows MelOR in use, alongside the Lounge Lizard VST in Ableton Live.</p>
                    <p>This application is an attempt at a novel use of constraint based programming to randomly create music. I completed this work with my classmate Leonardo Nerone for the CIS189 course at UPenn. At a high level it generates arpeggiated diatonic chord progressions that follow modulating <a href="https://en.wikipedia.org/wiki/Euclidean_rhythm">euclidian rhythms</a></p>
                    <p>It does this by constructing an abstract rhythm space with one set of constraints, then constructing a seperate note order space using other constraints. ORTools then selects one feasible solution out of both of these spaces, and uses the solutions to generate MIDI data. You can read the project's README <a href={Pdf}>here</a></p>
                    <p>We also constructued a very basic GUI using the python <a href="http://appjar.info/">appJar library</a>. It was very simple to implement and I reccomend it to anyone who needs a simple GUI for their python project.</p>
                </div>
                </Col>
            </Row>
        </Container>
    );
}

export default BlogMelor;