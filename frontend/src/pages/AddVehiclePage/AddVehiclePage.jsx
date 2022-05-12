import React from "react"
import{ useNavigate } from "react-router-dom"
import axios from "axios"

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"


let initialValues = {
    plate: "",
    make: "",
    model: "",
    color:"",
};

const AddVehiclePage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewVehicle)

    async function postNewVehicle(){
        try{
            let response = await axios.post("http://127.0.0.1:8000/api/vehicles/", formData, {
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
              Plate:{" "}
              <input
                type="text"
                name="plate"
                value={formData.plate}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Make:{" "}
              <input
                type="text"
                name="make"
                value={formData.make}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Model:{" "}
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Color:{" "}
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
              />
            </label>
            
            <button>Add Vehicle</button>
          </form>
        </div>
    );


}

export default AddVehiclePage