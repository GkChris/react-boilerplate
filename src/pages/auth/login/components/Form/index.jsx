import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { login, useAuthApi } from '../../../../../setup/authentication/requests';


function LoginForm() {
  
  const authApi = useAuthApi();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here with email and password
    console.log('Email:', email);
    console.log('Password:', password);

    const credentials = {email, password};

    authApi.login(credentials).catch(err => console.error(err.response));
  };

  return (
    <Form id="login-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </Form.Group>

      {/* Additional form fields can be added here */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
