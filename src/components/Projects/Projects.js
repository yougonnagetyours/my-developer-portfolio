import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section id="projects" >
    <SectionDivider />
    <br />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => {
      return (
        <BlogCard key={id} href={visit} target="_blank">
          <Img src={image} target="_blank" />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo className="card-info">{description}</CardInfo>
          <div>
            <TitleContent><p style={{color: "#007157"}}>Stack</p></TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source} target="_blank">Code</ExternalLinks>
            <ExternalLinks href={visit} target="_blank">Visit</ExternalLinks>
          </UtilityList>
        </BlogCard>       
      )
      })}
    </GridContainer>
  </Section>
);

export default Projects;
