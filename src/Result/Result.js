import React, { useState, useEffect }  from 'react';
import auth  from '../authorization/auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row } from 'react-bootstrap';

export default function Result() {

  const [comment, setComment] = useState();
  const [email, setEmail] = useState();


  useEffect(() => {
    const loggedInUser = auth.getToken();
    const sentComments = auth.getComments();
   
  //  setEmail(loggedInUser);
   if (loggedInUser!=="") {
        setEmail(loggedInUser);
        setComment(sentComments);
    }
  },[]);

  return(
    <Container fluid="md" className='mt-3'>
      <Row>
      <Col></Col>
      <Col xs={6}>
        <h2>Thank you {email}!</h2>
        <h4>We have saved your comments: {comment}</h4>
      </Col>
      <Col></Col>
      </Row>
    </Container>

  );
}