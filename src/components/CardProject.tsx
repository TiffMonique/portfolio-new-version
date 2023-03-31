import React from 'react'
import styled from 'styled-components'
import Button, { IButton } from './Button';

const buttonStyle: IButton = {
  fontSize: '14px',
  lineheight: '17px' ,
  background:'linear-gradient(263.55deg, #891DF5 44.92%, rgba(137, 29, 245, 0) 165.97%)' ,
  borderRadius: '3.05455px',
  padding: '13.7455px 28.2545px', 
  boxShadow: 'inset 0px 9.16364px 3.05455px rgba(251, 247, 255, 0.12), inset 0px 3.81818px 4.58182px rgba(255, 255, 255, 0.25)'
};
const Card = styled.div`
  position: relative;
  top: 150px;
  left: 40px;
  width: 405px;
  height: 172px;
  opacity: 0.7;
  padding-bottom: 32px;
  box-sizing: border-box;
  background: #231729;
  border: 2px solid rgba(200, 147, 252, 0.21);
  border-radius: 4px;
  cursor: pointer;

  .title{
    position: absolute;
    left: 24px;
    top: 32px;
    bottom: 111px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    overflow: hidden; // agregar un overflow para evitar que el texto se desborde
    text-overflow: ellipsis; // agregar puntos suspensivos si el texto se desborda
    white-space: nowrap; // evitar que el texto se divida en varias líneas
  }

  

  button{
    position: absolute;
    left: 24px;
    bottom: 24.51px;
  }
`;

export interface ICardProject { 
  children: React.ReactNode,
  className: string | string[],
  onClick: (index: number) => void,
  index: number
}

function CardProject({ children, className, onClick, index }:ICardProject) {
  const handleClick = () => {
    onClick(index);
  };

  return (
        <Card className={`card ${className}`} onClick={handleClick}>
            <div className="title">
            {children}
            </div>
            <Button buttonStyle={buttonStyle}>
            View Demo
            </Button>
        </Card>
  )
}

export default CardProject