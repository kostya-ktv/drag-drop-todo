import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useProgressTasksSelector } from '../../../../Store/selectors/store.selectors';
import logo from '../../../../Assets/WORK.svg';
import TaskList from '../TaskList';
import { handleDragOver, handleDrop } from '../TaskList/Task/task.service';
import { EmptyList } from '../EmptyList';

type Props = {};
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
`;

const ProgressList = (props: Props) => {
  const dispatch = useDispatch();
  const { progressTasks } = useProgressTasksSelector();
  const onHandleDrop = (e: any) => {
    handleDrop(e, 'progressList', dispatch);
  };
  return (
    <Component onDrop={onHandleDrop} onDragOver={handleDragOver}>
      <img src={logo} className='logo' />

      {progressTasks.length > 0 ? <TaskList tasks={progressTasks} /> : <EmptyList />}
    </Component>
  );
};

export default ProgressList;
