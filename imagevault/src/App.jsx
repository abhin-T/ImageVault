import React, { useState, useEffect } from 'react';
import Login from './components/login/Login.jsx'
import Menu from './components/menu/Menu.jsx'
import { auth } from './firebase.js'
import { updatePhoneNumber } from 'firebase/auth';

const App = () => {

  const [user, setUser] = useState(undefined)

  // sets up listener once component mounts
  useEffect(() =>
  {
    // checks for change in state of user
    auth.onAuthStateChanged(user =>
    {
      setUser(user && user.uid ? user : null)
    })
  }, [])

  // loading animation while getting user data 
  if ( user === undefined )
    return <h1>Loading...</h1>

  // user is logged in
  if ( user != null )
    return (<Menu email={user.email}/>)

  return (<Login/>)
}

export default App