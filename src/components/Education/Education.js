import React from "react";
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from "react-icons/di";
import { SiDassaultsystemes, SiSiemens, SiAutodesk } from "react-icons/si";
import { FcElectronics, FcProcess } from "react-icons/fc";
import { BsCodeSlash } from "react-icons/bs";
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
      My technical education started at 2009 at the elementary school
    </SectionText>
    <List>
      <ListItem>
        <SiDassaultsystemes
          style={{
            marginLeft: "14%",
          }}
          size="4rem"
        />
        <ListContainer>
          <ListTitle>CAD/CAE</ListTitle>
          <ListParagraph>
            <span
              style={{
                fontWeight: "bolder",
                fontStyle: "italic",
              }}
            >
              Experience with
            </span>{" "}
            <br />
            <br /> Solidworks <br /> 3D Modeling <br /> Finite Element Analysis <br /> Simulation <br /> SimMechanics <br />{" "}
            Sheet metal
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiSiemens
          style={{
            marginLeft: "14%",
          }}
          size="4rem"
        />
        <ListContainer>
          <ListTitle>CAD/PLC</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Experience with
            </span>{" "}
            <br /> <br /> Unigraphics Nx <br /> STEP7 MicroWIN <br /> PLC S7200 <br /> PCSimu
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAutodesk
          style={{
            marginLeft: "14%",
          }}
          size="4rem"
        />
        <ListContainer>
          <ListTitle>CAD/CAM</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Experience with
            </span>{" "}
            <br /> <br /> AutoCAD <br /> Inventor <br /> FeatureCAM
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FcElectronics
          style={{
            marginLeft: "14%",
          }}
          size="4rem"
        />
        <ListContainer>
          <ListTitle>Electronics/Electrical</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Experience with
            </span>{" "}
            <br /> <br /> PCB's (Proteus/Multisim) <br /> Digital circuits <br /> Arduino/Raspberry/Cortex-M4/FPGA
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FcProcess
          style={{
            marginLeft: "14%",
          }}
          size="4rem"
        />
        <ListContainer>
          <ListTitle>Process</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Knowleadge in
            </span>{" "}
            <br /> <br /> Manufacturing process <br /> Lean Six Sigma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BsCodeSlash
          style={{
            marginLeft: "14%",
          }}
          size="4rem"
        />
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Experience with
            </span>{" "}
            <br /> <br /> Python <br /> C/C++ <br /> Matlab  <br /> LabView <br /> ROS (a bit)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Education;
