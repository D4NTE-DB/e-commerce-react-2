import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel, InputGroup, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItemToCartThunk, addItemToCartThunk2 } from '../store/slices/cart.slice';
import { setIsLoading } from '../store/slices/isLoading.slice';

const ProductDetails = () => {

  const [produc, setProduc] = useState({})

  const [quantity, setQuantity] = useState(1)

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then((res) => setProduc(res.data))
      .finally(dispatch(setIsLoading(false)))
  }, [])

  const addItemToCart = () => {
    const toCart = {
      quantity: 1,
      productId: id
    }
    console.log(toCart)
    dispatch(addItemToCartThunk2(toCart))
  }

  

  return (

    <Card style={{ width: '39rem' }}>
      <Carousel variant='dark' slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${produc.images?.[0].url}`}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${produc.images?.[1].url}`}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${produc.images?.[2].url}`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title>{produc?.title}</Card.Title>
        <Card.Text>
          {produc?.description}
        </Card.Text>
        <Card.Title>
          $ {produc.price}
        </Card.Title>
      </Card.Body>
      <InputGroup>

        <div className="quantity-detail">
          <button disabled={quantity === 1}>-</button>
          <h3 style={{position: 'relative',top: '11px'}}>{quantity}</h3>
          <button  >+</button>
        </div>
        <Button variant="primary" onClick={addItemToCart}>
          Add to the cart
        </Button>
      </InputGroup>
    </Card>
  );
};

export default ProductDetails;