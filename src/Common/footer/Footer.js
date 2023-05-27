import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet consectetur adipiscing elit sed et eletum.</p>
            <br />
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet.</p>
            <div className='icon flex_space'>
              <a href='https://web.facebook.com/people/King-Garden-View-Hotel/100063108257390/'><img src="/images/social/fb.png" alt='' height="40"/></a>
              <a href='https://www.trip.com/hotels/badulla-hotel-detail-47516155/king-garden-view-hotelking-garden-view-hotel/ '><img src="/images/social/tr.png" alt='' height="40"/></a>
              <a href='https://www.tripadvisor.com/Hotel_Review-g3595802-d23177521-Reviews-King_Garden_View_Hotel-Welimada_Uva_Province.html'><img src="/images/social/ta.png" alt='' height="40"/></a>
              <a href='https://www.agoda.com/yoho-king-garden-view-hotel/hotel/welimada-lk.html'><img src="/images/social/ag.png" alt='' height="40"/></a>
              <a href='https://www.google.lk/travel/hotels/entity/ChoIto-yyPSFsc6kARoNL2cvMTFmNjYxYmJicxAB'><img src="/images/social/gg.png" alt='' height="40"/></a>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/rooms'>Rooms</Link>
              </li>
              <li>
                <Link to='/messages'>Welcome</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
