import { configureStore } from '@reduxjs/toolkit';

import deviceReducer from './reducers/deviceReducer';

export default configureStore({
  reducer: {
    device: deviceReducer,
  },
});
