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
      My main stack is React.JS, I love it. But I am also proficient in and work
      with HTML/CSS. As for the back-end I use Node.JS and Express.
      Additionally, I am competent in API and NoSQL database (MongoDB).
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
