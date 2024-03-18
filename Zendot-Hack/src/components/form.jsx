// src/components/TripForm.js
import React, { useState } from 'react';
import { setTripData } from '../utils/storage';

const TripForm = ({onSave}) => {
  const [trip, setTrip] = useState({
    days: '',
    destination: '',
    people: '',
    activities: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip((prevTrip) => ({
      ...prevTrip,
      [name]: value,
    }));
  };

  const handleActivityChange = (e) => {
    const { value } = e.target;
    setTrip((prevTrip) => ({
      ...prevTrip,
      activities: [...prevTrip.activities, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTripData(trip);
    onSave(trip);
    // Optionally, you can redirect to another page after form submission
  };

  return (
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
        Activities:
        <select onChange={handleActivityChange}>
          <option value="cycling">Cycling</option>
          <option value="riding">Riding</option>
          {/* Add more activity options here */}
        </select>
      </label>
      <button type="submit">Save Trip</button>
    </form>
  );
};

export default TripForm;
