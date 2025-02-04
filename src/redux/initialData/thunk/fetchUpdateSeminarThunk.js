import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../api/api.js";

// обновляем семинар
export const fetchUpdateSeminarThunk = createAsyncThunk(
	'fetchUpdateSeminarThunk',
	async (seminar, { rejectWithValue }) => {
		try {
			const response = await fetch(`${API_URL}/${seminar.id}`, {
				method: 'PUT', headers: {
					'Content-Type': "application/json",
				},
				body: JSON.stringify(seminar)
			})
			if (!response.ok) {
				throw new Error(response.status)
			}
			return await response.json();
		} catch (error) {
			console.log('Error:', error);  // Логируем ошибку
			return rejectWithValue(`Ошибка обновление семинара: ${error.message}`)
		}
	}
)
