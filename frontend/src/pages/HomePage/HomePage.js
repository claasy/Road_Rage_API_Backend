import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import DidYouKnowSection from "../../components/DidYouKnowSection/DidYouKnowSection";
import DisplayDriverIncidents from "../DisplayDriverIncidents/DisplayDriverIncidents";


const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [vehicles, setVehicles] = useState();

  useEffect(() => {
  },[]);
  return (
    <React.Fragment>
      <div className="container">
        <h1>Home Page for {user.username}!</h1>
        <div className="container">
        <h2>? DID YOU KNOW ?</h2>
        <DidYouKnowSection />
        <h3> Now you do!</h3>
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
      <div className="container">
        <SearchBar filterPlates={props.filterPlates} />
      </div>
      <div className="container">
        <DisplayDriverIncidents filteredData={props.filteredData} />
       {/* {cars &&
          cars.map((car) => (
            <p key={car.id}>
              {car.year} {car.make} {car.model}
            </p>
          ))} */}
                {/* {props.vehicles &&
          props.vehicles.map((car) => (
            <p key={car.id}>
              {car.year} {car.make} {car.model}
            </p>

          ))} */}
      </div>
    </React.Fragment>
  );
};

export default HomePage;
