// src/utils/storage.js
export const setTripData = (trip) => {
    const tripKeys = Object.keys(localStorage).filter(key => key.startsWith('tripData-'));
  const tripIndex = tripKeys.length;
    localStorage.setItem(`tripData-${tripIndex}`, JSON.stringify(trip));
  };
  
  export const getTripData = () => {
    const tripData = localStorage.getItem('tripData');
    return tripData ? JSON.parse(tripData) : null;
  };
  
  export const removeTripData = () => {
    localStorage.removeItem('tripData');
  };
  // src/utils/calculateCost.js
export const calculateTotalCost = (trip) => {
    const { days, people, activities } = trip;
    // Calculate cost of each activity
    const activityCost = activities.reduce((acc, activity) => {
      // Define cost for each activity
      const activityPrices = {
        cycling: 10, // Example price for cycling activity
        riding: 15, // Example price for riding activity
        // Add more activities and their prices here
      };
      return acc + (activityPrices[activity] || 0); // Add the price of each activity to the accumulator
    }, 0);
    // Define base package price
    const basePackagePrice = 100; // Example base package price
    // Calculate total cost including base package price and activity costs
    const totalCost = basePackagePrice * days * people + activityCost;
    return totalCost;
  };
  