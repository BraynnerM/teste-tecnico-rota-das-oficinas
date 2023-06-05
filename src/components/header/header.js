import styled from "styled-components";
import headerImage from '../../images/header_image.jpg';

const Header = styled.header`    
  background-image: url(${ headerImage });
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 80vw;
  height: 20vh;
  margin-bottom: auto;
  border-radius: 0 0 1.5vh 1.5vh;
  box-shadow: 0 0 2vh rgba(0, 0, 0, 1.0); 
  @media (max-width: 480px) {
    background-size: 160%    
  }
`;

export default Header;
