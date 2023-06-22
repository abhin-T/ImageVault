import React from 'react'
import { signIn } from '../../firebase.js'

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={signIn}>Sign In</button></div>
  )
}

export default Login