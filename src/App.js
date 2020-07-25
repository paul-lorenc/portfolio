import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import Portfolio from './pages/Portfolio';
import BlogSAT from './pages/BlogSAT';
import BlogSudoku from './pages/BlogSudoku';
import BlogTynet from './pages/BlogTynet';
import BlogPhilaform from './pages/BlogPhilaform';
import BlogANS from './pages/BlogANS';
import BlogMelor from './pages/BlogMelOR';
import BlogCPU from './pages/BlogCPU';

class App extends React.Component {
  componentDidMount(){
    document.title = "Paul Lorenc Portfolio"
  }
  constructor(props) {
    super(props);
    this.state = {
      title: 'Paul Lorenc',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'SAT Solver', path: '/portfolio/satsolver' },
        { title: 'Sudoku Solver', path: '/portfolio/sudoku' },
        { title: 'Tynet', path: '/portfolio/tynet' },
        { title: 'Project ANS', path: '/portfolio/ans' },
        { title: 'Philaform', path: '/portfolio/philaform' },
        { title: 'MelOR', path: '/portfolio/melor'}
      ],
    }
  }

  render () {
    return (
     <div className="background-color">
     <Router>
       <Container className="p-0" fluid={true}>
         <Navbar className="border-bottom" bg="transparent" expand="lg">
           <Navbar.Brand>Paul Lorenc</Navbar.Brand>
           <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
           <Navbar.Collapse id="navbar-toggle">
             <Nav className="ml-auto">
               <Link className="nav-link" to="/portfolio_home">Home</Link>
               <Link className="nav-link" to="/portfolio">Portfolio</Link>
               <Link className="nav-link" to="/about">About</Link>
               <Link className="nav-link" to="/resume">Resume</Link>
               <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
           </Navbar.Collapse>
         </Navbar>
           <Route path="/portfolio_home" exact render={() => <HomePage/>} /> 
           <Route path="/about" exact render={() => <AboutPage />} />
           <Route path="/portfolio" exact render={() => <Portfolio />} />
           <Route path="/resume" exact render={() => <ResumePage />} />
           <Route path="/contact" exact render={() => <ContactPage />} />
           <Route path="/portfolio/satsolver" exact render={() => <BlogSAT />} />
           <Route path="/portfolio/sudoku" exact render={() => <BlogSudoku />} />
           <Route path="/portfolio/tynet" exact render={() => <BlogTynet />} />
           <Route path="/portfolio/philaform" exact render={() => <BlogPhilaform />} />
           <Route path="/portfolio/ans" exact render={() => <BlogANS/>} />
           <Route path="/portfolio/melor" exact render={() => <BlogMelor />} />
           <Route path="/portfolio/cpu" exact render={() => <BlogCPU />} />
         <Footer/>
       </Container>
     </Router>
     </div>
    );
  }
  
}

export default App;
