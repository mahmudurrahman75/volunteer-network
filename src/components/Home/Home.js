import React from 'react';
import './Home.css';
// import riverClean from '../../images/photos/riverClean.png';
import Group1329 from '../../images/logos/Group 1329.png';
import { Button, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Test from '../Test/Test';


// style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${riverClean})` }}

const Home = () => {
    
    return (
        <div className="home">
            <Navbar bg="" variant="light">
                <Navbar.Brand className="logo" href="/home"><img src={Group1329} alt=""/></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#features">Donation</Nav.Link>
                    <Nav.Link href="#pricing">Events</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                <Form inline className="btn">
                    <Link to="/register"><Button  className="reg-btn" variant="outline-primary">Register</Button></Link>
                    <Link to="/admin"><Button  className="admin-btn" variant="outline-primary">Admin</Button></Link>
                    
                </Form>
            </Navbar>
            
            <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
            <InputGroup className="mb-3 header">
                <FormControl className="search"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            
            <Test></Test>

        </div>
    );
};

export default Home;