import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactPage(props) {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="contact-text">
                <h2>Contact</h2>
                <p>Phone: (215) 495 8226</p>
                <p>Email: pjlorenc@gmail.com</p>
            </div>    
        </div>
    );
}

export default ContactPage;