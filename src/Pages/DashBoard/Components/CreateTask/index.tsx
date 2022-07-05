import { FC, useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../../../../Common/Components/UI/Button';
import { Input } from '../../../../Common/Components/UI/Input';
import { InputDate } from '../../../../Common/Components/UI/InputDate';
import { InputPriorityRadio } from '../../../../Common/Components/UI/InputPriorityRadio';
import { NumberOnCircle } from '../../../../Common/Components/UI/NumberOnCircle';
import { useFetchData } from '../../../../Hooks/useFetchData';
import { TaskType } from '../../../../Store/types';
import { addToLocalStorage } from '../../../../Util/localStorage.service';
import { taskValidator } from '../../../../Util/task.validator';
import { generateUUID } from '../../../../Util/uuid.generator';

type Props = {
  onSubmit: Function;
};
const Component = styled.div`
  ${() => {
    return css`
      display: flex;
      flex-direction: column;
      padding: 30px;
      background-color: #f5f5f5;
      h2 {
        width: 18rem;
      }
      #date {
        height: 30px;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 1.1rem;
        color: #585858;
        border: 1px solid #b75dc9;
      }
    `;
  }}
`;
const CreateTask: FC<Props> = ({ onSubmit: closeModal }) => {
  const [setIsFetching] = useFetchD
  .ata();
  const [priorityColor, setPriorityColor] = useState<string>('');
  const [expiredDate, setExpiredDate] = useState<string>('');
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [[isDateValidate, isTitleValidate, isFormValidate], setIsFormValidate] =
    useState<Array<boolean>>([false, false, false]);

  useEffect(() => {
    const { dateValidate, titleValidate } = taskValidator(
      taskTitle,
      expiredDate
    );
    setIsFormValidate([
      dateValidate,
      titleValidate,
      dateValidate && titleValidate,
    ]);
  }, [taskTitle, expiredDate]);

  const submitTask = () => {
    if (isFormValidate) {

      const Task: TaskType = {
        expiredDate: expiredDate,
        id: generateUUID(),
        title: taskTitle,
        priority: priorityColor,
        type: 'progress',
        isExpired: false,
      };
      addToLocalStorage(Task);
      setIsFetching(true)
      closeModal();
    }
  };

  return (
    <Component>
      <h2>{taskTitle || 'New task'}</h2>
      <NumberOnCircle number={1} title='Basic' color={priorityColor} />
      <Input
        label='Title'
        value={taskTitle}
        isValidate={isTitleValidate}
        onChange={setTaskTitle}
      />
      <InputDate
        title='Expired Date'
        onChange={setExpiredDate}
        value={expiredDate}
        isValidate={isDateValidate}
      />
      <NumberOnCircle number={2} title='Other' color={priorityColor} />
      <InputPriorityRadio setValue={setPriorityColor} />
      <Button
        label='Submit'
        backColor={priorityColor}
        disabled={!isFormValidate}
        onClick={submitTask}
      />
    </Component>
  );
};

export default CreateTask;
