import { useState } from 'react'
import TripForm from './components/form';
import { getTripData , setTripData } from './utils/storage';
import './App.css'

function App() {

  const [tripData, setTripDataState] = useState(getTripData());
  const handleTripSave = (trip) => {
    setTripData(trip);
    setTripDataState(trip);
  };

  return (
    <>
      
       
      <h1>Kolkata Chalo</h1>
      <div className="card">
        
        <h1>Packages we offer </h1>
      <TripForm onSave={handleTripSave} />
      {tripData && (
        <div>
          <h2>Your Trip Details</h2>
          <p>Number of Days: {tripData.days}</p>
          <p>Destination: {tripData.destination}</p>
          <p>Number of People: {tripData.people}</p>
          <p>Activities: {tripData.activities.join(', ')}</p>
        </div>
      )}
      
      </div>
     
    </>
  )
}

export default App
