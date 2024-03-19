// src/components/TripForm.js
import React, { useState } from 'react';
import { setTripData } from '../utils/storage';
import { calculateTotalCost } from '../utils/storage';
import {useNavigate} from 'react-router-dom'

const activityPrices = {
    cycling: 10, // Example price for cycling activity
    riding: 15, // Example price for riding activity
    sightseeing:30,
    boatriding:20,

  };

  
const TripForm = ({onSave}) => {
  const [trip, setTrip] = useState({
    days: '2',
    destination: 'Howrah',
    people: '3',
    activities: ['Cycling'],
  } ,
  {
    days: '4',
    destination: 'Belur Math',
    people: '1',
    activities: ['Sight seeing'],

  });

  const packageImages = {
    princepghat: 'princep.jpg',
    victoria: 'victoria.jpg',
    parkstreet: 'parkstreet.jpg',
    // Add more package images here
  };
  const [packageCost, setPackageCost] = useState(0);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip((prevTrip) => ({
      ...prevTrip,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
  };
  

  const handleActivityChange = (e) => {
    const { value } = e.target;
    setTrip((prevTrip) => ({
      ...prevTrip,
      activities: [...prevTrip.activities, value],
    }));
    const activityCost = trip.activities.reduce((acc, activity) => acc + activityPrices[activity], 0);
    setPackageCost(trip.days * trip.people * 100 + activityCost);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        setTripData(trip);
        onSave(trip);
      }
      navigate('/');
    // 
    // Optionally, you can redirect to another page after form submission
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = {};
    // Validate each field
    if (!trip.days || trip.days<1) {
      newErrors.days = 'Number of days is required';
      valid = false;
    }
    if (!trip.destination) {
      newErrors.destination = 'Destination is required';
      valid = false;
    }
    if (!trip.people || trip.people < 1) {
      newErrors.people = 'Number of people is required';
      valid = false;
    }
    if (!trip.packageType) {
      newErrors.packageType = 'Package type is required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  return (
    <div className='container'>
        <div className='sub_card'>
          <div className='formpara'> Tell us about your dream holiday !</div>
         
        </div>
    <form onSubmit={handleSubmit} id='trip-form'>
        <label>
       Enter your Destination:
        <input type="text" name="destination" value={trip.destination} onChange={handleChange} />
        {errors.destination && <span style={{ color: 'red' }}>{errors.destination}</span>}
      </label>
      <br/>
      <label>
        Number of days:
        <input type="number" name="days" value={trip.days} onChange={handleChange} />
        {errors.days && <span style={{ color: 'red' }}>{errors.days}</span>}
      </label>
      <br/>
      <label>
        Number of people:
        <input type="number" name="people" value={trip.people} onChange={handleChange} />
        {errors.people && <span style={{ color: 'red' }}>{errors.people}</span>}
      </label>
      <br/>
      <label>
        Activities:
        <select onChange={handleActivityChange}>
          <option value="cycling">Cycling - ${activityPrices['cycling']}</option>
          <option value="riding">Riding - ${activityPrices['riding']}</option>
          <option value="sightseeing">Sight Seeing - ${activityPrices['sight seeing']}</option>
          <option value="boatriding"> Boat Riding - ${activityPrices['boat riding']}</option>
        </select>
      </label>
      <label>
        Package Type:
        <select name="packageType" onChange={handleChange}>
          <option value="">Select Package Type</option>
          <option value="victoria">Victoria</option>
          <option value="mountains">Mountains</option>
          <option value="city">City</option>
          {/* Add more package options here */}
        </select>
        {errors.packageType && <span style={{ color: 'red' }}>{errors.packageType}</span>}
      </label>
      {/* Display package image based on selected package type */}
      {trip.packageType && (
        <img src={packageImages[trip.packageType]} alt={trip.packageType} style={{ maxWidth: '300px', maxHeight: '200px', marginBottom: '10px' }} />
      )}
      <p>Package Cost: ${packageCost}</p>
      <button type="submit" id="submit">Save Trip</button>
    </form>
    </div>
  );
};

export default TripForm;
