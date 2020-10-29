import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import API from '../utils/API'
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import Btn from '../components/Btn';
import Jumbotron from '../components/Jumbotron';
import List from '../components/List';



const Home = () => {


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [dob, setDob] = useState();
    const [picture, setPicture] = useState();

    useEffect(() => {
        API.getUsers()
        .then(res => 
          setName(res.data.results)
        )
        .catch(err => console.log(err));
        
    },[])
    
     
      
const handleSubmit = e => {
          e.preventDefault();
          console.log("name is " + name);
    
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
                  placeholder="Serach by Name"
                  name="name"
                  onChange={e => setName(e.target.value)}
                />
              <Btn
                onClick={handleSubmit}
                type="success"
                className="input-lg"
                >Search</Btn>
              </Col>
            </Row>
    
        </Container>
        </form>
        <Container>
        <Row className="form-group">
      
        <table>
            <tr>
            <Col size="4">
        
             </Col>
          </tr>
        </table>
        
        </Row>        
      </Container>
      </div>
      
    );

};


export default Home ;
  