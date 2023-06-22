import React, { useState, useEffect } from 'react';
import Login from './components/login/Login.jsx'
import Menu from './components/menu/Menu.jsx'
import { auth } from './firebase.js'

const App = () => {

  const [user, setUser] = useState(undefined)

  useEffect(() =>
  {
    auth.onAuthStateChanged(user =>
    {
      setUser(user && user.uid ? user : null)
    })
  }, [])

  if ( undefined === user )
    return <h1>Loading...</h1>

  if ( user != null )
    return (<Menu email={user.email}/>)

  return (<Login/>)
}

export default App