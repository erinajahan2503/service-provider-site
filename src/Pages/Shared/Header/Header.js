import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="sm" sticky='top' bg="light" variant="light" >
            <Container>
                <Navbar.Brand as={Link} to="/"><span>
                    <img height={70} src={logo} alt="" /></span>ছোটগল্প</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/service">Services</Nav.Link>
                        <Nav.Link as={Link} to="blog">Blogs</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="checkout">CheckOut</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        <Nav.Link as={Link} to="login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;