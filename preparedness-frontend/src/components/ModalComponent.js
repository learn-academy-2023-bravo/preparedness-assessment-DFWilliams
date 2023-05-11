import React from "react"
import { Modal, ModalHeader, ModalBody} from 'reactstrap'

const ModalComponent = ({userName , showModal, handleToggle}) => {
  // console.log({userName})
  return (
  <div>
      <Modal isOpen={showModal}>
        <ModalHeader toggle={handleToggle} className="modalHeader"> Hello there {userName} !</ModalHeader>
        
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalComponent
