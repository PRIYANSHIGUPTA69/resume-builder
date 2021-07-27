import react from "react";
import { NavLink } from "react-router-dom";
import logo from "../static/logo.png"

export default function Header() {
  return (
    <header className="header">
  <nav className="nav">
    
        
     
        <a href="/" className="holder-logo">
          <img className='logo' src={logo} alt="" />
        </a>
        <div className="header-links full-height">
          <ul>
            <li className="signin ">
              <NavLink className="  " to="/">
                Logged in as
              </NavLink>
            </li>
            <li className="signin">
              <button className="text-blue btnv-3">
                Signout
              </button>
            </li>
          </ul>
          <ul id="nav-mid">
            <li>
            <NavLink className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
            </NavLink>
            </li> 
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/about-us">
              About Us
              </NavLink>
            </li>        
          </ul>
        </div>
      </nav>
    </header>
  );
}
