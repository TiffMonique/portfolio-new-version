import React from "react";
import styled from "styled-components";

function Nabvar() {
  // const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Nav>
      <div className="brand__container">
        <a href="#" className="brand">
          Monique Dev
        </a>
      </div>
      <div className="links">
        <ul>
          <li className="active">
            <a href="#Projects">Projects</a>
          </li>
          <li className="active">
           <a href="#About">About</a>
          </li>
          <li className="Contact">
            <a href="Contact">Contact</a>
            
          </li>
        </ul>
      </div>
    </Nav>

  )
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 12rem;
  padding-top: 2rem;
  color: #FFFFFF;
  .brand__container {
    margin: 0 2rem;
    .brand {
      text-decoration: none;
      position: absolute;
      width: 146px;
      height: 31px;
      left: 80px;
      top: 31px;
      font-family: 'Chakra Petch';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 31px;
      color: #FFFFFF;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      gap: 26px;
      position: absolute;
      width: 199px;
      height: 17px;
      right: 80px;
      top: 37px;
      li {
        a {
          text-decoration: none;
          width: 54px;
          height: 17px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: #FFFFFF;
        }
      }
    }
  }
  
`;
export default Nabvar
