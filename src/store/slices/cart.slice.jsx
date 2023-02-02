import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            const cart = action.payload
            return cart
        }
    }
})

export const { setCart } = cartSlice.actions;

export const addItemToCartThunk = () => (dispatch) =>{
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/cart', getConfig())
        .then((res) => dispatch(setCart(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addItemToCartThunk2 = (item) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/cart' , item, getConfig())
        .then(() => dispatch(addItemToCartThunk()))
        .catch((error) => alert(`Para realizar tu compra primero inicia cesion ${error}`))
        .finally(() => dispatch(setIsLoading(false)));
}


export default cartSlice.reducer;
