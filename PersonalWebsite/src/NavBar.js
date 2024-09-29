import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/AboutMePage">About Me</Nav.Link>
            <Nav.Link href="/InterestsPage">Interests</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;