import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useCompleteTasksSelector } from '../../../../Store/selectors/store.selectors'
import doneCheck from "../../../../Assets/done_check.svg"
import sunImg from "../../../../Assets/sun.svg"
import TaskList from '../TaskList'
import { handleDragOver, handleDrop } from '../TaskList/Task/task.service'

type Props = {}
const Component = styled.div`
   background-color: #479e4f;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 400px;
   margin-left: 30px;
   width: 100%;
   overflow: hidden;
  .done-check {
    margin-top: 15px;
    height: 60px;
  }
  .sun {
    position: absolute;
    height: 206px;
    margin-left: 200px;
    top: -20%;
  }
`
const CompleteList = (props: Props) => {
  const {completeTasks} = useCompleteTasksSelector()
  const dispatch = useDispatch()

  const onHandleDrop = (e: any) => {
    handleDrop(e, "completeList", dispatch)
  }
  return (
    <Component
      className='CompleteList'
      onDrop={onHandleDrop}
      onDragOver={handleDragOver}
    >
        <img src={doneCheck} className="done-check" alt='done-check'/>
        {completeTasks && 
          <TaskList tasks={completeTasks}/>
        }
        <img src={sunImg} className="sun" alt='sun'/>
    </Component>
  )
}

export default CompleteList