import { createSlice } from '@reduxjs/toolkit';

export const deviceSlice = createSlice({
  name: 'device',
  initialState: {
    value: 'laptop',
  },
  reducers: {
    changeDevice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeDevice } = deviceSlice.actions;

export default deviceSlice.reducer;
