// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const VehicleTable = (props) => {
//     return ( 
//         <div>
//             <table>
//                 <thead> 
//                     <th> Vehicle </th>
//                 </thead>
//                 <tbody>
//                     {props.searchedVehicles.map((make,index)=>{
//                         return (
//                             <tr key={index}>
//                                 <td> {vehicle.make} </td>
//                                 <td>
//                                     <Button onClick = {() => props.setModal(true)}> More Info </Button>
//                                 </td>
//                                 <td>
//                                 <Modal
//                                         {...props}
//                                         size="lg"
//                                         aria-labelledby="contained-modal-title-vcenter"
//                                         centered
//                                         >
//                                         <Modal.Header closeButton>
//                                             <Modal.Title id="contained-modal-title-vcenter">
//                                             Modal heading
//                                             </Modal.Title>
//                                         </Modal.Header>
//                                         <Modal.Body>
//                                             <h4>Centered Modal</h4>
//                                             <table class="table">
//                                                 <thead>
//                                                     <tr>
//                                                         <th scope='col'>State of Plate</th>
//                                                         <th scope='col'>Vehicle Make</th>
//                                                         <th scope='col'>Vehicle Model</th>
//                                                         <th scope='col'>Vehicle Color</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     <tr key={index}>
//                                                         <td>{vehicle.plate_state}</td>
//                                                         <td>{vehicle.make}</td>
//                                                         <td>{vehicle.model}</td>
//                                                         <td>{vehicle.color}</td>
//                                                     </tr>
//                                                 </tbody>
//                                             </table>
//                                         </Modal.Body>
//                                         <Modal.Footer>
//                                             <Button onClick={props.onHide}>Close</Button>
//                                         </Modal.Footer>
//                                     </Modal>
//                                 </td>
//                             </tr>      
//                         )
//                     })} 
//                 </tbody>
//             </table>
//         </div>
//     );
// }
 
// export default VehicleTable;

