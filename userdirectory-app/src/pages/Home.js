import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import API from '../utils/API'
import Container from '../components/Container';
import Row from '../components/Row';
import Btn from '../components/Btn';
import Jumbotron from '../components/Jumbotron';
import EmployeeList from '../components/EmployeeList'; 







const Home = () => {


    const [employee, setEmployee] = useState([]);
   
    useEffect(() => {
      API.getUsers()
      .then(res => setEmployee(res.data.results))
      .catch((err) => console.log(err));
    }, []); 

    const handleInputChange = event => {
        // const { value } = event.target.value;
        // const filterEmp = setEmployee.filter((employee) => 
        // employee.name.first.indexOf(value) > -1 );
        // setEmployee({ filterEmp })        

    }   
    
     
      
const HandleSubmit = e => {
          e.preventDefault();
            API.getUsers(employee)
              .then(res => setEmployee(res.data.results))
              .catch((err) => console.log(err));

      };
    
return (
        <div>
          <Wrapper>
      <Container className="mt-3 px-5">
       
        <Jumbotron /> 
        
        <form>
          <Container className="mt-3 px-5">
            <Row className="form-group">
            
                <input
                  className="form-control"
                  type="text"
                  aria-describedby="search"
                  name="nameSearch"
                  onChange={handleInputChange}
                /><Btn
                onClick={HandleSubmit}
                id="search"
                type="success"
                className="input-lg"
                >Search</Btn>  
                          
              
            </Row>    
        </Container>
        </form>
        
         
         <EmployeeList /> 
    
    </Container>
    </Wrapper>
       </div>
      
    );

};


export default Home ;
