import React from 'react';
import {Link} from "react-router-dom";
import {Navbar, Nav, Container,NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';

function Menu() {
  return (
<Navbar bg="light" expand="lg">
  <Container fluid>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to={"/"}>Головна</Nav.Link>
        <Nav.Link as={Link} to={"/about"}>Про нас</Nav.Link>
        <Nav.Link as={Link} to={"/projects"}>Проекти</Nav.Link>
        <NavDropdown title="Новини" id="navbarScrollingDropdown">
          <NavDropdown.Item as={Link} to={"/blog"}>Блог</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/reports"}>Звіти</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to={"/contacts"}>Контакти</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Пошук"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success"><SearchIcon/></Button>
        <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default Menu;