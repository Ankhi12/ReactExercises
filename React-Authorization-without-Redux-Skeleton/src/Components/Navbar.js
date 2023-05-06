import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Route} from 'react-router-dom'
import Login from "../Login";
import Register from "../Register";
import NavLink from 'react-bootstrap/esm/NavLink';
function NavbarComp(){
    return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="" bg="light">Authentication Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../Login">Login</Nav.Link>
            <Nav.Link href="../Register">Register</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default NavbarComp
