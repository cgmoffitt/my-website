import React from 'react'
import { Link } from "gatsby"
import { NavLink } from 'react-router-dom'

const activeStyle = {
  backgroundColor: '#E4BA41'
}

export default function Navbar(){

  return (
    <nav className="z-10">
      <div className="relative right-0 z-10 flex flex-row justify-center md:justify-end raanan-reg text-lg md:text-2xl">
        <div>
            <Link to="/" className="nav-box w-24 md:w-32 h-24 text-white" to = '/' exact activeStyle={activeStyle}>
                About
            </Link>
        </div>
        <div>
            <Link to="/experience" className="nav-box w-24 md:w-32 h-24 text-white" to = '/experience' activeStyle={activeStyle}>
              Experience
            </Link>
        </div>
        <div>
            <Link to="/projects" className="nav-box w-24 md:w-32 h-24 text-white" to = '/projects' activeStyle={activeStyle}>
              Projects
            </Link>
        </div>
        <div>
            <Link to="/contacts" className="nav-box w-24 md:w-32 h-24 text-white" to = '/contact' activeStyle={activeStyle}>
              Contact
            </Link>
        </div>
      </div>
    </nav>
  )
}