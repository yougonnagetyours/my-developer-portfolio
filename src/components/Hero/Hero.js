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
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        <div style={{marginBottom: '20px', width: '55%'}}>
          <SectionText>
            There are many variations of passages of Lorem Ipsum available, but the majority           </SectionText>
        </div>
        <div style={{marginBottom: '20px', width: '40%', minWidth: '120px', minHeight: '200px'}}>
          <Img src={images.heroImage} />
        </div>
      </div>  
      <Button onClick={() => window.location = "https://google.com"}>Learn more</Button>
      
    </LeftSection>
  </Section>
);

export default Hero;