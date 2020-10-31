import React from "react";

// Exporting both RecipeList and RecipeListItem from this file

// EmployeeList renders a bootstrap list item
export function EmployeeList({ children }) {
  return <table className="table table-dark">{children}</table>;
}

// EmployeeListItem renders a bootstrap list item containing data from dummydata api call
export function EmployeeListItem({
  picture,
  name,
  email,
  dob
}) {
  return (
    <table className="table table-dark">
    <thead>
        <tr>
         <th scope="col">Pic</th>
         <th scope="col">Name</th>
         <th scope="col">Email</th>
         <th scope="col">D.O.B</th>
        </tr>
    </thead>
    <tbody>  
        <tr>
         <th scope="row"><img image={picture}/></th>
         <td>{name}</td>
         <td>{email}</td>
         <td>{dob}</td>
        </tr>
    
      
    </tbody> 
    </table>
  );
}
