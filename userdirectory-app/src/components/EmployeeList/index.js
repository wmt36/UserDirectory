import React from "react";

// EmployeeList renders a bootstrap list item

const EmployeeList = () => {
  return (
    <table className="table table-bordered table-dark">
    <thead>
        <tr>
         <th scope="col">Pic</th>
         <th scope="col">Name</th>
         <th scope="col">Email</th>
         <th scope="col">D.O.B</th>
        </tr>
    </thead>
  </table>
      );
  
  };
  
  
  export default EmployeeList ;