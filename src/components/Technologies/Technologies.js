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
} from "./TechnologiesStyles";
import Link from "next/link";

const Technologies = () => (
  <Section id="tech">
    <Btn3>
      <Link href="#tech">
        <CgChevronDoubleDownO />
      </Link>
    </Btn3>
    <SectionDivider style={{ marginBottom: "3%" }} />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My strongest skill is the mechanical design and software like SolidWorks, Unigraphics NX, Inventor for CAD/CAM/CAE,
      I really love it. However in topics like automation process I consider myself able to do it and be competitive. 
      Additionally, in topics like programming I've programmed in languages like Python, C/C++, Matlab, LabView and I know 
      a little of ROS and Java but I don't consider myself a strong competitive in this field. Finally, also I've worked with 
      Arduino, Raspberry, Cortex-M4 (Nucleo 64), FPGA for mechatronics systems.
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

export default Technologies;
