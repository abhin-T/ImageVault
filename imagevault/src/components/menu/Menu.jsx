import React from 'react';
import TopNavbar from '../topnavbar/TopNavbar.jsx';
import { Container, Image } from 'react-bootstrap';
import './menu.css';

const Menu = ({ uid, username, images, profilePic }) => { 

  const imageElements = images.map((image, index) => (
    <Image height='150px' width='150px' key={index} src={image} alt={`Image ${index}`} className='m-3' />
  ));

  return (
    <Container fluid className='h-100 m-0 p-0'>
      <TopNavbar uid={uid} profilePic={profilePic}/>
      <Container fluid className='middle-box m-0 px-0 d-flex flex-wrap'>
        {imageElements}
      </Container>
    </Container>
  )
}

export default Menu