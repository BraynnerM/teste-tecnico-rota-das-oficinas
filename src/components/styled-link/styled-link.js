import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;  
  width: 50vw;
  
  color:black;
  margin: 1vh;  
  font-size: 1.8vh;
  border-color: #000000;
  border: 0.4vh solid;
  border-radius: 1.5vh;
  box-shadow: 0 0 1vh rgba(25, 25, 25, 0.7); 
  padding: 2vh;
  &:hover {
  color: #eeeeee;
  background-color: #000000;
  transition: color  0.5s ease-in-out, background-color 0.4s ease-in-out;
  }
`;

export default StyledLink;
