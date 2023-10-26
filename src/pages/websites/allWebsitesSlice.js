import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllWebsites = createAsyncThunk("websites", async () => {
    try {
        const {data} = await axios.get('/api/website');
        console.log(data)
        return data;
    }
    catch (err) {
        console.log(err);
    }
})

const initialState = {
    websites: {},
};

export const allWebsitesSlice = createSlice({
    name:"websites",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllWebsites.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const selectAllWebsites = (state) => {
    return state.websites;
};


export default allWebsitesSlice.reducer;