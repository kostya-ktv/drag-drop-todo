import { FC } from "react";
import styled from "styled-components";
const Component = styled.div`
   position: absolute;  
   left: 50%;
   top: 50%;
   transform: translate(-25%, -25%);
`
export const EmptyList:FC = () => {
   return (
      <Component>
         <div>...👀</div>
      </Component>
   )
}