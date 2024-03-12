import { configureStore } from '@reduxjs/toolkit';

import deviceReducer from './reducers/deviceReducer';
import sectionReducer from './reducers/viewSectionReducer';

// Configuring the Redux store using configureStore function from Redux Toolkit
export default configureStore({
  // Defining reducers for the store
  reducer: {
    // Reducer for managing device-related state
    device: deviceReducer,
    // Reducer for managing section-related state
    section: sectionReducer,
  },
});
