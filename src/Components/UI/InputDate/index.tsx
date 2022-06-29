import { FC } from "react";
import styled from "styled-components";

const Component = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 30px;
   .pick-date {
      margin: 5px 0 5px 0 !important;
   }
`
type Props = {
   title: string
}
export const InputDate:FC<Props> = ({title}) => {
   return(
      <Component>
         <label>{title}</label>
         <input type="datetime-local" id="date" className="pick-date"/>
      </Component>
   )
}