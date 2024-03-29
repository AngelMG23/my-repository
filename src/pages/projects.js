import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "../components/Projects/ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  SectionTitle2,
} from "../styles/GlobalComponents";
import { projects } from "../constants/constants";

import { projects1 } from "../constants/constants";
import { projects2 } from "../constants/constants";
import { projects3 } from "../constants/constants";
import { projects4 } from "../constants/constants";

import Header2 from "../components/Header/Header2";
import { Container } from "../layout/LayoutStyles";
import Footer from "../components/Footer/Footer";
const Projects = () => (
  <>
    <Container>
      <Header2 />
    </Container>
    <Section nopadding id="projects">
      <SectionTitle2 main>Projects</SectionTitle2>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Mechatronics</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={source}>Result</ExternalLinks>
                <ExternalLinks href={visit}>Video</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}

        {projects1.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Portfolio</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={source}>Code</ExternalLinks>
                <ExternalLinks href={visit}>Site</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}

        {projects2.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>CAD</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={source}>Models</ExternalLinks>
                <ExternalLinks href={visit}>Video</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}

        {projects3.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>CAD/Robotics</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={source}>Models</ExternalLinks>
                <ExternalLinks href={visit}>Video</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}

        {projects4.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>CAD/CATIA V5</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={source}>Practice Parts</ExternalLinks>
                <ExternalLinks href={visit}>Simulations</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}

      </GridContainer>
    </Section>

    <Footer />
  </>
);


export default Projects;

