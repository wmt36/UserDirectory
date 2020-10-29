import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import API from '../utils/API'
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import Btn from '../components/Btn';
import Jumbotron from '../components/Jumbotron';




const Home = () => {


    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
   
    useEffect(() => {
        API.getUsers()
          .then((res) => console.log(res.data.results))
          .catch((err) => console.log(err));
      }, []);

    const handleInputChange = event => {
        const { value } = event.target;
        setName(value)

    }
    
     
      
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
        <Container>
        <Row className="form-group">
      
    
            <tr>
            <Col size="12">

     <table className="table table-striped table-dark" size='12'>
        <thead>
            <tr>
             <th scope="col">Picture</th>
             <th scope="col">Name</th>
             <th scope="col">E-mail</th>
             <th scope="col">D.O.B</th>
            </tr>
        </thead>
    <tbody>
            <tr>
             <th scope="row">1</th>
             <td>Mark</td>
             <td>Otto</td>
             <td>@mdo</td>
            </tr>
    </tbody>
    </table>
             </Col>
          </tr>
        
        
        </Row>        
      </Container>
      </div>
      
    );

};


export default Home ;
  