import { createSlice } from '@reduxjs/toolkit'; // Importing createSlice function from Redux Toolkit

// Creating a slice for device state management
export const viewSlice = createSlice({
  name: 'section', // Name of the slice
  initialState: {
    value: 'bio', // Initial state for the device value
  },
  reducers: {
    // Reducer function to handle view section value
    viewSection: (state, action) => {
      state.value = action.payload; // updating the device value based on the payload
    },
  },
});

// Exporting the viewSection action creator from viewSlice
export const { viewSection } = viewSlice.actions;

// Exporting the view reducer function from viewSlice
export default viewSlice.reducer;
