import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
const NavComponent = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Contact Manager
          </Navbar.Brand>
          <Nav>
            <div className="d-flex justify-content-between">
              <Nav.Link as={NavLink} className="me-2" to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} className="me-2" to="/contacts">
                Contacts
              </Nav.Link>
              <Nav.Link as={NavLink} className="me-2" to="/add">
                Add Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavComponent;
