// EmployeeListItem renders a bootstrap list item containing data from dummydata api call


  const EmployeeListItem = (picture,
    name,
    email,
    dob
  ) => {
      
      
    return (  <tbody> <h1>yo yo</h1> 
        <tr>
         <td><img image={picture} alt=""/></td>
         <td>{name}</td>
         <td>{email}</td>
         <td>{dob}</td>
        </tr>
    
      
    </tbody> 
    );
    
    };
    
    
    export default EmployeeListItem ;