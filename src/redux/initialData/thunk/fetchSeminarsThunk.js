import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../api/api.js";

//получение семинаров
export const fetchSeminarsThunk = createAsyncThunk(
	'fetchSeminarsThunk',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(`${API_URL}`);
			if (!response.ok) {
				throw new Error(response.status)
			}
			return await response.json();
		} catch (error) {
			console.log('Error:', error);  // Логируем ошибку
			return rejectWithValue(`Ошибка удаления семинара: ${error.message}`)
		}
	}
)
