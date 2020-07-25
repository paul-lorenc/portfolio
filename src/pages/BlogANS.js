import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player/youtube';

function BlogANS(props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col className="about-left" fluid={true} md={1}>
                <h6 style={{marginTop: '10px', color: '#EDF2F7'}}>Project ANS</h6>
                
                </Col>
                <Col className="about-right" fluid={true} md={11}>
                <div>
                    <div className='player-wrapper'>
                        <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=21LVk8coSy8&feature=emb_title'
                        width='100%'
                        height='100%'
                        />
                    </div>
                    <p style={{marginTop: '10px'}}> The ANS synthesizer is a machine built by Evgeny Murzin from 1937 to 1957. It produces music by summing together sine waves according to the input image it is given. The attached video demo covers a high level summary of the additive synthesis it performs, and shows off the image editing functionality we added to the application. Our implementation was done in C++ and you can view the code on my GitHub.   </p>
                </div>
                </Col>
            </Row>
        </Container>
    );
}

export default BlogANS;