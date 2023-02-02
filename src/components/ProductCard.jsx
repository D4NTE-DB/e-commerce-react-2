import React, { useState } from 'react';
import { Row, Col, Card, Carousel, Button, InputGroup, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import '../App.css'
import { addItemToCartThunk2 } from '../store/slices/cart.slice';
import { filterProductsHeadlineThunk } from '../store/slices/products.slice';

const ProductCard = () => {

    const products = useSelector((state) => state.products)

    const [ide, setIde] = useState('')

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const addItemToCart = () => {
        const toCart = {
          quantity: 1,
          productId: 1
        }
        console.log(toCart)
        dispatch(addItemToCartThunk2(toCart))
      }
    
    return (
        <div>    
            {/* <h2>Products</h2> */}
                <Row xs={1} md={2} xl={4} className="g-4" >
                    {products.map((prod) => (
                        <Col key={prod.id} >
                            <Card bg='light' >
                                <Carousel interval={null} variant='dark' slide={false}>
                                    <Carousel.Item className='ca-img' >
                                        <img
                                            className="d-block w-100"
                                            src={`${prod.images[0].url}`}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={`${prod.images[1].url}`}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={`${prod.images[2].url}`}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                                <Card.Body onClick={() => navigate(`/product/${prod.id}`)}>
                                    <Card.Title>{prod.title}</Card.Title>
                                    <Card.Text>

                                       $ {prod.price}

                                    </Card.Text>
                                    <Card.Footer>
                                        <small className="text-muted">Created At: {prod.createdAt}</small>
                                        <br />
                                        <small className="text-muted">Updated At: {prod.updatedAt}</small>
                                    </Card.Footer>
                                </Card.Body>
                                <Button  variant="danger" onClick={() => navigate(`/product/${prod.id}`)}>
                                <box-icon className='icon-shop' name='shopping-bag'></box-icon>
                                </Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
        </div>
    );
};

export default ProductCard;