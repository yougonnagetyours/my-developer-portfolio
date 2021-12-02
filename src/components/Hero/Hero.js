import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Img } from '../Projects/ProjectsStyles';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

import { images } from '../../constants/constants';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My developer portfolio
      </SectionTitle>
      <SectionText>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
      </SectionText>
      <div style={{marginBottom: '20px'}}>
        <Img src={images.heroImage} />
      </div>
      <Button onClick={() => window.location = "https://google.com"}>Learn more</Button>
      
    </LeftSection>
  </Section>
);

export default Hero;