import React, { useState } from 'react';
import TopNavbar from '../topnavbar/TopNavbar.jsx';
import { Container, Image } from 'react-bootstrap';
import './menu.css';

const Menu = ({ uid, username, imagesFromDB, profilePic }) => {

  const [allImages, addImage] = useState(imagesFromDB);

  // add image to array of images
  const handleImageAdded = (newImage) => {
    // checks whether image already is part of user's collection
    if (!allImages.includes(newImage)) {
      addImage((prevImages) => [...prevImages, newImage]);
      return true;
    }
    return false;
  };

  // create image elements for each image in array
  const imageElements = allImages.map((image, index) => (
    <Image height='150px' width='150px' key={index} src={image} alt={`Image ${index}`} className='m-3' />
  ));

  return (
    <Container fluid className='h-100 m-0 p-0'>
      <TopNavbar uid={uid} profilePic={profilePic} onImageAdded={handleImageAdded}/>
      <Container fluid className='middle-box m-0 px-0 d-flex flex-wrap'>
        {imageElements}
      </Container>
    </Container>
  )
}

export default Menu