import React from 'react'
import Layout from './Layout'
import { homeNews } from '../Data'

const Home = () => {
  return (
    <>      
    <div>Latest news</div>
      <Layout news={homeNews}/>
    </>
  )
}

export default Home