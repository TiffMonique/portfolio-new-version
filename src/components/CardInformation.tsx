import React from 'react'
import styled from 'styled-components';

export interface ICardInformation {
  imageSrc: string,
  imageAlt: string;
  title: string | string[];
  subtitle: string | string[];
  paragraph: string | string[];
  listItems: string[];
}

const Information = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 703px;
  height: 1037px;
  left: 684px;
  bottom: -98px;
  background: #1d1322;
  border-radius: 0px;

  .info {
      position:relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      top: 404px;
      left: 40px;
      gap: 12px;
  }

  .title h1 {
    font-family: "Chakra Petch";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    color: #ffffff;
    
  }

  .parragraph p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #e7e7e7;
    width: 596px;
    
  }

  .subtitle h2 {
    font-family: "Chakra Petch";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    color: #ffffff;
    
  }

  .list ul {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #e7e7e7;
    list-style: none;
    
  }

  img {
    position: absolute;
    width: 628px;
    height: 326px;
    left: 40px;
    top: 45px;
    border-radius: 4px;
    margin-bottom: 32px;
  }
`;
function CardInformation(props: ICardInformation) {
  const { imageSrc, title, subtitle, paragraph, listItems } = props;
  return (
    <Information>
      <img src={imageSrc} alt="Imagen project" />
      <div className="info">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="parragraph">
          <p>{paragraph}</p>
        </div>
        <div className="subtitle">
          <h2>{subtitle}</h2>
        </div>
        <div className="list">
          {listItems && (
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Information>
  )
}

export default CardInformation
