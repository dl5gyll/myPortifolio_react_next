import React from 'react';
import { DiFirebase, DiReact, DiZend, DiAndroid, DiSwift, DiCode} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech"> 
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I have worked and tried a rage of tecknologies in the web development world. 
    With a range from back-end to front-end, Design and also to Web3 apps.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.js and Tailwind
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem"/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node.js, PHP, and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend size="3rem"/>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br />
          tools like Figma, Canvas, and Photoshop
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiAndroid size="3rem"/>
      <ListContainer>
        <ListTitle>Android Development</ListTitle>
        <ListParagraph>
          Experience with <br />
          Flutter, Java android development
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiSwift size="3rem"/>
      <ListContainer>
        <ListTitle>Swift</ListTitle>
        <ListParagraph>
          Experience with <br />
          Swift Mobile development
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiCode size="3rem"/>
      <ListContainer>
        <ListTitle>Other Techs</ListTitle>
        <ListParagraph>
          Experience with <br />
          .Net(C#), C/C++, Python and Java
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
