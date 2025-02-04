import { createSlice } from "@reduxjs/toolkit";
import { fetchSeminarsThunk } from "./thunk/fetchSeminarsThunk.js";
import { fetchDeleteThunk } from "./thunk/fetchDeleteThunk.js";
import { fetchUpdateSeminarThunk } from "./thunk/fetchUpdateSeminarThunk.js";

//состояние для хранения семинаров
const initialState = {
	loadingSeminars: 'idle',
	loadingDelete: 'idle',
	loadingUpdate: 'idle',
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
				state.loadingSeminars = 'pending'
			})
			.addCase(fetchSeminarsThunk.fulfilled, (state, action) => {
				state.loadingSeminars = 'succeeded'
				state.seminars = action.payload
			})
			.addCase(fetchSeminarsThunk.rejected, (state, action) => {
				state.loadingSeminars = 'failed'
				state.error = action.payload;
			})

			.addCase(fetchUpdateSeminarThunk.pending, (state) => {
				state.loadingUpdate = 'pending'
			})
			.addCase(fetchUpdateSeminarThunk.fulfilled, (state, action) => {
				state.loadingUpdate = 'succeeded'
				state.seminars = state.seminars.map(seminar => seminar.id === action.payload.id ? action.payload : seminar)
			})
			.addCase(fetchUpdateSeminarThunk.rejected, (state, action) => {
				state.loadingUpdate = 'failed'
				state.error = action.payload;
			})

			.addCase(fetchDeleteThunk.pending, (state) => {
				state.loadingDelete = 'pending'
			})
			.addCase(fetchDeleteThunk.fulfilled, (state, action) => {
				state.loadingDelete = 'succeeded'
				state.seminars = state.seminars.filter(seminar => seminar.id !== action.payload.id)
			})
			.addCase(fetchDeleteThunk.rejected, (state, action) => {
				state.loadingDelete = 'failed'
				state.error = action.payload;
			})
	}
})

export const { clearError } = seminarsSlice.actions;