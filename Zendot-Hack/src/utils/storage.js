// src/utils/storage.js
export const setTripData = (trip) => {
    localStorage.setItem('tripData', JSON.stringify(trip));
  };
  
  export const getTripData = () => {
    const tripData = localStorage.getItem('tripData');
    return tripData ? JSON.parse(tripData) : null;
  };
  
  export const removeTripData = () => {
    localStorage.removeItem('tripData');
  };
  