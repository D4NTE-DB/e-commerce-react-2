import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchase.slice';

const Purchases = () => {

    const purchase = useSelector((state) => state.purchase)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])
    // console.log(purchase)
    return (
        <div>
        <h1>Purchases</h1>
        <ul>
          {purchase?.map((favorite) => (
            <li key={purchase.id}>
              
                {/* <img src={favorite.news?.image} style={{ width: 200 }} alt="" /> */}
                {/* <h4>{favorite.id}</h4 */}
                <h4>{favorite.product?.title}</h4>
                <Link to={`/product/${favorite.product?.id}`}>
                <img style={{width: '100px'}}src={favorite.product?.images[2].url} alt="" />
                </Link>
                <h6>Created at: {favorite.createdAt}</h6>
                <h6>Quantity: {favorite.quantity}</h6>
              
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Purchases;