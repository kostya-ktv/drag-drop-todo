import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../../../../Assets/youCanDoIt.png"
import info from "../../../../Assets/info.svg"
import add from "../../../../Assets/add.svg"
import CreateTask from '../CreateTask'
import { ModalCommon } from '../../../../Common/Components/UI/Modal'

const Component = styled.div`
  position: relative;
  .greet-logo{ 
    filter: blur(0.5px);
    height: 400px;
  }
  .info {
    height: 40px;
    cursor: pointer;
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
  .add {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    height: 40px;
    left: 20px;
  }
`
const GreetingBox = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <Component>
      <img src={logo} className="greet-logo"/>
      <img src={add} className="add" onClick={() => setShowModal(true)}/>
      <img src={info} className="info"/>
      <ModalCommon setShow={setShowModal} show={showModal}>
        <CreateTask/>
      </ModalCommon>

    </Component>
  )
}

export default GreetingBox