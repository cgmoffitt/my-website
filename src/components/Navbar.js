import React from 'react'
import { Link } from "gatsby"
import { NavLink } from 'react-router-dom'

const activeStyle = {
  backgroundColor: '#E4BA41'
}

export default function Navbar(){

  return (
    <nav className="z-10">
      <ul className="relative right-0 z-10 flex flex-row justify-end raanan-reg text-2xl">
        <li>
            <Link to="/" className="nav-box text-white" to = '/' exact activeStyle={activeStyle}>
                About
            </Link>
        </li>
        <li>
            <Link to="/experience" className="nav-box text-white" to = '/experience' activeStyle={activeStyle}>
              Experience
            </Link>
        </li>
        <li>
            <Link to="/projects" className="nav-box text-white" to = '/projects' activeStyle={activeStyle}>
              Projects
            </Link>
        </li>
        <li>
            <Link to="/contacts" className="nav-box text-white" to = '/contact' activeStyle={activeStyle}>
              Contact
            </Link>
        </li>
      </ul>
    </nav>
  )
}