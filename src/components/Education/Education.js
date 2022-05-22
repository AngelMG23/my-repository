import React from "react";
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from "react-icons/di";
import { SiDassaultsystemes, SiSiemens, SiAutodesk } from "react-icons/si";
import { FcElectronics, FcProcess, FcElectroDevices } from "react-icons/fc";
import { BsCodeSlash } from "react-icons/bs";
import { GiMechanicalArm, GiTrackedRobot, GiBigGear } from "react-icons/gi";

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
      My technical education started at 2009 at the elementary school when I studied as Electrical Technical Assistant, 
      then I studied at high school with diploma the Mechatronics Technical Career. The latest studies so far was the
      Mechatronics engineering Degree at UPITTA-IPN. Aditionally, I studied 1 year the Industrial Robotics Degree at ESIME-IPN
    </SectionText>
    <List>
      <ListItem>
        <GiBigGear
          style={{
            marginLeft: "14%",
          }}
          size="6rem"
        />
        <ListContainer>
          <ListTitle>Mechatronics Technician</ListTitle>
          <ListParagraph>
            <span
              style={{
                fontWeight: "bolder",
                fontStyle: "italic",
              }}
            >
              Tech Knowleadge
            </span>{" "}
            <br />
            <br /> Technical drawings, basic electronics, PLC automation <br /> Pneumatics and Hydraulics 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiMechanicalArm
          style={{
            marginLeft: "14%",
          }}
          size="6rem"
        />
        <ListContainer>
          <ListTitle>Industrial Robotics Engineering</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Tech Knowleadge
            </span>{" "}
            <br /> <br /> AutoCAD, C/C++
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
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Tech Knowleadge
            </span>{" "}
            <br /> <br /> Mechanical Design, Automation/Manufacturing Process, Control, Programming/IT, Electrical/Electronics Circuits, Robotics
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Education;
