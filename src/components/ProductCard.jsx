import React from 'react';
import { Row, Col, Card, Carousel, Button, InputGroup, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import '../App.css'
import { filterProductsHeadlineThunk } from '../store/slices/products.slice';

const ProductCard = () => {

    const products = useSelector((state) => state.products)

    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    return (
        <div>    
            <h2>Products</h2>
            {products.map((prod) => (
                <Row key={prod.id}xs={1} md={3} className="g-4" >
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col key={idx} onClick={() => navigate(`/product/${prod.id}`)}>
                            <Card bg='light' >
                                <Carousel>
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
                                {/* <Link/> */}
                                <Card.Body >
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
                                <Button variant="danger" >
                                <box-icon name='shopping-bag'></box-icon>
                                </Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );
};

export default ProductCard;