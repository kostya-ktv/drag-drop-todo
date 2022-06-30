import { FC } from "react";
import styled, { css } from "styled-components";

const Component = styled.div<
{
   backColor: string,
   isDisable?: boolean
}>`
 ${({backColor, isDisable}) => {
   return css`
      position: relative;
         .submit-btn {
            margin: 30px 0 5px 0;
            height: 40px;
            width: 100%;
            cursor: pointer;
            background-color: ${backColor || "#48bfee"}; 
            box-shadow: #919293 4px 4px 0px;
            border-radius: 8px;
            transition: all .3s ease;
            font-size: 1.1rem;
            ${!isDisable && css`
               &:active {
                  transform: translateY(4px) translateX(4px);
                  box-shadow: #595d5e 0px 0px 0pxx;
               }
               &:hover {
                  background-color: #d1effb;
               }
            `} 
         }
         .disabled-btn {
            background-color: #ababab;
            box-shadow: #919293 4px 4px 0px;
         }
   `}}
  
`
interface Props extends React.HTMLProps<HTMLButtonElement> {
   label: string
   backColor: string
}
export const Button:FC<Props> = ({label, backColor, disabled}) => {
   return(
      <Component backColor={backColor} isDisable={disabled}>
         <button 
            className={disabled ? "submit-btn disabled-btn" : "submit-btn"} 
            disabled={disabled}>
            {label}
         </button>
      </Component>
   )
}