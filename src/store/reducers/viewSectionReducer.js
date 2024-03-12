import { createSlice } from '@reduxjs/toolkit';

export const viewSlice = createSlice({
  name: 'section',
  initialState: {
    value: 'bio',
  },
  reducers: {
    viewSection: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { viewSection } = viewSlice.actions;

export default viewSlice.reducer;
