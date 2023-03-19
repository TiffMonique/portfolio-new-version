import React from 'react'
import styled from "styled-components"

export interface IButton {
  fontSize: number | string,
  lineheight: number | string,
  background: string ,
  borderRadius: string,
  padding: string ,
  boxShadow: string 
}
interface ButtonProps {
  children: React.ReactNode;
  buttonStyle: IButton;
}

const StyledButton = styled.button<IButton>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineheight};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  box-shadow: ${(props) => props.boxShadow};

`;
function Button({ children, buttonStyle }: ButtonProps) {
  return (
    <StyledButton className="button" {...buttonStyle}>
      {children}
    </StyledButton>
  )
}

export default Button;
