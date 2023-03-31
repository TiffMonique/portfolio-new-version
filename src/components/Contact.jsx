import React from 'react'
import styled from 'styled-components'
import email from '../assets/Vector 3.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import youtube from '../assets/youtube.svg'
import medium from '../assets/medium.svg'

const Footer = styled.div`
  position: absolute;
  width: 1439px;
  height: 511px;
  left: 0px;

  .email{
    position: absolute;
    width: 151.36px;
    height: 145.45px;
    left: 89px;
    top: 94.58px;
    background: #251E2A;
    border: 2px solid rgba(225, 197, 253, 0.35);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    transform: rotate(-4.39deg);
  }

  .socials{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 44px;
    gap: 8px;
    position: absolute;
    width: 360px;
    height: 75px;
    left: 998px;
    top: 190px;
    background: linear-gradient(268.65deg, rgba(48, 17, 59, 0.2) 32.37%, rgba(0, 0, 0, 0) 88.62%);
    border: 1px solid rgba(226, 77, 234, 0.21);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 272px;
    height: 35px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .what{
    position: absolute;
    width: 237px;
    height: 60px;
    left: 209px;
    top: 149px;
    font-family: 'Chakra Petch';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: #962929FW;
  }

  .like {
    position: absolute;
    width: 246px;
    height: 43px;
    left: 204px;
    top: 3446px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: #980606;
  }
  .contactme{
    position: absolute;
    width: 124px;
    height: 25px;
    left: 458px;
    top: 3449px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 135%;
    letter-spacing: 0.065em;
    color: #EA5DD6;
  }
`

function Contact() {
  return (
    <Footer>
      <img className='email' src={email} alt="email" />
      <div>
        <div className='what'>
        Now What ?
      </div>
      <div className='like'>
        Like what you see?
      </div>
      <div className='contactme'>
        Contact me
      </div >
      <div className='contact'>
        Contact me if you have a question or want to work together, I promise to reply as soon as I can!
      </div>
      </div>
      <div className="socials">
        <img className='github' src={github} alt="github" />
        <img className='youtube' src={youtube} alt="youtube" />
        <img className='Medium' src={medium} alt="medium" />
        <img className='linkedin' src={linkedin} alt="linkedin" />
      </div>
    </Footer>
  )
}

export default Contact
