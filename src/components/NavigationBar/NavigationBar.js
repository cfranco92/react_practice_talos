import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import styles from './NavigationBar.module.css'
import { addSearch } from '../../redux/actions/pokemonsActions'
import Toast from '../ToastComponent/ToastComponent'

const NavegationBar = ({ addSearch, originalPokemonsArray }) => {
  const input = useRef()

  const getInput = (inputEvent) => {
    addSearch(inputEvent.target.value, originalPokemonsArray)
  }

  return (
    <nav className={styles.navBar}>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>
          <NavLink
            to='/home'
            activeClassName={styles.navActive}
            className={styles.linkColor}
          >
            PokéApp
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link
              as={NavLink}
              to='/'
              exact
              activeClassName={styles.navActive}
              className={styles.linkColor}
            >
              Pokemons
            </Nav.Link>
            {/* <Nav.Link
              as={NavLink}
              to='/items'
              activeClassName={styles.navActive}
              className={styles.linkColor}
            >
              Items
            </Nav.Link> */}
          </Nav>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Search'
              onChange={getInput}
              ref={input}
              className='mr-sm-2'
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
    originalPokemonsArray: state.pokemons.originalPokemonsArray
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSearch: (search, originalPokemonsArray) => dispatch(
      addSearch(search, originalPokemonsArray)
    ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavegationBar)
