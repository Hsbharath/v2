'use client';

// Importing necessary functions and components
import { changeDevice } from '@/store/reducers/deviceReducer'; // Importing the changeDevice action from the deviceReducer
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector hooks from react-redux
import ToggleView from '../ToggleView/page';

import View from '../View/page'; // Importing View component

// Main component definition
const Main = () => {
  const dispatch = useDispatch(); // Initializing dispatch hook
  const selectedSection = useSelector((state) => state.section.value); // Getting selected section from Redux state
  const [deviceSize, setDeviceSize] = useState(null); // Initializing deviceSize state variable using useState hook

  useEffect(() => {
    // If selected section is available in Redux state, scroll to it
    if (selectedSection) {
      const sectionElement = document.getElementById(selectedSection); // Getting the DOM element of the selected section
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scrolling to the selected section
      }
    }

    const getDeviceSize = () => {
      if (typeof window !== 'undefined') {
        // Checking if the window object is available
        if (window.matchMedia('(max-width: 767px)').matches) {
          return 'mobile'; // Returning 'mobile' if the window width is less than or equal to 767px
        } else if (window.matchMedia('(max-width: 1023px)').matches) {
          return 'tablet'; // Returning 'tablet' if the window width is less than or equal to 1023px
        } else {
          return 'laptop'; // Returning 'laptop' for larger window widths
        }
      }
      return null; // Returning null if window object is not available
    };

    setDeviceSize(getDeviceSize()); // Setting initial device size using getDeviceSize function

    const handleResize = () => {
      const newSize = getDeviceSize(); // Getting new device size on window resize
      if (newSize !== deviceSize) {
        // If the new size is different from the current size
        dispatch(changeDevice(newSize)); // Dispatching changeDevice action with the new size
        setDeviceSize(newSize); // Updating deviceSize state variable
      }
    };

    window.addEventListener('resize', handleResize); // Adding event listener for window resize

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize); // Removing event listener on component unmount
    };
  }, [deviceSize, dispatch, selectedSection]); // Dependencies for useEffect hook

  // Rendering ToggleView and View components
  return (
    <div className='relative w-full min-h-[100vh] flex items-center justify-center'>
      <ToggleView />
      <View />
    </div>
  );
};

export default Main; // Exporting Main component as default
