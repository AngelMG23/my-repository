import React from "react";
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from "react-icons/di";
import { SiDassaultsystemes, SiSiemens, SiAutodesk } from "react-icons/si";
import { FcElectronics, FcProcess, FcElectroDevices } from "react-icons/fc";
import { BsCodeSlash } from "react-icons/bs";
import { GiElectricalResistance, GiTrackedRobot, GiGears } from "react-icons/gi";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  Btn3,
} from "../../styles/GlobalComponents";
import { CgChevronDoubleDownO } from "react-icons/cg";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./EducationStyles";
import Link from "next/link";

const Education = () => (
  <Section id="edu">
    <Btn3>
      <Link href="#edu">
        <CgChevronDoubleDownO />
      </Link>
    </Btn3>
    <SectionDivider style={{ marginBottom: "3%" }} />
    <SectionTitle>Education</SectionTitle>
    <SectionText>
      My technical education started at 2009 at the middle school when I studied for Electrical Technical Assistant, 
      afterwars I studied at high school with diploma in the Mechatronics Technical Career. I studied 1 year the Industrial 
      Robotics engineering at ESIME-IPN. The latest undergraduate studies so far was the Mechatronics engineering Degree 
      at UPITTA-IPN. Currently, on 30 January I started to study a specialisation postgraduate course in Mechanical 
      engineering  at Sección de Estudios de Posgrado e Investigación, SEPI-ESIME IPN, where I have been learning topics like, 
      mainly, Finite Element Method, Mechanical of materials, and Ansys,.
    </SectionText>
    <List>
      <ListItem>
        <GiElectricalResistance
          style={{
            marginLeft: "14%",
          }}
          size="6rem"
        />
        <ListContainer>
          <ListTitle>Mechatronics Technician</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "normal", }}>
              CBT Lic. Mario Colín Sánchez <br /> 2012 - 2015
            </span>{" "} <br />
            <span style={{ fontWeight: "bolder", fontStyle: "italic", }}>
              Tech Knowleadge
            </span>{" "}
            <br />
            <br /> Technical drawings, basic electronics, PLC automation <br /> Pneumatics and Hydraulics 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiTrackedRobot
          style={{
            marginLeft: "14%",
          }}
          size="6rem"
        />
        <ListContainer>
          <ListTitle>Mechatronics Engineering</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "normal", }}>
              UPIITA - IPN <br /> 2016 - 2021
            </span>{" "} <br />
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Tech Knowleadge
            </span>{" "}
            <br /> <br /> Mechanical Design, Automation/Manufacturing Process, Control, Programming/IT, Electrical/Electronics Circuits, Robotics
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiGears
          style={{
            marginLeft: "14%",
          }}
          size="6rem"
        />
        <ListContainer>
          <ListTitle>Specialisation in Mechanical Engineering</ListTitle>
          <ListParagraph>
          <span style={{ fontWeight: "bolder", fontStyle: "normal", }}>
              SEPI - ESIME - IPN <br /> 2023 - 2023
            </span>{" "} <br />
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Tech Knowleadge
            </span>{" "}
            <br /> <br /> Ansys, Finite Element Method
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Education;
