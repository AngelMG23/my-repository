import React, { Component, useEffect, useRef } from "react";
import { init } from "ityped";
import {
  Section,
  SectionText,
  SectionDivider,
  SectionTitle,
  SectionText2,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Span, Span2 } from "./HeroStyles";

function Hero() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 120,
      backSpeed: 30,
      loop: true,
      strings: ["Mechanical design", "Electrical & Electronics", "Automation", "Manufacturing Process"],
    });
  }, []);
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello There, I'm
          <br />
          <Span>Ángel Martínez</Span> <br />
          Mechatronics engineer
          <Span2 style={{ marginLeft: "2rem" }} ref={textRef}> </Span2>
        </SectionTitle>
        <SectionText2>
          Are you looking for a person that with effort, discipline, and perseverance
          can become the hard work into smart work? I'm here for you! Highly motivated
          and willing to demonstrate my passion on CAE/CAD, mechanical design fields, 
          and take it to the next level and become myself as an expert.
          You can download my CV/Resume by clicking on the button below.
          <br />
        </SectionText2>
        <Button
          onClick={() =>
            (window.location =
              "https://correoipn-my.sharepoint.com/:b:/r/personal/lmartinezg1511_alumno_ipn_mx/Documents/CV/LAMG_Resume.pdf?csf=1&web=1&e=KkqQKj")
          }
        >
          <td>My CV</td>
        </Button>
      </LeftSection>
    </Section>
  );
}

export default Hero;
