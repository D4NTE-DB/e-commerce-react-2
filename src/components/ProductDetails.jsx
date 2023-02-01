import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setIsLoading } from '../store/slices/isLoading.slice';

const ProductDetails = () => {

    const [produc, setProduc] = useState({})

    const { id } = useParams();

    const dispatch = useDispatch();

  useEffect(() => {   
    dispatch(setIsLoading(true));
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
    .then((res) => setProduc(res.data))
    .finally(dispatch(setIsLoading(false)))
  }, [])

    return (
     
        <Card style={{ width: '39rem' }}>
        <Card.Img variant="top" src={`${produc.images?.[0]?.url}`} />
        <Card.Body>
          <Card.Title>{produc?.title}</Card.Title>
          <Card.Text>
            
            {produc?.description}

          </Card.Text>
          <Card.Title>
            $ {produc.price}
          </Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
};

export default ProductDetails;