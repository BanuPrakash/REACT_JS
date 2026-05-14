import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name : "profile",
    initialState: {"avatar": "banu.png", "name": "Banu Prakash"},
    reducers: {

    }
});

export const profileReducer = profileSlice.reducer; // need for root reducer
// no actions to export