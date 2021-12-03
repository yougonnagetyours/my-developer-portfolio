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
        Hello, <br />
        I am Michał, <br />
        React Developer
      </SectionTitle>
      <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'stretch', justifyContent: 'space-between'}}>
        <div style={{marginBottom: '20px', flexGrow: '2'}}>
          <SectionText>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </SectionText>
        </div>
        <div style={{marginBottom: '20px', flexGrow: '1'}}>
          <Img src={images.heroImage} />
        </div>
      </div>  
      <Button onClick={() => window.location = "https://google.com"}>Learn more</Button>
      
    </LeftSection>
  </Section>
);

export default Hero;