import React from 'react'
import {stories} from '../Data'
const Stories = () => {
  return (
    <div className='bg-slate-50 shadow-lg rounded-lg'>
        <p className="p-2">Top stories</p>
        {
            stories.map((ele) =>{
                return (
                    <div key={ele.number}>
                        <div className='p-2 text-sm hover:bg-slate-100'>{ele.text}</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Stories