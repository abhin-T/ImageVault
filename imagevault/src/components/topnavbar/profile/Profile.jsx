import React from 'react'
import { auth } from '../../../firebase';
import { Image, Dropdown } from 'react-bootstrap';

const Profile = ({ profilePic }) => {
  return (
    <Dropdown className='p-0 m-0 dropdownProfile'>
      <Dropdown.Toggle id="dropdown-basic" className='p-0 m-0 dropdownProfile'>
          <div className="image-wrapper d-flex justify-content-center align-items-center">
              <Image roundedCircle src={profilePic} alt="User Profile Picture" fluid className="profilePic" />
          </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
          <Dropdown.Item onClick={auth.signOut.bind(auth)}>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Profile