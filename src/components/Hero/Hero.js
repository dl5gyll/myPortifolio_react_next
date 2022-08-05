import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there <br /> Welcome to my web museum
      </SectionTitle>
      <SectionText>
        To offer perfection perfection, reliablity and quality, one may would need to strech far beyond just coding. 
        Have a look at my previous completed projects. 
      </SectionText>
      <Button onClick={()=>window.location = 'https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;