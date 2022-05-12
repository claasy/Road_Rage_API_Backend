// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from 'react';
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddVehiclePage from "./pages/AddVehiclePage/AddVehiclePage";
import AddIncidentPage from "./pages/AddNewIncident/AddNewIncident";
import SearchBar from "./components/SearchBar/SearchBar";
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect } from "react";
import axios from "axios";
import DisplayDriverIncidentsPage from "./pages/DisplayDriverIncidents/DisplayDriverIncidents";

let BASEURLS = 'http://127.0.0.1:8000/api/vehicles/';


function App() {
  const [plateData, setPlateData] = useState([])
  // const [searchedPlates, setSearchPlates] = useState([])

  useEffect(() => {
    getPlateData();
  }, [])

  async function getPlateData() {
    let response = await axios.get(BASEURLS + 'all/')
    setPlateData(response.data)
    console.log(response.data)
  }

    const filterPlates = (searchTerm) => {
      let matchingPlates = plateData.filter((vehicle) =>
        vehicle.plate.toUpperCase().includes(searchTerm.toUpperCase())
       )
      setPlateData(matchingPlates)
    };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage vehicles={plateData}/>
              <SearchBar filterPlates={filterPlates}
              />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/addvehicle" 
          element={
          <PrivateRoute>
            <AddVehiclePage/>
          </PrivateRoute>
          }
        />
        <Route 
          path="/addincident" 
          element={
          <PrivateRoute>
            <AddIncidentPage/>
          </PrivateRoute>
          }
        />
         <Route 
          path="/DriverIncidents/:plate/" 
          element={
          <PrivateRoute>
            <DisplayDriverIncidentsPage/>
          </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
