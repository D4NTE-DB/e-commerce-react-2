import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import productsSlice from './slices/products.slice'
import userNameSlice from './slices/userName.slice'

export default configureStore({
    reducer: {
        userName: userNameSlice,
        products: productsSlice,
        isLoading: isLoadingSlice
    }
})
