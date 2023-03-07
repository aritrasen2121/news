import React from 'react'
import Layout from './Layout'
import { worldNews } from '../Data'

const World = () => {
  return (
    <>
      <Layout news={worldNews}/>
    </>
  )
}
export default World