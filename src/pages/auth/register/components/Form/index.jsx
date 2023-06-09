import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { register } from '../../../../../setup/authentication/requests';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [phone, setPhone] = useState('');
  const [phone_code, setPhone_code] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlefirstnameChange = (e) => {
    setfirstname(e.target.value);
  };

  const handlelastnameChange = (e) => {
    setlastname(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePhone_codeChange = (e) => {
    setPhone_code(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    if (!username || !email || !password) {
      // Basic validation for required fields
      alert('Username, email, and password are required!');
      return;
    }

    if (password !== confirmPassword) {
      // Password validation: check if passwords match
      alert('Passwords do not match!');
      return;
    }

    if (phone && !phone_code) {
      // Phone code validation: check if phone code is provided when phone number is present
      alert('Phone code is required when phone number is provided!');
      return;
    }

    // Registration logic goes here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('First Name:', firstname);
    console.log('Last Name:', lastname);
    console.log('Phone:', phone);
    console.log('Phone Code:', phone_code);
    console.log('Password:', password);

    const payload = {username, email, password, firstname, lastname, phone, phone_code, password};

    register(payload);
  };

  return (
    <Form id="register-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address *</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicfirstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          value={firstname}
          onChange={handlefirstnameChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasiclastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          value={lastname}
          onChange={handlelastnameChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={handlePhoneChange}
        />
      </Form.Group>

      {phone && (
        <Form.Group className="mb-3" controlId="formBasicPhone_code">
          <Form.Label>Phone Code *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone code (Example: 30)"
            value={phone_code}
            onChange={handlePhone_codeChange}
            required={phone ? true : false}
          />
        </Form.Group>
      )}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password *</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password *</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default RegisterForm;
