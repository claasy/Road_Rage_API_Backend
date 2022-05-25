import React from "react"
import{ useNavigate } from "react-router-dom"
import axios from "axios"

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"


let initialValues = {
    plate: "",
    vehicle_make: "",
    vehicle_model: "",
    vehicle_color: "",
    incident_type: "",
    incident_description: "",
    approximate_date_and_time:"",
    approximate_location:"",
    city: "",
    state: ""
};

const AddNewIncident = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewIncident)

    async function postNewIncident(){
      console.log(formData)
        try{
            let response = await axios.post("http://127.0.0.1:8000/api/incidents/", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate(`/DriverIncidents/${formData.plate}/`)
            // navigate to a different page that queryies/filters to display all incidents with this car
            // capture plate data that is being submitted, hold it in a state variable in app (similar to searchTerm)
            // use that state variable to filter incident data
            // pass incident data into new page via props like vehicles are being passed into homepage
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              License Plate:{" "}
              <input
                type="text"
                name="plate"
                value={formData.plate}
                onChange={handleInputChange}
              />
            </label>
            <label>
              State of License Plate:{" "}
              <input
                type="text"
                name="plate_state"
                value={formData.plate_state}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Vehicle Make:{" "}
              <input
                type="text"
                name="vehicle_make"
                value={formData.vehicle_make}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Vehicle Model:{" "}
              <input
                type="text"
                name="vehicle_model"
                value={formData.vehicle_model}
                onChange={handleInputChange}
              />
            <label>
              Vehicle Color:{" "}
              <input
                type="text"
                name="vehicle_color"
                value={formData.vehicle_color}
                onChange={handleInputChange}
              />
            </label>
            </label>
            <label>
              Type of Incident (Courteous, Dangerous, Funny, Texter, Parking Violation, Gross or Rude):{" "}
              <input
                type="text"
                name="incident_type"
                value={formData.incident_type}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Describe What Happened:{" "}
              <input
                type="text"
                name="incident_description"
                value={formData.incident_description}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Approximate Date and Time:{" "}
              <input
                type="datetime-local"
                name="approximate_date_and_time"
                value={formData.approximate_date_and_time}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Approximate Location (nearest intersection or nearest intersection and store name if parking violation):{" "}
              <input
                type="text"
                name="approximate_location"
                value={formData.approximate_location}
                onChange={handleInputChange}
              />
            </label>
            <label>
              City:{" "}
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </label>
            <label>
              State:{" "}
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
            </label>
            <button>Add Incident</button>
          </form>
        </div>
    );
}

export default AddNewIncident