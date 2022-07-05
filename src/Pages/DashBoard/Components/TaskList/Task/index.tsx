import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Popup } from '../../../../../Common/Components/UI/Popup'
import { TaskType } from '../../../../../Store/types'
import { handleDragStart } from './task.service'

const Component = styled.div`
      display: flex;
      position: relative;
      background-color: rgba(255,255,255,0.3);
      z-index: 1;
      cursor: -webkit-grab;
      margin: 12px 8px;
      border-radius: 5px;
      padding: 8px 14px;
      transition: all .5s ease;
      flex-direction: column;
      &:hover {
         transform: translateY(-3px);
      }
      header {
         display: flex;
         justify-content: end;
         align-items: center;
         .count-down {
            font-size: 0.7rem;
         }
         .priority {
            height: 20px;
            width: 20px;
            border-radius: 50%;
         }
      }
   
   
`

type Props = {
   task: TaskType
}

const Task:FC<Props> = ({task}) => {
   const {expiredDate, priority, title, isExpired} = task
   const [isShowPopup, setIsShowPopup] = useState<boolean>(false)
   const showPopupClickHandler = () => {
      setIsShowPopup(!isShowPopup)
   }
  return (
   <Component
         draggable={true}
         className='Task'
         onDragStart={(e) => handleDragStart(e, task)}
         onClick={showPopupClickHandler}
      >
         <header>
            <span className='count-down'>{expiredDate}</span>
            <div className='priority' style={{backgroundColor: priority}}></div>
         </header>
         <h3>{title}</h3>
         {isShowPopup && <Popup/>}
    </Component>
  )
}

export default Task


