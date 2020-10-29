import React, { useState, useEffect } from "react";
import { render, Switch  } from "react-dom";
import API from '../utils/API'
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import Btn from '../components/Btn';
import Jumbotron from '../components/Jumbotron';
import List from '../components/List';





const Home = () => {


    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
   
    useEffect(() => {
        API.getUsers()
          .then((res) => console.log(res.data.results))
          .catch((err) => console.log(err));
      }, []);
      

    const handleInputChange = event => {
        const {name, value } = event.target;
        setName(value)

    }
    
    
     
      
const handleSubmit = e => {
          e.preventDefault();
          console.log("name is " + name);
          API.getUsers()
          .then((res) => setName(res.data.results))
          .catch((err) => console.log(err));
          
    
        };
    
return (
        <div>
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
                  value={name}
                  name="name"
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
    
    
       </div>
      
    );

};


export default Home ;
  