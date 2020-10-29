import React from 'react'
import Col from '../Col'
import Row from '../Row'
import Container from '../Container'
import { useEffect } from 'react'
import API from '../../utils/API'

  // listItem renders a bootstrap list item containing data from the employee api call
function List({ picture, name, email, dob }) {

    useEffect(() => {
        API.getUsers()
          .then((res) => console.log(res.data.results))
          .catch((err) => console.log(err));
      }, []);

return (
        <Container>
            <image image={picture}/>
            <ul>
                <li>
                    {name}
                </li>
                <li>
                    {email}
                </li>
                <li>
                    {dob}
                </li>
            </ul>
        </Container>
    )
};



  export default List