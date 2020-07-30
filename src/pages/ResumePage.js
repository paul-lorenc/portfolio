import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ResumePage(props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col className="resume-about" fluid={true} md={4}>
                    <h4 style={{marginTop: '10px', color: '#EDF2F7'}}>Resume</h4>
                    <hr style={{borderTop: '1px solid #D3E1F0', width: '80%%'}}/>
                    <p style={{color: '#EDF2F7'}}>As a 2020 graduate of the School of Engineering and Applied Science from the University of Pennsylvania, I am looking to use my problem solving skills, along with my design and marketing experience, to build and maintain elegant and efficient software. </p>
                    <hr style={{borderTop: '1px solid #D3E1F0', width: '80%'}}/>
                    <h5 style={{color: '#EDF2F7'}}>Phone</h5>
                    <p style={{color: '#E4E8ED'}}>(215) 495 8226</p>
                    <h5 style={{color: '#EDF2F7'}}>Email</h5>
                    <p style={{color: '#E4E8ED'}}>pjlorenc@gmail.com</p>
                    <hr style={{borderTop: '1px solid #D3E1F0', width: '80%'}}/>
                    <h5 style={{color: '#EDF2F7'}}>Hobbies</h5>
                    <p style={{color: '#E4E8ED'}}>Drawing and Painting</p>
                    <p style={{color: '#E4E8ED'}}>Music Production</p>
                    <p style={{color: '#E4E8ED'}}>Computer Graphics (Blender)</p>
                    <p style={{color: '#E4E8ED'}}>Backpacking</p>
                </Col>
                <Col className="resume-box" fluid={true} md={8}>
                    <h4>Education</h4>
                    <Container>
                        <Row>
                        <Col fluid={true} md={2}>
                            <div>
                                <h5>2016-2020</h5>
                                <Image src={require("../assets/images/upenn.png")} fluid={true}/>
                            </div>
                        </Col>
                        <Col fluid={true} md={10}>
                            <Row>
                                <div>
                                    <h5>University of Pennsylvania, School of Engineering and Applied Science</h5>
                                    <h6>Major: Computer Science</h6>
                                    <h6>Minor: Psychology</h6>
                                    <h6>GPA: 3.26</h6>
                                    <h6>GPA since freshman year: 3.49</h6>
                                </div>
                            </Row>
                        </Col>
                        </Row>
                        <Row>
                        <Col fluid={true} md={2}>
                            <div>
                                <h5>2012-2016</h5>
                                <Image src={require("../assets/images/centralhigh.jpg")} fluid={true}/>
                            </div>
                            
                        </Col>
                        <Col fluid={true} md={10}>
                            <Row>
                                <div>
                                    <h5>Central High School</h5>
                                    <h6>GPA: 4.01</h6>
                                </div>
                            </Row>
                        </Col>
                        </Row>
                    </Container>
                    <h4>Experience</h4>
                    <Container>
                        <Row>
                            <Col fluid={true} md={2}>
                                <div>
                                    <h5>2019</h5>
                                </div>
                            </Col>
                            <Col fluid={true} md={10}>
                                <Row>
                                    <div>
                                        <h5>Software Development Intern, EthosCE</h5>
                                        <p>During my internship at EthosCE, I added Zoom video call support to EthosCE's Drupal Course framework. This required creating webhooks in PHP and Javascript, using REST API's, and writing asynchronous Javascript. The final iteration allows course admins to seamlessly add Zoom meetings as course objects to their online courses, and maintain a record of who attends these courses. After implementing this, I built an automated testing suite using in-house tools, to prove my implementation was accurate. Links to both the Public Drupal Course framework, and the Zoom Course Object addition are included in the project section below. </p>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col fluid={true} md={2}>
                                <div>
                                    <h5>2018</h5>
                                </div>
                            </Col>
                            <Col fluid={true} md={10}>
                                <Row>
                                    <div>
                                        <h5>Van Pelt Library Community Outreach</h5>
                                        <p>For this job, I helped build and maintain three libraries in West Philadelphia public schools. This job required decision making to reach hard deadlines, creative thinking to drive up library traffic, and strong interpersonal communication skills, for working with students, faculty, and coworkers. </p>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col fluid={true} md={2}>
                                <div>
                                    <h5>2017</h5>
                                </div>
                            </Col>
                            <Col fluid={true} md={10}>
                                <Row>
                                    <div>
                                        <h5>Junior Web Developer, Tally (Wharton VIP-C Startup)</h5>
                                        <p>For this internship, I worked under the lead developer to build a backend for our application, Tally, primarily using Node.js. I also worked on front end design of the application using HTML and CSS. I attended business meetings to provide a technical perspective. Additionally, I took a graduate level Wharton Marketing course with Tally team members and helped build a thorough marketing plan for our application, and pitched our product in a Shark-tank style pitch competition.</p>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col fluid={true} md={2}>
                                <div>
                                    <h5>2016</h5>
                                </div>
                            </Col>
                            <Col fluid={true} md={10}>
                                <Row>
                                    <div>
                                        <h5>Staff under UPenn Director of Facilities and Operations</h5>
                                        <p>For this job, I worked under the Director of Facilities and Operations to organize, setup, and run UPenn sporting events. This job required strong communication and planning skills.</p>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <div className='project-card-deck'>
                        <h4>Projects</h4>
                        <p>Throughout my time at Penn, I created many programming projects both in and out of school. For an in depth look at some of the larger projects I worked on, please check out my porfolio.</p>
                        <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                    C
                                    </Card.Title>
                                    <Card.Text>
                                 
                                        <p>Linux-based operating system</p>
                                        <p>Compiler</p>
                                        <p>Reverse Polish Notation Calculator</p>
                                       
                                    </Card.Text>
                                </Card.Body>  
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                    C++
                                    </Card.Title>
                                    <Card.Text>
                                        
                                            <p>Basic Raytracer</p>
                                            <p>MergeSort Implementation</p>
                                            <p>Virtual ANS Emulator</p>
                                        
                                    </Card.Text>
                                </Card.Body>  
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                    Python
                                    </Card.Title>
                                    <Card.Text>
                                    
                                        <p>SAT Solver</p>
                                        <p>Sudoku Solver</p>
                                        <p>MIDI Melody Generator (MelOR)</p>
                                        <p>Solution to MountainCar-v0 for OpenAI Gym</p>
                                        <p>Temporal Convolutional Neural Network for Jazz Harmonization</p>
                                
                                    </Card.Text>
                                </Card.Body>  
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                    Java
                                    </Card.Title>
                                    <Card.Text>
                                        <p>DFS and BFS implementation on Facebook Anonymous Graph Dataset</p>
                                        <p>Webcrawler tool for analyzing CIA's World Factbook</p>
                                        <p>Android App connected to MongoDB backend</p>                                
                                    </Card.Text>
                                </Card.Body>  
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                    PHP and Drupal
                                    </Card.Title>
                                    <Card.Text>
                                        <p>Added support for Zoom chat rooms to the <a href="https://www.drupal.org/project/course">Drupal Course Framework</a></p>
                                        <a href="https://www.drupal.org/project/course_zoom">Published Drupal Zoom Course Object library</a>
                                   
                                    </Card.Text>
                                </Card.Body>  
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                    JavaScript
                                    </Card.Title>
                                    <Card.Text>
                                        <p>Interactive Guided Interview for Philadelphia Tax Abatement Screening</p>
                                        <p>Front end for a MongoDB database</p>
                                        <p>This website</p>
                                   
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                    Matlab
                                    </Card.Title>
                                    <Card.Text>
                                        <p>Plot Interpolated Splines</p>
                                        <p>Discrete Cosine Transform Image Compression Implementation</p>
                                        <p>Wireframe Perspective Projection</p>
                                    </Card.Text>
                                </Card.Body>   
                            </Card>
                           
                            
                        </CardGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ResumePage;