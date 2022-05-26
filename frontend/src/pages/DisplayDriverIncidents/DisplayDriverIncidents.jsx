import{ useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import React, { useState, useEffect } from 'react';
import useCustomForm from "../../hooks/useCustomForm";
import SearchBar from "../../components/SearchBar/SearchBar";

let initialValues = {
    plate: "",
    incident_description: ""
}

const DisplayDriverIncidents = ({plate}) => {
    // const navigate = useNavigate()
    const [user, token] = useAuth()
    // const {plate} = useParams();
    const [incidents, setIncidents] = useState([]);

    const getDriverIncidents = async() => {
        console.log(plate)
        let response = await axios.get(`http://127.0.0.1:8000/api/incidents/${plate}/`,  {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        )
        console.log("incidents")
        console.log(response.data)
        setIncidents(response.data);
    };

    
    useEffect(()=>{
        console.log("useEffect")
        console.log(plate)
        getDriverIncidents()
        
    },[plate])

    return (
        <div>
            {incidents.map((el) => (
                <div>
                    <div>{el.plate}</div>
                    <div>{el.incident_description}</div>
                </div>
            ))}
        </div>
            
    );

};

export default DisplayDriverIncidents;