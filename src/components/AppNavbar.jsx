import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCartThunk } from '../store/slices/cart.slice';
import PurchaseSidebar from './PurchaseSidebar';

const AppNavbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)

    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(addItemToCartThunk());
    }, []);
    console.log(cart)


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/' style={{ margin: 'auto' }} >e-Commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link as={Link} to='/login'  > <box-icon name='user'></box-icon></Nav.Link>
                            <Nav.Link onClick={handleOpen}>
                                <box-icon className='icon-shop' name='shopping-bag'></box-icon>
                                <div className='counter-shop' style={{position: 'relative'}}>{cart.length}</div>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/purchases' >Purchases</Nav.Link>
                           
                        </Nav>
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <PurchaseSidebar show={show} handleClose={handleClose}/>
            </>
    );
};

export default AppNavbar;