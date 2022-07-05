import { FC, useState } from "react";
import styled from "styled-components";
import { PropsInput } from "../input.interface";

const Component = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 30px;
   .pick-date {
      margin: 5px 0 5px 0 !important;
   }
   .error-msg {
      color: red;
      font-size: 0.7rem;
      margin: 5px;
      min-height: 20px;
   }
`
interface Props extends PropsInput{
   title: string
}
export const InputDate:FC<Props> = ({title, onChange, value, isValidate}) => {
   const handleChange = (e: any) => {
      onChange(e.target.value)
   }
   return(
      <Component>
         <label>{title}</label>
         <input 
            type="datetime-local" 
            id="date" 
            className="pick-date" 
            value={value} 
            onChange={handleChange}
            min={new Date().toISOString().split(".")[0]}
         />

         <div className="error-msg">
         {!isValidate && "Date must be greater than current date and time"}
         </div>
      </Component>
   )
}