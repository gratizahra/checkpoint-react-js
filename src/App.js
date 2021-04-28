import logo from './logo.svg';
import './App.css';
import { Button,NavDropdown,Form,FormControl,Navbar,Nav,Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
     
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<header className="App-header">
<h1 style={{color: "red",position:"center"}}>My first react app</h1>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<Image src="data:image/jpeg;base64,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" fluid />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dGcsHMXbSOA" width="400px"heigth="400px"
      />
      </header>
      <>
  <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
  <Button as="input" type="button" value="Input" />{' '}
  <Button as="input" type="submit" value="Submit" />{' '}
  <Button as="input" type="reset" value="Reset" />
</> 
    </div>
  );
}

export default App;
