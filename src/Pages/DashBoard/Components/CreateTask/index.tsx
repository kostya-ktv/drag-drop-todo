import { FC, useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { Button } from "../../../../Common/Components/UI/Button"
import { Input } from "../../../../Common/Components/UI/Input"
import { InputDate } from "../../../../Common/Components/UI/InputDate"
import { InputPriorityRadio } from "../../../../Common/Components/UI/InputPriorityRadio"
import { NumberOnCircle } from "../../../../Common/Components/UI/NumberOnCircle"
import { taskValidator } from "../../../../Util/task.validator"

type Props = {}
const Component = styled.div`
 ${() => {
   return css`
      display: flex;
      flex-direction: column;
      padding: 30px;
      background-color: #f5f5f5;
      #date {
         height: 30px;
         margin-top: 20px;
         margin-bottom: 20px;
         font-size: 1.1rem;
         color: #585858;
         border: 1px solid #b75dc9;
      }
      
   `}}
`
const CreateTask:FC<Props> = () => {
   const [priorityColor, setPriorityColor] = useState<string>('')
   const [expiredDate, setExpiredDate] = useState<string>('')
   const [taskTitle, setTaskTitle] = useState<string>('')
   const [[dateValidate, titleValidate, isFormValidate], setIsFormValidate] = useState<Array<boolean>>([false,false,false])

   useEffect(() => {
      const {dateValidate, titleValidate} = taskValidator(taskTitle, expiredDate)
      setIsFormValidate([dateValidate, titleValidate, dateValidate && titleValidate])
   },[taskTitle, expiredDate])
   return(
      <Component>
         <h2>New task</h2>
         <NumberOnCircle 
            number={1} 
            title="Basic" 
            color={priorityColor}
         />
         <Input 
            label="Title" 
            value={taskTitle} 
            isValidate={titleValidate}
            onChange={setTaskTitle}
         />
         <InputDate 
            title="Expired Date" 
            onChange={setExpiredDate} 
            value={expiredDate}
            isValidate={dateValidate}
         />
         <NumberOnCircle 
            number={2} 
            title="Other" 
            color={priorityColor}
         />
         <InputPriorityRadio 
            setValue={setPriorityColor}
         />
         <Button 
            label="Submit" 
            backColor={priorityColor} 
            disabled={!isFormValidate}
         />
      </Component>
   )
}

export default CreateTask