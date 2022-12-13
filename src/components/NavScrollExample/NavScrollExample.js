
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './NavScrollExample.css'
import { useState } from 'react';
function NavScrollExample() {


  const [foodState, setFoodState] = useState("dumpling");

  return (
    <Navbar bg="white" expand="lg" className='border'>
      <Container>
        <NavLink to={'/'} className='logo fw-bolder'>Faucets</NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>

          <select
            className="custom-select"
            value={foodState}
            onChange={(e) => {
              const selectedFood = e.target.value;
              setFoodState(selectedFood);
            }}
          >
            <option value="Arbitrum Rinkeby">Arbitrum Rinkeby</option>
            <option value="Avalanche Fuji">Avalanche Fuji</option>
            <option value="BNB Chain Testnet">BNB Chain Testnet</option>
            <option value="Ethereum Rinkeby">Ethereum Rinkeby</option>
            <option value="Fantom Testnet">Fantom Testnet</option>
            <option value="Harmony Testnet">Harmony Testnet</option>
            <option value="POA Network Sokol">POA Network Sokol</option>
            <option value="Polygon Mumbai">Polygon Mumbai</option>
          </select>


          <Nav.Link className='p-2'>
            Connect Wallet
          </Nav.Link>
          <NavLink to={'/faq'} className='p-2 text-decoration-none text-black'>Faq
          </NavLink>

          <NavLink to={'/login'} className='p-2 text-decoration-none text-black'>Login
          </NavLink>
          <NavLink to={'/signup'} className='p-2 text-decoration-none text-black'>SignUp
          </NavLink>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;