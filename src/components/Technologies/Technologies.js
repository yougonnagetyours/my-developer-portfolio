import React from 'react';
import { DiReact, DiSass, DiResponsive } from 'react-icons/di';
import { FaGitAlt } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai';
import { SiTailwindcss, SiGatsby, SiWordpress, SiRedux } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Main technology I use is React and JavaScript. In purpose to styling I used to use CSS, but more often there is one of frameworks: Tailwind CSS, Styled Components and Material UI. Very often when I use API or CMS I used to use official documentacion which is almost always compatible with REST API approach or I make schemas and queries in GraphQL query language.
    </SectionText>
    <List>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <DiReact size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>Next.js</ListParagraph>
          <ListParagraph>Create React App</ListParagraph>
          <ListParagraph>Gatsby</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoJavascript size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>TypeScript</ListParagraph>
          <ListParagraph>Object Oriented Programming</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <SiRedux size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>State Management</ListTitle>
          <ListParagraph>Redux</ListParagraph>
          <ListParagraph>Context API</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <FaGitAlt size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Git</ListTitle>
          <ListParagraph>GitHub</ListParagraph>
          <ListParagraph>Sourcetree</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <SiTailwindcss size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Styling</ListTitle>
          <ListParagraph>Responsive Web Design</ListParagraph>
          <ListParagraph>Tailwind CSS</ListParagraph>
          <ListParagraph>Styled Components</ListParagraph>
          <ListParagraph>Material UI</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <AiFillApi size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>API</ListTitle>
          <ListParagraph>REST API</ListParagraph>
          <ListParagraph>GraphQL</ListParagraph>
          <ListParagraph>CMS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{color: "#be9f00"}}>
          <IoLogoCss3 size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
          <ListParagraph>SASS</ListParagraph>
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
    </List>
  </Section>
);

export default Technologies;
