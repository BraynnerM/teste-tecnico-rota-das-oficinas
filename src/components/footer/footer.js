import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const socialMediaLinks = [
    { icon: FaFacebookF, url: "https://www.facebook.com/BraynnerMarques" },
    { icon: FaTwitter, url: "https://twitter.com/BraynnerMarques" },
    { icon: FaInstagram, url: "https://www.instagram.com/braynner.m/" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/braynner-marques-ribeiro-de-oliveira-88142b256/" },
    { icon: FaGithub, url: "https://github.com/BraynnerM" }
  ];

  return (
    <StyledFooter>
      <SocialMediaLinks>
        {socialMediaLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <link.icon />
          </a>
        ))}
      </SocialMediaLinks>
      <P>Feito por Braynner Oliveira</P>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: black;
  width: 90vw;
  height: 7vh;
  margin-top: auto;
  display: flex;
  border-radius: 1.5vh 1.5vh 0 0;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0 0 2vh rgba(0, 0, 0, 1.0); 
  @media (max-width: 480px) {     
    height: 8vh;   
    flex-direction:column;    
  }
`;

const SocialMediaLinks = styled.div`
  @media (max-width: 480px) {
    margin-top: 5px;
  }
  a {
    color: white;
    font-size: 24px;
    margin: 0 10px;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #cccccc;
    }    
  }
`;

const P = styled.p`
  @media (max-width: 480px) {
    margin-top:0;
    margin-bottom:5px;
  }
`

export default Footer;
