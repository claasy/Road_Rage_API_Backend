import React, {useEffect} from "react"
import{ useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import useAuth from "../../hooks/useAuth"

import useCustomForm from "../../hooks/useCustomForm"

const DisplayDriverIncidentsPage = () => {
    const [user, token] = useAuth()
    const {plate} = useParams();

    const getLosers = async() =>{
        console.log(plate)
        let response = await axios.get(`http://127.0.0.1:8000/api/incidents/${plate}/`,  {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        )
        console.log(response.data)
    }
    useEffect(()=>{
        getLosers()
    },[])

    return (
        <div>hello</div>
    )

}
export default DisplayDriverIncidentsPage