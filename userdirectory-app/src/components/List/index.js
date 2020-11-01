import React from "react";


// Exporting both RecipeList and RecipeListItem from this file

// EmployeeList renders a bootstrap list item
export function EmployeeList() {
  return  <table className="table table-bordered table-dark">
  <thead>
      <tr>
       <th scope="col">Pic</th>
       <th scope="col">Name</th>
       <th scope="col">Email</th>
       <th scope="col">D.O.B</th>
      </tr>
  </thead>
</table>;
}

// EmployeeListItem renders a bootstrap list item containing data from dummydata api call
export function EmployeeListItem({
  picture,
  name,
  email,
  dob
}) {
  return (
   
    <tbody>  
        <tr>
         <td><img image={picture} alt=""/></td>
         <td>{name}</td>
         <td>{email}</td>
         <td>{dob}</td>
        </tr>
    
      
    </tbody> 
    

  );
}
