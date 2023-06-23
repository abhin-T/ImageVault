import React, { useState, useEffect } from 'react';
import Login from './components/login/Login.jsx';
import Menu from './components/menu/Menu.jsx';
import { auth, db } from './firebase.js';
import { doc, getDoc, setDoc } from "firebase/firestore";

const App = () => {
  
  // Helper functions

  // adds new user to database
  const initUser = async (uid, user_email, user_name) => {
    await setDoc(doc(db, "users", uid), { email: user_email, username: user_name, images: []});
    setUsername(user_name)
  };

  // Variables
  const [user, setUser] = useState(undefined);
  const [username, setUsername] = useState(undefined);
  const [images, setImages] = useState(undefined)

  // adds listener to check for sign-ins and sign-outs
  useEffect(() => {
    const fetchData = async () => {
      auth.onAuthStateChanged(async (user) => {
        setUser(user && user.uid ? user : null);
        
        // checks if user is in database and if true,
        // retrieves user's data
        // otw, adds user to database
        if (user) {
          // so loading animation is shown while retrieving data from db
          setUsername("")
          setImages([])

          const docRef = doc(db, "users", user.uid);
          const userData = await getDoc(docRef);

          if (userData.exists()) {
            setUsername(userData.data().username);
            setImages(userData.data().images);
          } else {
            await initUser(user.uid, user.email, user.email.split("@")[0]);  // default username
          }
        }

      });
    };

    fetchData();
  }, []);

  // loading animation while getting user data 
  if ( user === undefined || username === "" || images === [] ) return <h1>Loading...</h1>

  // user is logged in
  if ( user != null ) {

    // TODO:
    // get all user data from db or add user info to db
    // send this data (ex: img urls) as a prop to Menu component
    // which will render the images and other things like settings

    return (<Menu username={username} images={images}/>)
  }

  return (<Login/>)
}

export default App