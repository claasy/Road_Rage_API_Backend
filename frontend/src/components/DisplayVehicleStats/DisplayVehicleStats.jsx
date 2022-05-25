import { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

export const data = [
    ["Make", "Incidents", { role: "style" }],
    ["Toyota", 8.94, "silver"],
    ["Silver", 10.49, "silver"],
    ["Gold", 19.3, "silver"],
    ["Platinum", 21.45, "silver"],
];

const DisplayVehicleStats = ({incidents}) => {
    return (
        <div>
            <h1>Incidents by Vehicle Make</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
        </div>
    );
}

export default DisplayVehicleStats;