import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {


  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am frontend developer mainly based in React and JavaScript technology. For now I am freelancer and ethusiast but I am looking for a job to could improve my skills by regular work on web projects. Recently I begin my first group project and this is magnificent experience for me, because for now I used to write apps only by myself using CMS's or specially prepared backends like e.g. Commerce.js. This project will be soon on my portfolio.
      </SectionText>
    </Section>
  );
};

export default Timeline;
