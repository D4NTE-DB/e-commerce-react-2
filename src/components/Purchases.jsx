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
    console.log(purchase)
    return (
        <div>
        <h1>Purchases</h1>
        <ul>
          {purchase?.map((favorite) => (
            <li>
              <Link to={`/product/${favorite.id}`}>
                {/* <img src={favorite.news?.image} style={{ width: 200 }} alt="" /> */}
                <h4>{favorite.id}</h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Purchases;