// src/components/EditTripForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTripData, setTripData } from '../utils/storage';

const EditTripForm = () => {
  const { index } = useParams(); // Get the trip index from URL parameters
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [trip, setTrip] = useState({
    days: '',
    destination: '',
    people: '',
    activities: [],
    packageType: '',
  });

  useEffect(() => {
    // Fetch trip details from local storage based on the index
    const tripData = getTripData(index);
    setTrip(tripData);
  }, [index]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip((prevTrip) => ({
      ...prevTrip,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTripData(trip, index); // Update trip data in local storage
    // You can add additional logic here, such as displaying a success message
    navigate('/'); // Navigate back to the homepage after submitting the form
  };

  return (
    <div>
      <h2>Edit Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Number of days:
          <input type="number" name="days" value={trip.days} onChange={handleChange} />
        </label>
        <label>
          Destination:
          <input type="text" name="destination" value={trip.destination} onChange={handleChange} />
        </label>
        <label>
          Number of people:
          <input type="number" name="people" value={trip.people} onChange={handleChange} />
        </label>
        <label>
          Package Type:
          <select name="packageType" value={trip.packageType} onChange={handleChange}>
            <option value="">Select Package Type</option>
            <option value="beach">Beach</option>
            <option value="mountains">Mountains</option>
            <option value="city">City</option>
            {/* Add more package options here */}
          </select>
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTripForm;
