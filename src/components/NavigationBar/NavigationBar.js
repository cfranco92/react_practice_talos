import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import styles from './NavigationBar.module.css'
import { addSearch } from '../../redux/actions/navBarActions'
import Toast from '../ToastComponent/ToastComponent'

const NavegationBar = ({ navBar, addSearch}) => {
  const clases = styles
  const input = useRef()

  const NavActive = {
    color: 'black'
  }

  const handleInput = (e) => {
    addSearch(e.target.value)
    console.log(input)
  }

  return (
    <nav className={clases.navBar}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <NavLink
            to='/home'
            activeClassName={clases.navActive}
            activeStyle={NavActive}
            className={clases.linkColor}
          >
            PokéApp
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={NavLink}
              to='/'
              exact
              activeClassName={clases.navActive}
              activeStyle={NavActive}
              className={clases.linkColor}
            >
              Pokemons
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/items'
              activeClassName={clases.navActive}
              activeStyle={NavActive}
              className={clases.linkColor}
            >
              Items
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              onChange={handleInput}
              ref={input}
              className="mr-sm-2"
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Toast />
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    navBar: state.navBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSearch: (search) => dispatch(addSearch(search)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavegationBar)