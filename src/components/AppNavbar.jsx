import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import PurchaseSidebar from './PurchaseSidebar';

const AppNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/' >e-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link as={Link} to='/login'  > <box-icon name='user'></box-icon></Nav.Link>
                        <Nav.Link as={Link} to='/product' >Products</Nav.Link>
                        <Nav.Link as={Link} to='/purchases' >Purchases</Nav.Link>
                        <Nav.Link> s
                            <PurchaseSidebar />
                        </Nav.Link>
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