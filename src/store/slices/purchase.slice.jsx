import { createSlice } from '@reduxjs/toolkit';

export const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: [],
    reducers: {
        setPurchase: (state, action) => {
            const purchase = action.payload
            return purchase
        }
    }
})

export const { setPurchase } = purchaseSlice.actions;

export default purchaseSlice.reducer;
