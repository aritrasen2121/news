import React from 'react'
import { useLocation } from 'react-router-dom'
const DetailNews = () => {
  const location = useLocation()
  const element = location.state.ele
  return (
    <div className='mt-5 flex flex-col justify-center gap-5'>
      <div className="text-lg">{element.heading}</div>
      <img className='mx-20 m3-5' src={element.image} alt="" />
      <div>{element.subHeading}</div>
      <div>{element.topHeading}</div>
      {
        element.description.map((item) => {
          return (
            <div key={item.first} className='flex flex-col gap-3'>
            <div>{item.first}</div>
            <div>{item.second}</div>
            <div>{item.third}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default DetailNews