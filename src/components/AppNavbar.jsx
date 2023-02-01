import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/' >e-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <box-icon name='user'></box-icon>
                        <Nav.Link as={Link} to='/login'  >Login</Nav.Link>
                        <Nav.Link as={Link} to='/product' >Products</Nav.Link>
                        <Nav.Link as={Link} to='product' >Shop</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Shopping Cart</Nav.Link>
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;