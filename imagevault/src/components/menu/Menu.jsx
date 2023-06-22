import React from 'react'
import { auth } from '../../firebase.js'

const Menu = ({ email }) => {
  return (
    <div>
      <h1>Signed in as {email}.</h1>
      <button onClick={auth.signOut.bind(auth)}>Sign Out?</button>
    </div>
  )
}

export default Menu