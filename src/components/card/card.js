import styled from "styled-components";

const Card = (props) => {
    return (
        <Section>{props.children}</Section>
    )
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;  
  width: 80vw;
  min-height:60vh;
  max-height: 70vh;
  border-color: #000000;
  border: 0.4vh solid;
  border-radius: 1.5vh; 
  background-color: #ffffff;
  box-shadow: 0 0 4vh rgba(0, 0, 0, 1.0); 
`;

export default Card;
