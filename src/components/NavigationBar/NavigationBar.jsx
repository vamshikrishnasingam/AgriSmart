import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom'
import './NavigationBar.css'
function Navigationbar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} textColor="#fff" bg="" expand={expand} className="header mb-5 sticky-top">
          <Container fluid >
          <div className="header__brand">
              <a href="/" className='m-1 p-1'>
                <img src="media/logo.png" alt="" width="40" height="40"/>
              </a>
              </div>
              <Navbar.Brand><Link  to="/" className='nav-link m-2 text-white'>AgroSmart+</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-secondary"
            >
              <Offcanvas.Header closeButton backgroundColor="">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Details
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 text-white">
                  <Link  to="/Aboutus" className='nav-link text-white'>About</Link>
                  <Link  to="/Contactus" className='nav-link text-white'>Contact Us</Link>
                  <Link  to="/Support" className='nav-link text-white'>Support</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigationbar;