import React from 'react';
import { DiReact } from 'react-icons/di';
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
      Styled Components and sometimes - Bootstrap. All the technologies I use are listed below
    </SectionText>
    <List>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Git</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>GitHub</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tailwind CSS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Styled Components</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>SASS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Gatsby</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Wordpress</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoHtml5 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>HTML</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoCss3 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
