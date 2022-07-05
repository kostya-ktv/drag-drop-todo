import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../../../Assets/youCanDoIt.png';
import info from '../../../../Assets/info.svg';
import add from '../../../../Assets/add.svg';
import CreateTask from '../CreateTask';
import { ModalCommon } from '../../../../Common/Components/UI/Modal';

const Component = styled.div`
  position: relative;
  .greet-logo {
    filter: blur(0.5px);
    height: 400px;
  }
  .btn-group {
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(-10px, -10px);
  }
  .info {
    height: 40px;
    cursor: pointer;
    animation: jump 2s infinite linear;
    @keyframes jump {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1) translateY(10px);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  .add {
    cursor: pointer;
    height: 40px;
    animation: draw 0.5s infinite linear;
    margin: 10px;
    @keyframes draw {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(-5deg);
      }
      75% {
        transform: rotate(5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;
const GreetingBox = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <Component>
      <img src={logo} className='greet-logo' />
      <div className='btn-group'>
        <img src={add} className='add' onClick={() => setShowModal(true)} />
        <img src={info} className='info' />
      </div>
      <ModalCommon
        setShow={setShowModal}
        show={showModal}
        maxModalWidth='500px'
      >
        <CreateTask onSubmit={() => setShowModal(false)}/>
      </ModalCommon>
    </Component>
  );
};

export default GreetingBox;
