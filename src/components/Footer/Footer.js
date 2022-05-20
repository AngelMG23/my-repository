import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>LET'S WORK TOGETHER</LinkTitle>
          <LinkItem href="mailto:luisangel.mg.m23@gmail.com">
            luisangel.mg.m23@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Inspired by Aarón JT</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/AngelMG23">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/langelmartinezg23/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/Angel10_Ozil">
          <AiFillTwitterSquare size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
