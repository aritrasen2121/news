import React from 'react'
import Card from '../Components/Card'
import Stories from '../Components/Stories'

const Layout = ({news}) => {
  
  return (
    <>
    <div className='flex md:flex-row flex-col w-full gap-5'>
        <div className="w-full md:w-4/6">
            <div className="flex flex-col">
                <Card news={news}/>
            </div>
        </div>
        <div className="w-full md:w-2/6">
          <Stories />
        </div>
    </div>
    </>
  )
}

export default Layout