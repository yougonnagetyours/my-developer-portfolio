import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiCool } from "react-icons/bi";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
        <BiCool size="3rem" /> <Span>MyPortfolio</Span>
      </a>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/yougonnagetyours">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/michał-potoczny-50189020a">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>   
);

export default Header;
