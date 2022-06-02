import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there! <br />
          I'm Deborah.
        </SectionTitle>
        <SectionText>
        A Front End Developer and SWE with a lot to say but just a few words...
        </SectionText>
        <Button onClick={props.handleClick}>Leggo!</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;