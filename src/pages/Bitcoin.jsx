import React from 'react'
import Layout from './Layout'
import { bitcoinNews } from '../Data'

const Bitcoin = () => {
  return (
    <div>
      <Layout news={bitcoinNews} />
    </div>
  )
}

export default Bitcoin