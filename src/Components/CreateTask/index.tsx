import { FC, useState } from "react"
import styled, { css } from "styled-components"
import { Button } from "../UI/Button"
import { Input } from "../UI/Input"
import { InputDate } from "../UI/InputDate"
import { InputPriorityRadio } from "../UI/InputPriorityRadio"
import { NumberOnCircle } from "../UI/NumberOnCircle"

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
   const [radioValue, setRadioValue] = useState<string>('')
   return(
      <Component>
         <NumberOnCircle number={1} title="Basic" color={radioValue}/>
         <Input label="Title"/>
         <InputDate title="Expired Date"/>
         <NumberOnCircle number={2} title="Other" color={radioValue}/>
         <InputPriorityRadio setValue={setRadioValue}/>
         <Button label="Submit" backColor={radioValue}/>
      </Component>
   )
}

export default CreateTask