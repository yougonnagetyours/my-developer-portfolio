import React from 'react';
import { DiReact, DiSass } from 'react-icons/di';
import { FaGitAlt } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { SiTailwindcss, SiGatsby, SiWordpress } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Main technology I use is React, but in purpose to e.g styling etc. I use CSS, but more often there is Tailwind CSS, 
      Styled Components and sometimes - Material UI. Very often when I use API's or CMS's I used to use official documentacion which is almost always compatible with REST API approach or I make schemas and queries in GraphQL query language.
    </SectionText>
    <List>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <DiReact size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>React</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoJavascript size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <FaGitAlt size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Git</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <AiFillGithub size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>GitHub</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <SiTailwindcss size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tailwind CSS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <BsFillBootstrapFill size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <DiSass size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>SASS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <SiGatsby size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Gatsby</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <SiWordpress size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Wordpress</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoHtml5 size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>HTML</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoCss3 size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
