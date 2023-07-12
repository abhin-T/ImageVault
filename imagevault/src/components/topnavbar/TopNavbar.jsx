import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import ImageAdder from './imageAdder/ImageAdder.jsx';
import Popup from './imageAdder/Popup.jsx';
import Profile from './profile/Profile.jsx';
import Searchbar from './searchbar/Searchbar.jsx';
import './topnavbar.css'

const TopNavbar = ({ uid, profilePic, onImageAdded }) => {

    const [displayModal, setModalDisplay] = useState(false);
    const [error, setError] = useState("");

    const handleModalShow = () => setModalDisplay(true);
    const handleModalHide = () => {
        setModalDisplay(false);
        setError("");
    };

    return (
        <Container fluid className='m-0 p-0'>
            <Navbar bg="dark" variant="dark" fixed="top" className="topnav m-0 p-0">
            <Container fluid className="d-flex justify-content-between align-items-center m-0 p-0">
                <Profile profilePic={profilePic}/>
                <Searchbar/>
                <ImageAdder handleModalShow={handleModalShow}/>
            </Container>
            </Navbar>
            <Popup displayModal={displayModal} handleModalHide={handleModalHide} error={error} setError={setError} uid={uid} onImageAdded={onImageAdded}/>
        </Container>
    )
}

export default TopNavbar