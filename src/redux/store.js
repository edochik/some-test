import { configureStore } from '@reduxjs/toolkit'
import { seminarsSlice } from "./initialData/initialData.js"
import { fetchSeminarsThunk } from "./initialData/thunk/fetchSeminarsThunk.js";

const store = configureStore({
	reducer: {
		seminars: seminarsSlice.reducer,
	}
});

store.dispatch(fetchSeminarsThunk());

export default store