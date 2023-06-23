import React from 'react';
import { auth } from '../../firebase.js';

const Menu = ({ username, images }) => { 

  const imageElements = images.map((image, index) => (
    <img key={index} src={image} alt={`Image ${index}`} />
  ));

  return (
    <div>
      <h1>Signed in as {username}.</h1>
      <button onClick={auth.signOut.bind(auth)}>Sign Out?</button>
      <div>{imageElements}</div>
    </div>
  )
}

export default Menu