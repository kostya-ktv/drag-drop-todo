import { FC } from "react"
import styled, { css } from "styled-components"

type Props = {
   number?: number
   title: string
   color: string
}
const Component = styled.div<{backColor: string}>`
 ${({backColor}) => {
   return css`
   .wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      margin-top: 20px;
      .number {
         font-size: 26px;
         background-color: ${backColor  || "#606360"};
         border-radius: 50%;
         height: 30px;
         width: 30px;
         color: white;
         text-align: center;
         margin-right: 10px;
      }
   }
   `}}
  
   
`
export const NumberOnCircle:FC<Props> = ({number, title, color}) => {
   return (
      <Component backColor={color}>
         <div className="wrapper">
            <div className="number">{number}</div>
            <div className="title">{title}</div>
         </div>
      </Component>
   )
}