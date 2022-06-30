import React, { FC } from 'react'
import styled from 'styled-components'
import { TaskType } from '../../../../Store/types'
import Task  from './Task'

const Component = styled.div`
  transition: all 1s ease;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
`
type Props = {
  tasks: Array<TaskType>
}
const TaskList:FC<Props> = ({tasks}) => {

  return (
    <Component className='TaskList'>
      {tasks && tasks.length > 0 && 
         tasks.map((task, i) => 
            <Task 
              task={task} 
              key={`task${i}`}
            />
         )
      }
    </Component>
  )
}

export default TaskList