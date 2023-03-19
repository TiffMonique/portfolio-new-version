import React from 'react'
import styled from "styled-components"
import Nabvar from './Nabvar';
import '../index.css'
import monique from "../assets/monique.png"
import Button, {IButton} from './Button';

const buttonStyle: IButton = {
  fontSize: '20px',
  lineheight: '24px' ,
  background:'linear-gradient(263.55deg, #891DF5 44.92%, rgba(137, 29, 245, 0) 165.97%)' ,
  borderRadius: '4px',
  padding: '15px 37px 18px', 
  boxShadow: 'inset 0px 12px 4px rgba(251, 247, 255, 0.12), inset 0px -9px 23px rgba(52, 14, 90, 0.88), inset 0px 5px 6px rgba(255, 255, 255, 0.25)'
};

const Section = styled.section`
  background-color: var(--primary-color);
  min-height: 100vh;
  position: relative;
  
  #hero {
    height: 100%;
     
  }
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding-left: 18rem;
    margin-top: 8rem;
    width: 60%;
     
    .title h1 {
    position: absolute;
    width: 536px;
    height: 114px;
    left: 80px;
    top: 167px;
    font-family: 'Chakra Petch';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 57px;
    color: #F7F6F7;

    }
    
    .body p {
      position: absolute;
      width: 678px;
      height: 91px;
      left: 82px;
      top: 295px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 160.52%;
      color: #D4D2D5;
    }
    
    .subTitle h4 {  
      position: absolute;
      width: 244px;
      height: 31px;
      left: 82px;
      top: 132px;
      font-family: 'Chakra Petch';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 31px;
      color: #EAEAEA;
    }
    
    img{
      position: absolute;
      left: 879.57px;
      top: 102px;
    }
    button{
      position: absolute;
      width: 206px;
      height: 57px;
      display: flex;
      flex-direction: row;
      cursor: pointer;
      left: 82px;
      top: 418px;
      gap: 8px;
    }
  }
  
 
`;

function Hero() {
  return (
    <Section id="hero">
      <Nabvar />
      <div className="content">
        <div className="subTitle">
          <h4>Hello, I’m Monique 👋</h4>
        </div>
        <div className="title">
          <h1>A RESULTS DRIVEN FRONTEND👩🏻‍💻DEVELOPER</h1>
        </div>
        <div className="body">
          <p>
            I specialize in delivering user-friendly interfaces with a strong background in both design and development. I’m able to create visually appealing and intuitive designs into functional and performant code. 
          </p>
        </div>
        <Button buttonStyle={buttonStyle}>
          Download CV
        </Button>
        <img src={monique} alt="Monique" />
      </div>
    </Section>
  )
}

export default Hero;
