import React from "react";
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from "react-icons/di";
import { SiDassaultsystemes, SiSiemens, SiAutodesk } from "react-icons/si";
import { FcElectronics } from "react-icons/fc";
import { GiMeshNetwork } from "react-icons/gi";
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
    
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My strongest skill in the Mechatronics field is the mechanical design by using software like SolidWorks, Unigraphics NX, CATIA V5 for CAD/CAM/CAE,
      I really love them and I want to be an expert in this field. However in topics like automation and manufacturing process I consider myself able to do it and be 
      professionally competitive. Additionally, in topics like programming, I've programmed in different languages like Python, C/C++, Matlab/Simulink, 
      LabView and I know a little of ROS and Java; however, I consider myself with an indiviual competitive level in this field. Finally, 
      also I've worked with PIC's, Arduino, Raspberry, Cortex-M4 (Nucleo 64), FPGA for academic mechatronics projects, and
      I want to learn more about these by conducted personal projects.
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
            <br /> Solidworks <br /> CATIA V5 <br /> 3D Modeling <br /> Finite Element Analysis <br /> Simulation <br /> SimMechanics <br />{" "}
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
          <ListTitle>CAD/PLC/Process</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Experience with
            </span>{" "}
            <br /> <br /> Unigraphics Nx <br /> STEP7 MicroWIN <br /> PLC S7200 <br /> PCSimu <br /> Manufacturing process <br />{" "} 
            Lean Six Sigma <br /> 8D
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
            <br /> <br /> PCB's (Proteus/Multisim) <br /> Digital circuits <br /> Arduino/Raspberry/PIC's <br /> Cortex M4/FPGA
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiMeshNetwork
          style={{
            marginLeft: "14%",
          }}
          size="4rem"
        />
        <ListContainer>
          <ListTitle>ANSYS</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Knowledge in
            </span>{" "}
            <br /> <br /> Statical Structural <br /> Workbench <br /> SpaceClaim <br /> Finite Element Analysis
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
            <br /> <br /> Python <br /> C/C++ <br /> Matlab/Simulink  <br /> LabView <br /> ROS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
