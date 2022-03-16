import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {


  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I have been creating front-end applications since my studies. In free time I like to improve my skills with new technologies and excercise these what I already know.
      </SectionText>
    </Section>
  );
};

export default Timeline;
