import React, { useEffect, useState } from "react";

import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState();

  useEffect(() => {
  },[]);
  return (
    <React.Fragment>
      <div className="container">
        <h1>Home Page for {user.username}!</h1>
        <Link to="/addvehicle">Add My Vehicle!</Link>
      </div>
      <div className="container">
        <Link to="/addincident">Add Incident!</Link>
      </div>
      <div className="container">
      <Link to="/DriverIncidents/:plate/">Search Driver Incidents</Link>
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
