import React from "react"
import{ useNavigate } from "react-router-dom"
import axios from "axios"

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"


let initialValues = {
    license_plate: "",
    incident_type: "Courteous Driver, Funny, Gross, Rude, Texter, Dangerous or Parking Violation",
    incident_description: "",
    approximate_date_and_time:"",
    approximate_location:"",
    city: "",
    state: ""
};

const AddIncidentPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewIncident)

    async function postNewIncident(){
        try{
            let response = await axios.post("http://127.0.0.1:8000/api/incidents/", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate("/")
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
                name="license_plate"
                value={formData.license_plate}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Type of Incident:{" "}
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
                type="text"
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
            <button>Add Incident!</button>
          </form>
        </div>
    );
}

export default AddIncidentPage