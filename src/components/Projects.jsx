import React, { useState } from 'react'
import styled from 'styled-components'
import gridProjects from './../assets/gridProjects.svg'
import CardProject from './CardProject';
import CardInformation from './CardInformation';
import gta from './../assets/gta.png'
import petshouse from './../assets/petshouse.png'
import MobileApp from './../assets/MobileApp.png'


const Project = styled.section`
  .content{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    filter: drop-shadow(0px 19px 60px #1B151E);
  }

  .rectangle{
    box-sizing: border-box;
    display: flex;
    width: 1279px;
    height: 1112px;
    background: #211826;
    border: 1px solid rgba(218, 186, 250, 0.25);
    border-radius: 4px;
    top: 100px;
    position: relative;
    display: flex;
    flex-direction: column
  }
  .projects{ 
    width: 202px;
    height: 52px;
    left: 40px;
    top: 113px;
    font-family: 'Chakra Petch';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    background: linear-gradient(360deg, #B774FA 29.81%, rgba(255, 255, 255, 0) 41.35%), #FFFFFF;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 2px 3px 0px rgba(201, 126, 190, 0.25);
    position: relative;
  }
  .gridProjects{
    width: 100%;
    display: block;
  }
  .cards{
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.selected{
    background: linear-gradient(180deg, #370F4A 0%, rgba(63, 16, 86, 0) 100%);
    border: 2px solid #9B38FF;    
  }
 
`;
const Projects = () => {
  const cardData = [
    {
      imageSrc: MobileApp,
      title: 'Mobile App for Shopify',
      subtitle: 'Technologies used',
      paragraph:
        'Shopify Mobile App using React Native for seamless store management on-the-go. Monitor sales, fulfill orders, update products and manage customers from anywhere, anytime.',
      listItems: ['React Native', 'Redux'],
    },
    {
      imageSrc: petshouse,
      title: "Pet's house Web app",
      subtitle: 'Technologies used',
      paragraph:
        'Welcome to the Pet House, your one-stop destination for dog refuge and adoption. Our mission is to provide a loving and safe environment for dogs in need, while connecting them with their forever families. On our website, you will find a variety of dogs available for adoption, each with their unique personality and backstory. Our adoption process is simple and straightforward, designed to match the right dog with the right family.',
      listItems: ['React Native', 'Redux'],
    },
    {
      imageSrc: gta,
      title: 'Monique GTA',
      subtitle: 'Technologies used',
      paragraph:
        'a thrilling game where you play as Monique, a tech-savvy hero, fighting against the evil Java programming language. Engage in intense battles, use your coding skills to outsmart Java, and emerge victorious. Join the fight and experience the ultimate showdown between good and evil in the world of coding',
      listItems: ['React Native', 'Redux'],
    },
  ];
  const [selectedCard, setSelectedCard] = useState(cardData[0]);
  const handleCardClick = (index) => {
    setSelectedCard(index);
    {console.log(index)}
  };

  return (
    <Project id="projects">
      <div className="content">
        <div className="rectangle">
          <div className="projects">Projects</div>
          <div className="cards">
            {cardData.map((card) => (
              <CardProject
               key={card.title}
                onClick={() => handleCardClick(card)}
                className={selectedCard === card ? "selected" : ""}
              >
                {card.title}
              </CardProject>
            ))}
          </div>
        </div>
        <div className="rectangleright">
          <CardInformation {...selectedCard} />
        </div>
      </div>
      <img src={gridProjects} className="gridProjects" alt="Grid Divisor" />
    </Project>
  );
};


export default Projects;