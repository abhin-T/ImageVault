import React, { useState } from 'react'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { db } from '../../../firebase';
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const Popup = ({ displayModal, handleModalHide, error, setError, uid, onImageAdded }) => {

    const [value, setValue] = useState("");

    const onInput = ({target:{value}}) => setValue(value);

    const addImg = async (e) => {
        e.preventDefault();

        if (!value) {
            setError("Image URL is required.");
            return;
        }

        // automatically refreshes images
        // without reading from database
        if (onImageAdded(value)) {  // if image was added successfully
            // adds image to db
            const docRef = doc(db, "users", uid);
            await updateDoc(docRef, {images: arrayUnion(value)});

            handleModalHide();
        } else {
            // error message for trying to add duplicate image
            setError("Image already exists in the account.");
        }
        setValue("")
    };

    return (
        <Modal show={displayModal} onHide={handleModalHide} centered className='popup'>
            <Modal.Body className='popup'>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={addImg}>
                    <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Enter URL"
                        onChange={onInput}
                        value={value}
                    />
                    </Form.Group>
                    <Button type='submit' variant="primary">
                        Add Image
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
  )
}

export default Popup