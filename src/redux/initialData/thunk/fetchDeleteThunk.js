import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../api/api.js";

// удаление одного семинара
export const fetchDeleteThunk = createAsyncThunk(
	'fetchDeleteThunk',
	async (id, { rejectWithValue }) => {
		try {
			const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
			if (!response.ok) {
				throw new Error(response.status);
			}
			return await response.json();
		} catch (error) {
			console.log('Error:', error);  // Логируем ошибку
			return rejectWithValue(`Ошибка загрузка семинаров: ${error.message}`)
		}
	}
)