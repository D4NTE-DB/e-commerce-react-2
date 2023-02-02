import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCartThunk } from '../store/slices/cart.slice';

const PurchaseSidebar = ({show , handleClose}) => {

  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addItemToCartThunk());
  }, []);

  return (
    <Offcanvas placement="end" show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <ul style={{margin: '0px 5px 5px 0px'}}>
        {cart.map((car) => (
          <li className='cart-card' key={car.id}>
            <Link to={`/product/${car.product.id}`}>
            <img style={{width: '100px'}} src={car.product?.images?.[0]?.url} alt="" className="img-fluid" />
            </Link>
            <div style={{width: '50%'}}>
            <h4>{car.product.title}</h4>
            <div className="quantity-cart">
            <button>+</button>
            <div>{car.quantity}</div>
            <button>-</button>
            </div>
            
            </div>
            
          </li>
        ))}
      </ul>
      <Button style={{margin: '10px 100px'}}>checkout</Button>
    </Offcanvas.Body>
  </Offcanvas>
  );
};

export default PurchaseSidebar;