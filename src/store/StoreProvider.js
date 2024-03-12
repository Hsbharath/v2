// Importing necessary dependencies
'use client'; // This appears to be a directive specific to a particular tool or environment, potentially related to the use of Apollo Client for GraphQL

// Importing the Provider component from react-redux to provide Redux store to React components
import { Provider } from 'react-redux';

import store from './store';

// Defining a custom component called StoreProvider, which wraps the entire application with the Redux Provider
export const StoreProvider = ({ children }) => {
  // Rendering the Provider component and passing the Redux store as a prop, along with its children
  return <Provider store={store}>{children}</Provider>;
};
