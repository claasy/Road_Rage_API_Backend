import React from "react"
import{ useNavigate } from "react-router-dom"
import axios from "axios"

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"


let initialValues = {
    license_plate: "",
    incident_type: "",
    incident_description: "",
    approximate_date_and_time:"",
    approximate_location:"nearest intersection",
    city: "",
    state: ""
};

const IncidentPage = () => {
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
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              license_plate:{" "}
              <input
                type="text"
                name="license_plate"
                value={formData.license_plate}
                onChange={handleInputChange}
              />
            </label>
            <label>
              incident_type:{" "}
              <input
                type="text"
                name="incident_type"
                value={formData.incident_type}
                onChange={handleInputChange}
              />
            </label>
            <label>
              incident_description:{" "}
              <input
                type="text"
                name="incident_description"
                value={formData.incident_description}
                onChange={handleInputChange}
              />
            </label>
            <label>
              approximate_date_and_time:{" "}
              <input
                type="text"
                name="approximate_date_and_time"
                value={formData.approximate_date_and_time}
                onChange={handleInputChange}
              />
            </label>
            <label>
              approximate_location:{" "}
              <input
                type="text"
                name="approximate_location"
                value={formData.approximate_location}
                onChange={handleInputChange}
              />
            </label>
            <label>
              city:{" "}
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </label>
            <label>
              state:{" "}
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