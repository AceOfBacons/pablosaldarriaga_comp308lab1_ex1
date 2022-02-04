import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import auth  from '../authorization/auth';
import './Login.css';
import { Button, FormGrou, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login(props) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 
  const handleSubmit = e => {
    e.preventDefault();
    auth.onAuthentication();
    auth.saveToken(email);
    props.history.push('/comment');
    
  };
    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <Container>
                <Form onSubmit={handleSubmit}>
                  
                    <Form.Group className='mb-3'>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" placeholder='something@mail.com' onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                    <Button type="submit">Submit</Button>
                    </Form.Group>
      </Form>
      </Container>
      </div>
    )
  }
  
