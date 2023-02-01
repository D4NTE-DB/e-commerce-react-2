import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
    name: 'userName',
    initialState: 'Dante',
    reducers: {
        setUserName: (state, action) =>{
            const userName = action.payload
            return userName
        }
    }
})


export const { setUserName } = userNameSlice.actions;

export default userNameSlice.reducer;
