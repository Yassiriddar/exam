import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return <>
  <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark vanbar">
            <ul >
                <li><NavLink to="/">accueil</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li> 
            </ul>
        </nav>
    </header>
  </>
}

export default Navbar


