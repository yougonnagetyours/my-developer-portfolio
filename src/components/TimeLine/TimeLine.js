import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {


  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        When I create web applications I really take care about design and consistent logic. In free time I improve my skills and capabilities, especially in front-end development.
      </SectionText>
    </Section>
  );
};

export default Timeline;
