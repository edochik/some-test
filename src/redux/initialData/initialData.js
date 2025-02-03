import { createSlice } from "@reduxjs/toolkit";
import { fetchSeminarsThunk } from "./thunk/fetchSeminarsThunk.js";

const initialState = {
	loading: 'idle',
	error: null,
	seminars: []
}

export const seminarsSlice = createSlice({
	name: 'seminars',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSeminarsThunk.pending, (state) => {
				state.loading = 'pending'
			})
			.addCase(fetchSeminarsThunk.fulfilled, (state, action) => {
				state.loading = 'succeeded'
				state.seminars = action.payload
			})
			.addCase(fetchSeminarsThunk.rejected, (state, action) => {
				state.loading = 'failed'
				state.error = action.error.message
			})
	}
})

export default seminarsSlice.reducer