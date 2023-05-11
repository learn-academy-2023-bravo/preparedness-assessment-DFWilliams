import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {

  const [userName, setUserName] = useState(" ")

  const handleChange = (e) => {
    setUserName(e.target.value)
  }

  const [showModal, setShowModal] = useState(false)

  const handleToggle = () => {
    setShowModal(!showModal)
  }
  
  const handleReset = () => {
    setUserName(" ")
  }

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label className="label" for="name">Enter your name</Label>
          <Input className="textfield" value={userName} onChange={handleChange}/>
        </div>
        <div className="button">
          <Button className="clickMe" onClick={handleToggle}>Click Me</Button>
          <Button className="clickMe" onClick={handleReset}>Reset</Button>
        </div>
        <ModalComponent userName={userName} handleToggle={handleToggle} showModal={showModal}/>
      </div>
    </div>
  )
}

export default App
