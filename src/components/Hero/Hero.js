import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Img } from '../Projects/ProjectsStyles';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

import { images } from '../../constants/constants';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        <div style={{marginBottom: '20px', width: '50%'}}>
          <SectionTitle main center>
            Hi, <br />
            I am Michał, <br />
            FrontEnd Developer
          </SectionTitle>
          <SectionText>
            hello and welcome to see my portfolio ;)
          </SectionText>
        </div>
        <div style={{marginTop: '20px', marginBottom: '20px', width: '45%', minWidth: '120px', minHeight: '200px'}}>
          <Img src={images.heroImage} />
        </div>
      </div>  
      <Link href="#projects">
        <Button>See my projects</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;