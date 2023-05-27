import React from "react"

const Home = () => {

  return (
    <>
    <section className='main-slide-form'>
      <div className='slide-form'>
        <div className='container'>
          <h2>Enjoy Your Holiday and Relax</h2>
          <span>--at the--</span>
          <h1>King Garden View Hotel</h1>
          <form>
            <div className='flex_space'>
              <input type='date' placeholder='Check In' />
              <input type='date' placeholder='Check Out' />
            </div>
            <div className='flex_space'>
              <input type='number' placeholder='Adult(s)(18+)' />
              <input type='number' placeholder='Children(0- 17)' />
            </div>
            <input type='number' placeholder='Rooms' />
            <input type='Submit' value='Search' className='submit' />
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
