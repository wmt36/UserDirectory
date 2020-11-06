// EmployeeListItem renders a bootstrap list item containing data from dummydata api call
import React, { useState, useEffect } from 'react'
import API from '../../utils/API'

export function EmployeeList() {    

    const [employee, setEmployee] = useState([]);
    
    
    const header = ['Pic','Name', 'Email', 'D.O.B']
    

    useEffect(() => {
        API.getUsers()
        .then(res => setEmployee(res.data.results))
        .catch((err) => console.log(err));
      }, []); 
    

    return ( 
        <table className="table table-bordered table-dark">  
        <tbody>
            <tr>
            {header.map((headers, i ) => 
                <th scope="col" key={i}>{headers}</th>
            )}
            </tr>
            {employee.map(emp => (
            <tr key={emp.login.uuid}>
                <td><img src={emp.picture.medium}></img></td>
                <td>{emp.name.first + ' ' + emp.name.last}</td>
                <td>{emp.email}</td>
                <td>{emp.dob.date.split('T') [0]}</td>
            </tr>
            ))}
           
            
        </tbody>
    </table>  
    );
 };
    
    
export default EmployeeList ;

    

           