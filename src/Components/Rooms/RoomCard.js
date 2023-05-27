import React from "react"

const RoomCard = ({ item: { cover, title, para, catgeory, date } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={cover} alt='Gallery' />
        </div>

        <div className='category flex_space'>
          <span>{date}</span>
          <label>{catgeory}</label>
        </div>

        <div className='details'>
          <h3>{title}</h3>
          <p>{para}</p>
        </div>

      </div>
    </>
  )
}

export default RoomCard
