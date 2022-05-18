// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from 'react';
import useAuth from "./hooks/useAuth";
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddVehiclePage from "./pages/AddVehiclePage/AddVehiclePage";
import AddIncidentPage from "./pages/AddNewIncident/AddNewIncident";
import DisplayDriverIncidentsPage from "./pages/DisplayDriverIncidents/DisplayDriverIncidents";
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";

let BASEURLS = 'http://127.0.0.1:8000/api/vehicles/';

function App() {
  const [plateData, setPlateData] = useState([])
  // const [searchedPlates, setSearchPlates] = useState([])
  const [user, token] = useAuth();
  
  useEffect(() => {
    getPlateData();
  }, [])

  async function getPlateData() {
    let response = await axios.get(BASEURLS + 'all/', {
      headers: {
        Authorization: "Bearer " + token,
      }
    });
    setPlateData(response.data)
    console.log(response.data)
  }

    const filterPlates = (searchTerm) => {
      let matchingPlates = plateData.filter((plate) =>
        plate.vehicle.toUpperCase().includes(searchTerm.toUpperCase())
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
            < DisplayDriverIncidentsPage />
          </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
