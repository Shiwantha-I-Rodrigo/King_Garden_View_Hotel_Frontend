import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { AuthConsumer } from "../../Components/Auth/AuthContext"

const Navbar = () => {
  const [click, setClick] = useState(false)

  // const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
          {/* <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div> */}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to='/' onClick={closeMobileMenu}>
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={closeMobileMenu}>
                <b>About us</b>
              </Link>
            </li>
            <li>
              <Link to='/gallery' onClick={closeMobileMenu}>
              <b>Gallery</b>
              </Link>
            </li>
            <li>
              <Link to='/rooms' onClick={closeMobileMenu}>
              <b>Rooms</b>
              </Link>
            </li>
            <li>
              <Link to='/messages' onClick={closeMobileMenu}>
              <b>Welcome</b>
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeMobileMenu}>
              <b>Contact Us</b>
              </Link>
            </li>
          </ul>

          <AuthConsumer>
            {({ isAuth, login, logout }) => (
              <div>
                {isAuth ? (

                  <div className='login-area flex'>
                    <li>
                      <Link to='/dashboard'>
                        <i class='far fa-chevron-right'></i><b>Dashboard</b>
                      </Link>
                    </li>
                    <li>
                      <Link to='/profile'>
                        <i class='far fa-chevron-right'></i><b>Profile</b>
                      </Link>
                    </li>
                    <li>
                      <Link to='/stats'>
                        <i class='far fa-chevron-right'></i><b>Stats</b>
                      </Link>
                    </li>
                    <li>
                    <Link to='/sign-in'>
                      <button className='tertiary-btn' onClick={logout}><b>Logout</b></button>
                    </Link>
                    </li>
                  </div>

                ) : (

                  <div className='login-area flex'>
                    <li>
                      <Link to='/sign-in'>
                        <i class='far fa-chevron-right'></i><b>Sign-In</b>
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>
                        <button className='primary-btn'><b>Register</b></button>
                      </Link>
                    </li>
                  </div>

                )}
              </div>
            )}
          </AuthConsumer>

        </div>
      </nav>

      <header>
        <div className='container flex_space'>
          <div className='logo'>
            <img src="/images/navbar/logo.png" alt='' height="60" />
          </div>

          <div className='contact flex_space '>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fal fa-clock'></i>
              </div>
              <div className='text'>
                <h4>Working Hours</h4>
                <Link to='/contact'>Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fas fa-phone-volume'></i>
              </div>
              <div className='text'>
                <h4>Call Us</h4>
                <Link to='/contact'>+011 123 4567</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='far fa-envelope'></i>
              </div>
              <div className='text'>
                <h4>Mail Us</h4>
                <Link to='/contact'>info@exampal.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
