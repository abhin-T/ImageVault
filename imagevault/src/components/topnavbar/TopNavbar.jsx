import React, { useState } from 'react';
import { Container, Navbar, FormControl, Button, Image, Dropdown, Modal, Form } from 'react-bootstrap';
import { auth, db } from '../../firebase';
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import './topnavbar.css'

const TopNavbar = ({ uid, profilePic }) => {

    const [displayModal, setModalDisplay] = useState(false);
    const [value, setValue] = useState("");

    const handleModalShow = () => setModalDisplay(true);
    const handleModalHide = () => setModalDisplay(false);
    
    const onInput = ({target:{value}}) => setValue(value);
    
    const addImg = async (e) => {
        e.preventDefault();

        // TODO: automatically refreshes images
        // without reading from database

        // adds image to db
        const docRef = doc(db, "users", uid);
        await updateDoc(docRef, {images: arrayUnion(value)});

        setValue("")
        handleModalHide();
    }

    return (
        <Container fluid className='m-0 p-0'>
            <Navbar bg="dark" variant="dark" fixed="top" className="topnav m-0 p-0">
            <Container fluid className="d-flex justify-content-between align-items-center m-0 p-0">

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

                <FormControl type="text" placeholder="Search" className="searchbar" />

                <Dropdown className='p-0 m-0 dropdownProfile' align='end'>
                    <Dropdown.Toggle id="dropdown-basic" className='p-0 m-0 dropdownProfile d-flex align-items-center justify-content-center text-center p-0 pb-1'>
                        +
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleModalShow}>Add Image Via URL</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </Container>
            </Navbar>

            <Modal show={displayModal} onHide={handleModalHide} centered className='popup'>
                <Modal.Body className='popup'>
                    <Form onSubmit={addImg}>
                        <Form.Group className="mb-3">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter URL"
                            onChange={onInput}
                            value={value}
                            autoFocus
                        />
                        </Form.Group>
                        <Button type='submit' variant="primary">
                            Add Image
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </Container>
    )
}

export default TopNavbar