import React, { useState, useEffect, useCallback } from 'react'
import TripForm from './components/form';
import { getTripData, setTripData, removeTripData } from './utils/storage';
import { useNavigate , Link } from "react-router-dom";
import { calculateTotalCost } from './utils/storage';
import victoria from './assets/victoria.jpg';
import princepghat from './assets/parkstreet.jpg'
import tram from './assets/tram.jpg'
import parkstreet1 from './assets/parkstreet1.jpg'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'
const Homepage = () => {

  const [tripData, setTripDataState] = useState(getTripData());
  const [storedTrips, setStoredTrips] = useState([]);
  const [modal, setModal] = useState('false');
  const navigate = useNavigate();


  useEffect(() => {
    const storedTripsData = Object.entries(localStorage).map(([key, value]) => {
      if (key.includes('tripData')) {
        return JSON.parse(value);
      }
      return null;
    }).filter(Boolean);
    setStoredTrips(storedTripsData);
  }, []);
  const handleEditTrip = (index) => {
    // You can navigate to a new page or open a modal for editing
    // For simplicity, let's navigate to a new page with the trip index in the URL
    navigate(`/edit-trip/${index}`);
  };
  const handletripform=()=>{
    navigate(`/form`)
  }



  const handleTripDelete = (index) => {
    const updatedTrips = storedTrips.filter((_, i) => i !== index);
    setStoredTrips(updatedTrips);
    localStorage.removeItem(`tripData-${index}`);
  };


  const handleTripSave = (trip) => {
    setTripData(trip);
    setTripDataState(trip);
    setStoredTrips((prevTrips) => [...prevTrips, trip]);
  };
  const totalCost = storedTrips.reduce((acc, trip) => acc + calculateTotalCost(trip), 0);

  return (
    <>
      <div className='front_panel'>
        <h1>Kolkata Chalo !</h1>
        <div className='sub_sub_panel'>
          <div className='sub_panel'>
            Customise Packages
            <p>Tailor-made holidays for you! Tell us what you want and we will design it for you or explore our special packages.</p>
            <label className='dest'>Search for a Destination
            </label>
            <input type='text' name='destination' />
            {/* <Link to="/form"> */}
            <button onClick={handletripform}>Let's go </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className='offer_panel'>
      <div className='offer'>
        <div className='card-1' >
          <div className='sub_card-1'>
            <img src={princepghat} className='image' />
            <div className='text'> A perfect trip to go on with your family . The trip includes a visit to heritage sites.
              <br />
              4Days and 5Nights .
              <br />
              Locations that are to be visited are PrincepGhat , Victoria Memorial , Kalighat .
              <br /> Kolkata Chalo .
            </div>
            <button type='submit'> Know More</button>
          </div>
        </div>
        <div className='card-1' >
          <div className='sub_card-1'>
            <img src={image1} className='image' />
            <div>
              A perfect trip to go on with your family . The trip includes a visit to heritage sites.
              <br />
              2days 1Night
              <br />
               Visiting to Cafes , Exploring the markets of kolkata .
              
              <br/>

              Kolkata Chalo!
              <br/>
              <button> Know More </button>

            </div>
          </div>
          </div>
          
          
        
        </div>
        <div className='offer'>
        <div className='card-1' >
          <div className='sub_card-1'>
            <img src={image3} className='image' />
            <div className='text'> A perfect trip to go on with your family . The trip includes a visit to heritage sites.
              <br />
              4Days and 5Nights .
              <br />
              Locations that are to be visited are PrincepGhat , Victoria Memorial , Kalighat .
              <br /> Kolkata Chalo .
            </div>
            <button type='submit'> Know More</button>
          </div>
        </div>
        <div className='card-1' >
          <div className='sub_card-1'>
            <div className='div_img'>
            <img src={image4} className='image' /></div>
            <div>
              A perfect trip to go on with your family . The trip includes a visit to heritage sites.
              <br />
            
              

              Kolkata Chalo!
              <br/>
              <button> Know More </button>

            </div>
          </div>
          </div>
         </div>
        </div>

      <div className='tripcard'>
        <h2>Packages Made </h2>
    
        <div className='storedTrips'>
          {storedTrips.length > 0 ? (
            <ul className='listitem'>
              <div className='liclass'>
              {storedTrips.map((trip, index) => (
                <li key={index} className='item'>

                  <h2>Destination: {trip.destination}</h2>
                  <div className='p_text'>Number of Days: {trip.days}</div>
                  <div className='p_text'>Number of People: {trip.people}</div>
                  <div className='p_text'>Activities: {trip.activities.join(', ')}</div>
                  <div className='buttons'>
                  <button onClick={() => handleEditTrip(index)} id='edit'>Edit</button>
                  <button onClick={() => handleTripDelete(index)} id='delete'>Delete</button></div>
                </li>
              ))}</div>
            </ul>
          ) : (
            <p>No stored trips yet.</p>
          )}
        </div>

      </div>
      <div className="card" >

        <img src={parkstreet1} className='card_img'/>
        {tripData && (
          <div className='tripdet'>
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

      export default Homepage
