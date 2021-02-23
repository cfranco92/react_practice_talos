import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavigationBar.module.css'

const NavegationBar = () => {
  const clases = styles
  
  const NavActive = {
    color: 'orangered'
  }

  return (
    <nav className={clases.navStyles}>
      {/* <NavLink
        to='/'
        exact
      > */}
        PokéApp
      {/* </NavLink> */}
      <NavLink
        to='/'
        activeClassName='navActive'
        activeStyle={NavActive}
      >
        Pokemons
      </NavLink>
      <NavLink
        to='/items'
        activeClassName='navActive'
      >
        Items
      </NavLink>
    </nav>
  )
}

export default NavegationBar