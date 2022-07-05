import React, { FC, useEffect } from "react";
import styled from "styled-components";

const Component = styled.div`
   top: 0;  
   left: 0;
   .pop-box {
      height: 50px;
      width: 50px;
      background-color: rgba(255, 255, 255, .7);
      border-radius: 50%;
   }
`
type Props = {
}
export const Popup:FC<Props> = (props) => {
   return (
      <Component className="PopUp">
         <div className="pop-box"></div>
      </Component>
   )
} 