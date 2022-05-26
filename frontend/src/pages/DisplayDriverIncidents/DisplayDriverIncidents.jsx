import{ useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import React, { useState, useEffect } from 'react';
import useCustomForm from "../../hooks/useCustomForm";
import SearchBar from "../../components/SearchBar/SearchBar";

let BASEURLS = 'http://127.0.0.1:8000/api';

let initialValues = {
    plate: "",
    incident_description: ""
}

const DisplayDriverIncidents = ({plateSent}) => {
    let { plate } = useParams();
    // const navigate = useNavigate()
    const [user, token] = useAuth()
    // const {plate} = useParams();
    const [incidents, setIncidents] = useState([]);
    const [isLogged, setIsLogged] = useState(false)

    useEffect(()=>{
        console.log("useEffect")
        console.log(plate)
        getDriverIncidents()
        
    },[])

    async function getDriverIncidents () {
        if (typeof plateSent === 'undefined') {
            console.log('I am getting called');
            let response = await axios.get(`${BASEURLS}/incidents/${plate}/`,  {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            console.log("incidents", response.data)
            setIncidents(response.data);
            setIsLogged(true)
        } else {
            let response = await axios.get(`${BASEURLS}/incidents/${plateSent}/`,  {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            console.log("incidents", response.data)
            setIncidents(response.data);
        }
       
    };


    return (
        <div>
            {incidents.map((el) => (
                <div>
                    <h3>Plate: <b>{el.plate}</b></h3>
                    <p>Incident Description: <b>{el.incident_description}</b></p>
                    <hr></hr>
                </div>
            ))}
            <div>
                {
                    isLogged &&  <h3>Your incident has been logged - thank you!</h3>
                }               
            </div>
        </div>
            
    );

};

export default DisplayDriverIncidents;