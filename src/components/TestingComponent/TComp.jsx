import React, {useState, useEffect} from 'react'
import Register from '../Register/Register';
import { Form, Button, h1 } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {createUser} from "../../actions/users";
import {Container, Paper} from '@material-ui/core';
//Importing Custom Style Sheet 
import styles from './style';

const Post = () => {
    const classes = styles();
    const dispatch = useDispatch();

    //Methods comes here.
    const [userData, setUserData] = useState(
        {
            firstName: '',
            lastName: ''
        }
    );

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userData);
       dispatch(createUser(userData));
    }


  return (
    <Container maxWidth={"sm"}>
      <Paper className={classes.paper}>
      <h3 className={classes.shape}>Login Form </h3>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>First Name: </Form.Label>
        <Form.Control type="text" placeholder="FirstName"

          value={userData.firstName}
          onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
          
        />
        <Form.Text

          className="text-muted"

        >
          We'll never share your email with anyone else.
            </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Last Name: </Form.Label>
        <Form.Control type="text" placeholder="LastName"
          value={userData.lastName}
          onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
        />
        <Form.Text

          className="text-muted"
        >
          We'll never share your email with anyone else.
            </Form.Text>

      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
          </Button>
    </Form>
    </Paper>
    </Container>
  
  )
         
}

export default Post;