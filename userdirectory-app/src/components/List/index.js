import { useEffect, useState } from "react";
import Container from '../Container';
import Col from '../Col';
import Row from '../Row';
import API from '../../utils/API';

function List() {




    
    const [pic, setPic] = useState();

    useEffect(() => {
        API.getUsers()
        .then(res => setPic(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
    <Container fluid>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Pictures</h1>
            <p>
              {pic.picture}
            </p>
          </article>
        </Col>
      </Row>
    </Container>
  );
}


export default List;