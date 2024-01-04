import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div>404 Not Found</div>
    <button><Link to = '/' >Homepage</Link></button>
    </>
  )
}

export default NotFound