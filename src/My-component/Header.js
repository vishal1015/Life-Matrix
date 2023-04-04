import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Header(props) { //props is use to pass javascript object from parent component to child component 
    //in place of props we directly write component in bracket i.e., {title,...} but we will use it like props.title so that it is to know where we have use props.
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Header option */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="../">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="../schedule-task">Schedule-Task</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="../daily-task">Daily-Task</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="../graph">Graph</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="../matrix">Matrix</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="../contact-us">Contact-us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="../about">About</NavLink>
          </li>
        </ul>

        

        {/* Search bar */}
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  )
}

Header.propTypes={
    title: PropTypes.string                    // it is to tell that our title is string. Code will work without it also but we have use it because it useful during debugging.
}
