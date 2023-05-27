import React from "react"
import Card from "./Card"
import Tdata from "./Tdata"
import "./Messages.css"

const AllItem = () => {
  return (
    <>
      <section className='Messages mtop'>
        <div className='container grid1'>
          {Tdata.map((value, index) => {
            return <Card key={index} {...value} />
          })}
        </div>
      </section>
    </>
  )
}

export default AllItem
