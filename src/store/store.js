import { configureStore } from '@reduxjs/toolkit';

import deviceReducer from './reducers/deviceReducer';
import sectionReducer from './reducers/viewSectionReducer';

export default configureStore({
  reducer: {
    device: deviceReducer,
    section: sectionReducer,
  },
});
