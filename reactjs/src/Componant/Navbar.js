import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
      <header>
      <nav className='navbar'>
        <div className='logo'>
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
        </div>

        <div className='list'>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <li><a href="#aboutId">ABOUT</a></li>
            <li><a href="/#contactId">CONTACT</a></li>
          </ul>
        </div>

        <div className='sign_or_register'>
          <ul>
            <li><Link to="/signuppage">SignUp</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
        <div className='cart'></div>
      </nav>
    </header>
    );
}

export default Navbar;