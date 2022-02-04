import React, { useState, useEffect }  from 'react';
import auth  from '../authorization/auth';
import './Comment.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Comment(props) {

 
  const [comment, setComment] = useState();
  const [email, setEmail] = useState();
 // let loggedEmail = auth.getToken();

  //force uppercase for course code
 const[courseCode,setcourseCode]=useState('');
    const handleInput=(event)=>{
        event.preventDefault();
        setcourseCode(event.target.value);
          
    }
    const changeCase=(event)=>{
        event.preventDefault();
        setcourseCode(event.target.value.toUpperCase());
    }

  useEffect(() => {
    const loggedInUser = auth.getToken();
   
  //  setEmail(loggedInUser);
   if (loggedInUser!=="") {
        setEmail(loggedInUser);
    }
},[]);
 
  const handleSubmit = e => {
    e.preventDefault();
   // auth.onAuthentication();
    props.history.push('/result');
    auth.saveComments(comment);
    
  };
  
    return(
        <div className="comment-wrapper">
        <h1 className='main-h1'>Enter Your Comments</h1>
        <Container>
        <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" defaultValue ={email} disabled = {true}/>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Course Code</Form.Label>
          <Form.Control type='text' name='courseCode' id="courseCode" value={courseCode} onChange={handleInput} onMouseEnter={changeCase}></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Course Name</Form.Label>
          <Form.Control type='text'></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Strongest Related Skill</Form.Label>
          <Form.Control type='text'></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Favorite Topic</Form.Label>
          <Form.Control type='text'></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'> 
        <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" onChange={e => setComment(e.target.value)} rows={5}/>
        </Form.Group> 

        <Form.Group className='mb-3'> 

          <Button type="submit">Submit</Button>
        </Form.Group> 
        </Form>
        </Container>
      </div>
    )
  }
  