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
import { LeftSection, Span, Span1, Span2 } from "./HeroStyles";

function Hero() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 150,
      backSpeed: 50,
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
        </SectionTitle>
        <SectionText>
        <Span1 style={{ marginLeft: "0rem" }} ref={textRef}></Span1>
        </SectionText>
        <SectionText2>
          Are you looking for a person that with effort, discipline, and perseverance
          can become the hard work into smart work? I'm here for you! Highly motivated
          and willing to start my professional career to make a better future for a the best world
          You can download my CV/Resume by clicking on the button below.
          <br />
        </SectionText2>
        <Button
          onClick={() =>
            (window.location =
              "https://drive.google.com/file/d/1_ZYGjq4KxMbnSWGVCwjdIUMfIZc6Ce4t/view?usp=sharing")
          }
        >
          <td>My CV</td>
        </Button>
      </LeftSection>
    </Section>
  );
}

export default Hero;
