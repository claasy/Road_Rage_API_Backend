import { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const DisplayVehicleStats = ({incidents}) => {
    

    function generateDataFormChart(){
        
        console.log(incidents);

        let filteredIncidents = incidents.filter(incident => true);

        console.log('Filtered Incidents', filteredIncidents)

        let makes = filteredIncidents.map(incident => {
            return incident.make;
        });

        console.log('Makes' , makes)

        const data = [
            ["Make", "Number of Incidents", { role: "style" }],
            ["Toyota", 4, "silver"],
            ["Hyundai", 10, "silver"],
            ["Harley Davidson", 19, "silver"],
            ["Ford", 21, "silver"],
        ];
        return data;
    }
    const data = generateDataFormChart()
    console.log (data)
    return (
        <div>
            <h1>Incidents by Vehicle Make</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
        </div>
    );
}

export default DisplayVehicleStats;