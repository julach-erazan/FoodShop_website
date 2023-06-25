function Navbar() {
    return (
        <div className='navbar'>
        <div className='logo'>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
        </div>
        <div className='list'>
          <ul>
            <li><a href="/#">HOME</a></li>
            <li><a href="/#">MENU</a></li>
            <li><a href="/#">ABOUT</a></li>
            <li><a href="/#">CONTACT</a></li>
          </ul>
        </div>

        <div className='sign_or_register'></div>
        <div className='cart'></div>
      </div>
    );
}

export default Navbar;