import { FC, ReactNode, useEffect, useState } from "react";
import x from "../../../Assets/close.svg";
import styled, { css } from "styled-components";
 
interface Props {
   show?: boolean;
   setShow?: Function;
   maxModalWidth?: string;
   children: ReactNode
}
 
const Fade = styled.div`
   width: 100vw;
   height: 100vh;
   top: 0;
   right: 0;
   position: fixed;
   background-color: rgba(0,0,0,0.3);
   z-index: 9999999;
   animation: fade .3s ease;
   display: flex;
   justify-content: center;
   align-items: center;
   .close {
      opacity: 0;
      animation: slideDown .8s ease;
   }
   @keyframes slideDown {
      0% {opacity: 1;transform: translateY(0%);}
      100% {opacity: 0;transform: translateY(100%);}
   }
 `;
   const FormBox = styled.div<Props>`
   ${(props: Props) => {
      return css`
      position: absolute;
      background-color: white;
      max-width: ${props.maxModalWidth || "704px"};
      animation: slideFromTop .8s ease;
      img {
         position: absolute;
         top: 33px;
         right: 36px;
         cursor: pointer;
         height: 20px;
         transition: all .3s ease;
         &:hover {
            transform: rotate(180deg);
         }
      }  
      @keyframes slideFromTop{
         0% {opacity: 0;transform: translateY(-50%);}
         100% {opacity: 1;transform: translateY(0%);}
      }
     `;
   }}
 `;
 
export const ModalCommon:FC<Props> = (props) => {
   const {show, children, setShow } = props;
   const [showModalState, setShowModalState] = useState<boolean>(false);
   const [isClosing, setIsClosing] = useState<boolean>(false);
 
   const closingHandler = () => {
      setIsClosing(true)
      setTimeout(() => {
         setShowModalState(false)
         setIsClosing(false)
         setShow && setShow(false)
      },500)
   }
 
   useEffect(() => show === true ? setShowModalState(show) : closingHandler(),[show])
   
   return showModalState ? (
   <Fade>
      <FormBox {...props} className={isClosing ? "close" : ''}>
         {children}
         <img src={x} onClick={closingHandler} alt="X"/>
      </FormBox>
   </Fade>
   ) : null
}
