import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {


  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am machanical engineer who became interested in programming during studies. It started from basics of C++ and Java up to change technology stack to frontend programming and making web apps 
      </SectionText>
    </Section>
  );
};

export default Timeline;
