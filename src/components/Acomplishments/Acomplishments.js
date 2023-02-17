import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: 2014,
    text: "I managed the 3rd place in the Physics Olympics in Mexico State",
  },
  { number: 2015, text: "I managed 2nd place in the Physics Olympics in Mexico State" },
  { number: 2021, text: "I realized my thesis work to obtain the Mechatronics engineer degree" },
  {
    number: 2021,
    text: "In December I finished my social service writing a research project at Centro de Desarrollo Aeroespacial IPN"
  },
  {
    number: 2022,
    text: "Thesis work was presented at Noveno Congreso de Robótica y Computación (CIRC 2022)",
  },
  {
    number: 2023,
    text: "I'm studying a specialisation postgraduate course in Mechanical engineering",
  }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
