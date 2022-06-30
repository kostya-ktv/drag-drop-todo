import { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { PropsInput } from "../input.interface"
const Component = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   .input-text {
      width: 400px;
      padding: 10px;
      border: 1px solid black;
      border-radius: 4px;
      font: inherit;
      background-color: transparent;
      outline: 2px solid #d1c5fc;
   }

   .input-text:is(:focus, :valid){
      outline-color: #1a1852;
      
   }
   .input-label {
      margin-bottom: 3px;
   }
   .error-msg {
      color: red;
      font-size: 0.7rem;
      margin: 5px;
      min-height: 20px;
   }
   
`
interface Props extends PropsInput {
   label: string
}
export const Input:FC<Props> = ({label, onChange, value, isValidate}) => {
   const handleChange = (e: any) => {
      onChange(e.target.value)
   }
   return (
      <Component>
         <label htmlFor="input-text" className="input-label">{label}:</label>
         <input 
            type="text" 
            id="input-text" 
            required 
            className="input-text" 
            autoComplete="off"
            value={value}
            onChange={handleChange}
         />
         
         <div className="error-msg">
         {!isValidate && "Title must be more than 5 characters"}
         </div>
         
      </Component>
   )
}