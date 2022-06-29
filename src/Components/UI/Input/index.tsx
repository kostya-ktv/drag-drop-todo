import { FC } from "react"
import styled from "styled-components"
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
   
`
type Props = {
   label: string
}
export const Input:FC<Props> = ({label}) => {
   return (
      <Component>
         <label htmlFor="input-text" className="input-label">{label}:</label>
         <input type="text" id="input-text" required className="input-text" autoComplete="off"/>
      </Component>
   )
}