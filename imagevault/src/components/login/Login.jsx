import React from 'react';
import { signIn } from '../../firebase.js';
import { Container, Row, Col } from 'react-bootstrap';
import './login.css';

const Login = () => {
  return (
    <Container fluid className='text-center justify-content-center align-items-center h-100'>
      <Row className='d-flex align-items-center h-100 pb-5'>
        <Col>
          <h1 className='pb-3'>ImageVault</h1>
          <button type="button" className="login-with-google-btn" onClick={signIn} >Sign in with Google</button>
        </Col>
      </Row>
    </Container>
  )
}

export default Login