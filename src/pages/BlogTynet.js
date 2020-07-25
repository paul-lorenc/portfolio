import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pdf from '../assets/pdfs/cis519ProjectReport.pdf'

function BlogTynet(props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col className="about-left" fluid={true} md={1}>
                <h6 style={{marginTop: '10px', color: '#EDF2F7'}}>Pytorch CNN 'Tynet'</h6>
                
                </Col>
                <Col className="about-right" fluid={true} md={11}>
                <p>This blog post offers a high level summary of the project. My collaborators and I worked on a detailed report of our findings which you can read <a href = {Pdf} target = "_blank">here</a></p>
                <p>TyNet is a project I started with two of my classmates, Jens Honack and Damian Krupa, for a final project for CIS419 at the University of Pennsylvania. Currently we are still adding to it after the class has ended in order to make it more readable, and continue optimizations. </p>
                <p>TyNet is a Temporal Convolutional Neural Network. It is designed to take in a monophonic MIDI melody, and output a set of chords to play 'behind' this melody. We set out to accomplish this by training a Pytorch CNN on the <a href="https://jazzomat.hfm-weimar.de/dbformat/dboverview.html">Weimar Jazz Dataset </a>. We trained our dataset one song at a time, our input being 2 bars of melody, and the output being 2 bars of chords to accompany the input. The first main problem we ran into was the fact that in each 2 bar segment, there can be a varied amount of information in the melody. The soloist could rapidly have played 50 notes, or could have simply sustained one note the entire time, so we needed to standardize this interval. We solved this problem by sampling at the 32nd note level. This means at the beginning of every 32nd note we would check which MIDI note is being played and record it. This gave us a standardized input to feed to our neural network.</p>
                <p>Our input after sampling was a 1x64 vector of integers where each integer represented a MIDI note. One interesting part of our preprocessing step is that we create additional convolutional layers 'by hand'. We added binary layers to the input such that each layer represents a different chord. A given layer is high when the corresponding melody note is in the chord of this layer.</p>
                <p>We found that our model was able to accurately figure out the key of the melody being played, and it would mostly play diatonic chords as an accompaniment. An important part of jazz is expanding on diatonic ideas with chord extensions and chromaticism. We hope to make progress towards adding this in future iterations. You can view our current work on Google Collab <a href="https://colab.research.google.com/drive/1aZKOVZ3iR3psGkVfMGkG_tw5DeBiGaj1?usp=sharing">here</a></p>
                </Col>

            </Row>
        </Container>
    );
}

export default BlogTynet;