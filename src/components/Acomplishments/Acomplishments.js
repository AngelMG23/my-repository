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
  {
    number: 2020,
    text: "Was a TeamThor member within Mechanical team where was managed the 5th place in the CanSat Competition 2020",
  },
  { number: 2021, text: "I realized my thesis work to obtain the Mechatronics engineer degree" },
  {
    number: 2021,
    text: "In December I finished my social service writing a research project at Centro de Desarrollo Espacial IPN"
  }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievents</SectionTitle>
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
