import React, { useState, useEffect } from 'react';

const IncidentTable = (props) => {
    return ( 
        <div>
            <table>
                <thead> 
                    <tr>
                        <th> License Plate </th>
                        <th> Type of Incident </th>
                        <th> Incident </th>
                    </tr>
                </thead>
                <tbody>
                    {props.searchedPlates.map((plate,index)=>{
                        return(
                            <tr key={index}>
                                <td> {plate.vehicle} </td>
                            </tr>      
                        )
                    }
                    )}
                   
                </tbody>
            </table>
        </div>
    );
}
 
export default IncidentTable;

