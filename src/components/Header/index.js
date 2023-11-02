import React from 'react'
import { NavLink } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

/**
* @author
* @function Header
**/

export const Header = (props) => {
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/#">
           Student App
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/#">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/#">
                      Features
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/#">
                      Pricing
                    </NavLink>
                  </li>
                </ul>
                <NavLink className="btn btn-outline-info my-2 my-sm-0" to="/login">
                  Login
                </NavLink>
                <NavLink
                  className="btn btn-outline-info my-2 my-sm-0 ml-3"
                  to="/register"
                >
                  Register
                </NavLink>
              </div>
            </nav>
    </>
   )

 }