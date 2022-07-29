import React from "react";
import PropTypes from "prop-types";


const Navbar = (props) => {
  
    return (
      <div >
        <nav className={`navbar navbar-expand-lg bg-${props.mode} border border-${props.mode==="dark"?"white":"dark"}`}>
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
          <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <a className="nav-link active " aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About Us</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
              
              </li> */}
             
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2 mx-5"   type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger mx-2" type="submit">Search</button>
            </form> */}
          <button type="button" className={`btn btn-${props.mode}  `} onClick={props.togglemode}>{props.btntext}</button>
          </div>
        </div>
      </nav>
      </div>
    );
};

export default Navbar;

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string,
};
Navbar.defaultProps = {
    title: "Text Analyzer",
  
};
