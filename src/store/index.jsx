import { configureStore } from '@reduxjs/toolkit'
import  purchaseSlice  from './slices/purchase.slice'
import isLoadingSlice from './slices/isLoading.slice'
import productsSlice from './slices/products.slice'
import userNameSlice from './slices/userName.slice'

export default configureStore({
    reducer: {
        userName: userNameSlice,
        products: productsSlice,
        isLoading: isLoadingSlice,
        purchase: purchaseSlice
    }
})
