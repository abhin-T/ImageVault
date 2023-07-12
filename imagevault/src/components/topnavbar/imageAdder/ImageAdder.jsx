import React from 'react'
import { Dropdown } from 'react-bootstrap'

const ImageAdder = ({ handleModalShow }) => {
  return (
    <Dropdown className='p-0 m-0 dropdownProfile' align='end'>
      <Dropdown.Toggle id="dropdown-basic" className='p-0 m-0 dropdownProfile d-flex align-items-center justify-content-center text-center p-0 pb-1'>
        +
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleModalShow}>Add Image Via URL</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default ImageAdder