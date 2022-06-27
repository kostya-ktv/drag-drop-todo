import React from 'react'
import styled from 'styled-components'
import logo from "../../Assets/youCanDoIt.png"
import info from "../../Assets/info.svg"
const Component = styled.div`
  position: relative;
  .greet-logo{ 
    filter: blur(0.5px);
    height: 400px;
  }
  .info {
    height: 30px;
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
`
const GreetingBox = () => {
  return (
    <Component>
      <img src={logo} className="greet-logo"/>
      <img src={info} className="info"/>
    </Component>
  )
}

export default GreetingBox