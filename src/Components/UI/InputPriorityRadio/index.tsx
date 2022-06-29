import { FC, useState } from "react";
import styled, { css } from "styled-components";
type Props = {
   setValue: Function
}
const Component = styled.div`
   display: flex;
   flex-direction: column;
   .wrap{ 
      display: flex;
   }
`
const Button = styled.div<{active: boolean}>`
 ${({active}) => {
   return css`
      ${active ? "background-color: #2d506e;" : "background-color: #f2f0f0;" }
      ${active ? "color: #90c790;" : "color: #2b2a2a;" }
      padding: 15px 40px;
      border: 1px solid #dedddd;
      border-radius: 2px;
      cursor: pointer;
      margin: 10px;
   `}}
`
export const InputPriorityRadio:FC<Props> = ({setValue}) => {
   const [active, setActive] = useState<string>('');
   const handleClick = (val: string) => {
      setActive(val)
      setValue(val)
   }
   return (
      <Component>
         <label>Priority: </label>
         <div className="wrap">
            <Button className="Red btn" active={"Red" === active} onClick={() => handleClick("Red")}>Red</Button>
            <Button className="Cyan btn" active={"Cyan" === active} onClick={() => handleClick("Cyan")}>Cyan</Button>
            <Button className="Lime btn" active={"Lime" === active} onClick={() => handleClick("Lime")}>Lime</Button>
         </div>
         
      </Component>
   )
}