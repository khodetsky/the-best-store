import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        email: null
    },
    reducers: {
        setUserIsLoggedIn(state, action) {
           state.isLoggedIn = action.payload;
        },
        setUserEmail(state, action) {
           state.email = action.payload;
        }
    }
});

export const { setUserIsLoggedIn, setUserEmail } = userSlice.actions;