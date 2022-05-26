import { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const DisplayVehicleStats = ({incidents}) => {

    const [user, token] = useAuth()
    const [chartData, setChartData] = useState();
    
    useEffect(async()=>{
        let response = await axios.get(`http://127.0.0.1:8000/api/incidents/all/`,  {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        )
        if (! response.data.length){return}
        // console.log(response.data)
        const makeCounters={}
        const data = [
            ["Make", "Number of Incidents", { role: "style" }],
            ]
        response.data.forEach((el) => {
            console.log(el)
            const make = el.vehicle_make
            if (make in makeCounters){

                makeCounters[make]++
            } else {
                makeCounters[make]=1
            }
        }
        )
        for(let make in makeCounters){
            data.push([make, makeCounters[make], "silver"])
        }
        setChartData(data);
    },[]);
       

    return (
        <div>
            <h1>Incidents by Vehicle Make</h1>
            {chartData && 
            <Chart chartType="ColumnChart" width="100%" height="400px" data={chartData} />}
        </div>
    );
}

export default DisplayVehicleStats;