import { createSlice } from '@reduxjs/toolkit'; // Importing createSlice function from Redux Toolkit

// Creating a slice for device state management
export const deviceSlice = createSlice({
  name: 'device', // Name of the slice
  initialState: {
    value: 'laptop', // Initial state for the device value
  },
  reducers: {
    // Reducer function to handle changing the device value
    changeDevice: (state, action) => {
      state.value = action.payload; // Updating the device value based on the payload
    },
  },
});

// Exporting the changeDevice action creator from deviceSlice
export const { changeDevice } = deviceSlice.actions;

// Exporting the device reducer function from deviceSlice
export default deviceSlice.reducer;
