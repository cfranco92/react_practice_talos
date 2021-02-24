import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import styles from './NavigationBar.module.css'

const NavegationBar = () => {
  const clases = styles

  const NavActive = {
    color: 'black'
  }

  return (
    <nav>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          {/* <NavLink
            to='/'
            exact
          > */}
            PokéApp
          {/* </NavLink> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink
                to='/'
                exact
                activeClassName={clases.navActive}
                activeStyle={NavActive}
                className={clases.linkColor}
              >
                Pokemons
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to='/items'
                activeClassName={clases.navActive}
                activeStyle={NavActive}
                className={clases.linkColor}
              >
                Items
              </NavLink>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}

export default NavegationBar