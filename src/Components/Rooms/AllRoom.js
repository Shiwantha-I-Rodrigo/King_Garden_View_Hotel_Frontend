import React, { useState } from "react"
import "./RoomHome.css"
import RoomData from "./RoomData"
import RoomCard from "./RoomCard"

const AllRoom = () => {
  const [items] = useState(RoomData)
  return (
    <>
      <section className='room top'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <RoomCard key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllRoom
