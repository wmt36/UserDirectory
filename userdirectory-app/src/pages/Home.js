import React, { useState, useEffect } from "react";
import { render, Switch  } from "react-dom";
import API from '../utils/API'
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import Btn from '../components/Btn';
import Jumbotron from '../components/Jumbotron';






const Home = () => {


    const [nameSearch, setNameSearch] = useState('');
   
 

    const handleInputChange = event => {
        const { value } = event.target;
        setNameSearch(value)

    }
    
    useEffect(() => {
      API.getUsers()
        .then((res) => console.log(res.data.results))
        .catch((err) => console.log(err));
    }, []);
    
     
      
const HandleSubmit = e => {
          e.preventDefault();
          console.log("name is " + nameSearch);
            API.getUsers(nameSearch)
              .then((res) => console.log(res.data.results))
              .catch((err) => console.log(err));
      };
    
return (
        <div>
             <Container className="mt-3 px-5">
        <div className="mt-12"> 
        <Jumbotron /> 
        </div>
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
             
        <table class="table table-dark">
            <thead>
                <tr>
                 <th scope="col">Pic</th>
                 <th scope="col">Name</th>
                 <th scope="col">Email</th>
                 <th scope="col">D.O.B</th>
                </tr>
            </thead>
            <tbody>
              {/* {nameSearch.map(users => {
                return (
                <tr>
                 <th scope="row"><img image={users.picture}/></th>
                 <td>{users.name}</td>
                 <td>{users.email}</td>
                 <td>{users.dob}</td>
                </tr>
                );
                })}; */}
            </tbody> 
            </table>          
        </Col>        
    </Container>
       </div>
      
    );

};


export default Home ;