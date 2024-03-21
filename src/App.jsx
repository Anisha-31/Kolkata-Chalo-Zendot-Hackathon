import React, { useState, useEffect, useCallback } from 'react'
import TripForm from './components/form';
import { getTripData, setTripData, removeTripData } from './utils/storage';
import './App.css';
import { calculateTotalCost } from './utils/storage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './homepage';
import EditTripForm from './components/editform';
function App() {

  return(
    <Router>
      <Routes>
        <Route path='/' Component={Homepage}/>
        <Route path="/edit-trip/:id" Component={EditTripForm} /> {/* Define route for EditTripForm with trip ID parameter */}
        <Route path='/form' Component={TripForm}/>
      </Routes>
    </Router>
  )
  
}

export default App
