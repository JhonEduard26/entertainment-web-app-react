import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = !state.isLoading
    }
  }
})

export const { setLoading } = uiSlice.actions