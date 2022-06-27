import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import logo from "../../Assets/WORK.svg"
import { useProgressTasksSelector } from '../../Store/selectors/store.selectors'
import TaskList from '../TaskList'
import { handleDragOver, handleDrop } from '../TaskList/Task/task.service'

type Props = {}
const Component = styled.div`
   width: 30%;
   position: relative;
   min-width: 300px;
   background-color: #ffa0a0;
   display: flex;
   flex-direction: column;
   .logo {
      filter: blur(0.7px);
      height: 100px;
   }
`

const ProgressList = (props: Props) => {
  const dispatch = useDispatch()
  const {progressTasks} = useProgressTasksSelector()
  const onHandleDrop = (e: any) => {
    handleDrop(e, "progressList", dispatch)
  }
  return (
    <Component
      onDrop={onHandleDrop}
      onDragOver={handleDragOver}
    >
      <img src={logo} className="logo"/>
      
      {progressTasks && 
        <TaskList tasks={progressTasks}/>
      }
    </Component>
  )
}

export default ProgressList