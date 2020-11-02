import React, { useState, useEffect } from "react";
import API from '../utils/API'
import Container from '../components/Container';
import Row from '../components/Row';
import Btn from '../components/Btn';
import Jumbotron from '../components/Jumbotron';
import EmployeeList from '../components/EmployeeList';
import EmployeeListItem from '../components/EmployeeListItem'; 







const Home = () => {


    const [nameSearch, setNameSearch] = useState(''); 
    const [employee, setEmployee] = useState([]);
   
    useEffect(() => {
      loadNames()
    }, []); 

    function loadNames() {
      API.getUsers()
      .then(res => setEmployee(res.data.results))
      .catch((err) => console.log(err));
    }

    const handleInputChange = event => {
        const { value } = event.target;
        setNameSearch(value)

    }   
    
     
      
const HandleSubmit = e => {
          e.preventDefault();
          console.log("name is " + nameSearch);
            API.getUsers(nameSearch)
              .then(res => console.log(res.data.results))
              .catch((err) => console.log(err));
      };
    
return (
        <div>
      <Container className="mt-3 px-5">
       
        <Jumbotron /> 
        
        <form>
          <Container className="mt-3 px-5">
            <Row className="form-group">
            
                <input
                  className="form-control"
                  type="text"
                  value={nameSearch}
                  name="nameSearch"
                  onChange={handleInputChange}
                /><Btn
                onClick={HandleSubmit}
                type="success"
                className="input-lg"
                >Search</Btn>  
                          
              
            </Row>    
        </Container>
        </form>
        
          <Row size="xs-12">
           
            <EmployeeList>
              {employee.map(({name, email, picture, dob }, index ) => {
                return( 
                    <EmployeeListItem
                    key={index}
                    picture={picture}
                    name={name.first}
                    email={email}
                    dob={dob}
                    /> 
                )
              })}
              </EmployeeList>
              
            
             
            
        </Row>        
    </Container>
       </div>
      
    );

};


export default Home ;
