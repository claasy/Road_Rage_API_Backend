import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import DidYouKnowSection from "../../components/DidYouKnowSection/DidYouKnowSection";
import DisplayDriverIncidents from "../DisplayDriverIncidents/DisplayDriverIncidents";
import VehicleTable from "../../components/VehicleTable/VehicleTable";
import axios from "axios";
import DisplayVehicleStats from "../../components/DisplayVehicleStats/DisplayVehicleStats";

let BASEURLS = 'http://127.0.0.1:8000/api/';

const HomePage = (props) => {

  const [user, token] = useAuth();
  const [plateData, setPlateData] = useState();
  const [filteredPlates, setFilteredPlates] = useState([]);
  // const [modalShow, setModalShow] = React.useState(false);
  const [incidents, setIncidents] = useState([]);
  const [plate, setPlate] = useState('');
  
  console.log(plate)
 
  return (
    <React.Fragment>
      <div className="container">
        <h1>Home Page for {user.username}!</h1>
        <div className="container">
        <h2>? DID YOU KNOW ?</h2>
        <DidYouKnowSection />
      </div>
        <p> SAFETY FIRST - Before reporting ANY incident, please think of the safety of yourself and those around you. Your entry can wait until you are home or safely parked and out of traffic.</p>
        <p>
        ***If the incident you are reporting is in violation of any laws, or if it is dangerous, (someone could be injured), always report it to the proper authorities first! This is not a replacement for our law enforcement, simply an outlet for responsible drivers to vent***
      </p>
        <Link to="/addvehicle">Add My Vehicle!</Link>
      </div>
      <div className="container">
        <Link to="/addincident">Add Incident!</Link>
      </div>
      <div>
        <DisplayVehicleStats></DisplayVehicleStats>
      </div>
      <SearchBar onSearch={setPlate}></SearchBar>


      {plate && <div>
        <DisplayDriverIncidents plate={plate}/>
      </div>}

    </React.Fragment>
  );
};

export default HomePage;
