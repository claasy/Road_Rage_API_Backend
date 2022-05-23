import{ useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import useAuth from "../../hooks/useAuth"
import React, { useState, useEffect } from 'react';
import useCustomForm from "../../hooks/useCustomForm"

let initialValues = {
    plate: "",
    incident_description: ""
}

const DisplayDriverIncidents = (props) => {
    // const navigate = useNavigate()
    const [user, token] = useAuth()
    const {plate} = useParams();
    const [incidents, setIncidents] = useState([]);

    const getDriverIncidents = async() => {
        console.log(plate)
        let response = await axios.get(`http://127.0.0.1:8000/api/incidents/${plate}/`,  {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        )
        console.log(response.data)
        setIncidents(response.data);
 
    }
    useEffect(()=>{
        getDriverIncidents()
        console.log(incidents)
        
    },[])

    return (
        <>
            <div>
                {props.filtereddata.map(incident=> {
                    
                    return (
                        <p>
                        {incident.plate} {incident.incident_description} {incident.approximate_location}
                        </p>
                    )
                    
                })}
            </div>
            {/* <div>
                {incidents &&
                incidents.map((incident) => (
                    <p key={incident.id}>
                    {incident.plate} {incident.incident_description} {incident.approximate_location} 
                    </p>
                ))} */}
                {/* navigate('/DisplayDriverIncidents/${formData.license_plate}/') */}
            {/* </div> */}
        </>
    )

}
export default DisplayDriverIncidents