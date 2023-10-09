import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_REACT_API_URL;


export const userLogin = createAsyncThunk("userLogin", async (data, { rejectWithValue }) => {
    console.log(data)
    const response = await axios.post("https://dummyjson.com/auth/login", {
        username: data.username,
        password: data.password
    });
    const userData = response.data;
    console.log(userData)
    return userData;
}
);

const loginReducer = createSlice({
    name: 'users',
    initialState: {
        loginUser: [],
        loading: false,
        error: null,
    },

    extraReducers: {
        [userLogin.pending]: (state) => {
            state.loading = true;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.loading = false;
            state.loginUser = action.payload;
        },
        [userLogin.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export default loginReducer.reducer