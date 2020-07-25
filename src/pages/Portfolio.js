import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Portfolio(props) {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={require("../assets/images/gcolor.jpg")}/>
                    <Card.Body>
                    <Card.Title>SAT Solver</Card.Title>
                    <Card.Text>
                        A python SAT solver implementing two watched literals
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="/portfolio/satsolver">View</Card.Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../assets/images/largesodoku.png")}/>
                    <Card.Body>
                    <Card.Title>Sudoku Solver</Card.Title>
                    <Card.Text>
                        A python sudoku solver implemented using pysat, ORTool's SAT solver
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="/portfolio/sudoku">View</Card.Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../assets/images/mtyner.png")}/>
                    <Card.Body>
                    <Card.Title>Tynet</Card.Title>
                    <Card.Text>
                        A CNN developed to harmonize monophonic jazz melodies
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="/portfolio/tynet">View</Card.Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../assets/images/philaform.jpg")} />
                    <Card.Body>
                    <Card.Title>PhilaForm</Card.Title>
                    <Card.Text>
                        A react based webform used to efficiently screen home owners for Philadelphia Tax Abatement Programs
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="/portfolio/philaform">View</Card.Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../assets/images/ansc.png")} />
                    <Card.Body>
                    <Card.Title>Project ANS</Card.Title>
                    <Card.Text>
                        A basic C++ photo editor that has the ability to render images to sound using additive synthesis. Based on the Russian ANS synthesizer
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="/portfolio/ans">View</Card.Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../assets/images/little-fugue.png")} />
                    <Card.Body>
                    <Card.Title>MelOR</Card.Title>
                    <Card.Text>
                        A python program that takes in parameters through a UI and generates MIDI notes using Google's ORTools
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="/portfolio/melor">View</Card.Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../assets/images/cpu.jpg")} />
                    <Card.Body>
                    <Card.Title>Compiler and CPU</Card.Title>
                    <Card.Text>
                        Designed a compiler, then constructed and optimized a CPU (in verilog) to run this compiled code
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="/portfolio/cpu">View</Card.Link>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div> 
    );
}
export default Portfolio;