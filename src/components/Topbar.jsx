import React from 'react';
import { Link } from 'react-router-dom'
import 'react-bootstrap-icons'
const Topbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top py-3 mb-2">
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand text-light" >
            Library
          </Link>
          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item ">
              <Link className="nav-link text-light" to={'/'}>
            <span>Books</span>
        </Link>
              </li>
              <li className="nav-item">
        <Link className="nav-link text-light" to={'/addbook'}>
            <span>Add Books</span>
        </Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link text-light" to={'/allbooks'}>
            <span>View All Books</span>
        </Link>
    </li>
   
            </ul>
            
          </div>
        </div>
      </nav>
    )
}

export default Topbar