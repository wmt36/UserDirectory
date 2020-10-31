import React, { useState, useEffect } from "react";
import { render, Switch  } from "react-dom";
import API from '../utils/API'
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import Btn from '../components/Btn';
import Jumbotron from '../components/Jumbotron';
import { EmployeeList, EmployeeListItem } from '../components/List';







const Home = () => {


    const [nameSearch, setNameSearch] = useState('', false);
    const [employee, setEmployee] = useState([]);
   
    useEffect(() => {
      API.getUsers(employee)
        .then(res => setEmployee(res.data.results))
        .catch((err) => console.log(err));
    }, []);



    const handleInputChange = event => {
        const { value } = event.target;
        setNameSearch(value, true)

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
              <Col size="12">
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
                          
              </Col>
            </Row>    
        </Container>
        </form>
        
          <Col size="xs-12">
           
              {employee.map(users => {
                return(
                  <EmployeeList>
                    <EmployeeListItem>
                    picture={users.picture}
                    name={users.name}
                    email={users.email}
                    dob={users.dob}
                    </EmployeeListItem> 
                    </EmployeeList>
                )
              })}
              
           
             
            
        </Col>        
    </Container>
       </div>
      
    );

};


export default Home ;