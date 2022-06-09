import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         HELLO THERE ! Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Seeking a position in Web Development, App Development, Software Quality Assurance, Data Science, Data 
Analysis, Machine Learning, Data visualization, analysis, Deep Learning and Blockchain Development where 
extensive experience will be further developed and utilized. To develop my career at an employer that will allow 
me to put my passion, excitement, and thirst for knowledge to good use while also allowing me to be a part of the 
growing team that is up for any challenge. 
        </SectionText>
        <Button onClick={()=> window.location = 'http://google.com'}>Know More</Button>
      </LeftSection>
    </Section>
  
  
);

export default Hero;