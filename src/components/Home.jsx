import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsCategory, filterProductsHeadlineThunk } from '../store/slices/products.slice';
import userNameSlice from '../store/slices/userName.slice';
import ProductCard from './ProductCard';

const Home = () => {

  const userName = useSelector((state) => state.userName)

  const dispatch = useDispatch()

  const [categories, setCateogories] = useState([])

  const [productSearch, setProductSearch] = useState('')

  useEffect(() => {
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
      .then((res) => setCateogories(res.data))
  }, [])

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={productSearch}
          onChange={e => setProductSearch(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={() => dispatch(filterProductsHeadlineThunk(productSearch))}>
          Search
        </Button>
      </InputGroup>
      <h2>Categories:</h2>
      <div style={{margin: '10px auto', textAlign: 'center'}}>
      {
        categories.map((catg) => (
          <Button  key={catg.id} value="" onClick={() => dispatch(filterProductsCategory(catg.id))}>{catg.name}</Button>

        ))
      }
      </div>
      {<ProductCard />}
    </div>
  );
};

export default Home;