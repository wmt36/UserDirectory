import React, { useState, useEffect } from "react";
import { render, Switch  } from "react-dom";
import API from '../utils/API'
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import Btn from '../components/Btn';
import Jumbotron from '../components/Jumbotron';






const Home = ({ picture, name, email, dob }) => {


    const [nameSearch, setNameSearch] = useState('');
    //const [dob, setDob] = useState('');
   
    useEffect(() => {
        API.getUsers()
          .then((res) => console.log(res.data.results))
          .catch((err) => console.log(err));
      }, []);
      

    const handleInputChange = event => {
        const { value } = event.target;
        setNameSearch(value)

    }
    
    
     
      
const handleSubmit = e => {
          e.preventDefault();
          console.log("name is " + nameSearch);
          API.getUsers()
          .then((res) => setNameSearch(res.data.results))
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
                onClick={handleSubmit}
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
                <tr>
                 <th scope="row"><image image={picture}/></th>
                 <td>{name}</td>
                 <td>{email}</td>
                 <td>{dob}</td>
                </tr>
            </tbody>
            </table>          
        </Col>        
    </Container>
       </div>
      
    );

};


export default Home ;
  