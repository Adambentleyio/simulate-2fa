import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
        <h2>Welcome aboard 🚢</h2>
        <p>You have been authenticated and successfully logged in</p>
        <Link to="/">Take me home</Link>
    </div>
  )
}

export default Welcome