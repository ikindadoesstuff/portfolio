import "./Home.css";
import { type RefObject, useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "../../components/button/Button.tsx";
import { TextFrame } from "../../components/textFrame/TextFrame.tsx";
import SvgHeroCropped from "../../assets/svg/SvgHeroCropped.tsx";
import { PageSection } from "../../components/pageSection/PageSection.tsx";
import { MonoTile } from "../../components/monoTile/MonoTile.tsx";
import { StackCard } from "../../components/stackCard/StackCard.tsx";
import { LinkTile } from "../../components/linkTile/LinkTile.tsx";
import { Page } from "../Page.tsx";
import { SOCIALS } from "../../config/config.ts";

const LanguagesStackIcons = [
  {
    src: "css",
    description: "",
  },
  {
    src: "typescript",
    description: "",
  },
  {
    src: "javascript",
    description: "",
  },
  {
    src: "html",
    description: "",
  },
  {
    src: "c++",
    description: "",
  },
  {
    src: "java",
    description: "",
  },
];
const FrameworksStackIcons = [
  {
    src: "react",
    description: "",
  },
  {
    src: "express",
    description: "",
  },
  {
    src: "motion",
    description: "",
  },
  {
    src: "qt",
    description: "",
  },
];
const ToolsStackIcons = [
  {
    src: "vmware",
    description: "",
  },
  {
    src: "git",
    description: "",
  },
  {
    src: "mysql",
    description: "",
  },
  {
    src: "figma",
    description: "",
  },
  {
    src: "illustrator",
    description: "",
  },
  {
    src: "photoshop",
    description: "",
  },
];

function Home() {
  // const onLoadTransitionSettings = {
  //     duration: 0.75,
  //     type: "tween",
  //     ease: "circOut",
  // };

  const bodyRef = useRef(document.body);

  const landingSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // Handle Page Section FX
  const isLandingSectionInView = useInView(landingSectionRef, { amount: 0.5 });
  const isAboutSectionInView = useInView(aboutSectionRef, { amount: 0.5 });
  const isSkillsSectionInView = useInView(skillsSectionRef, { amount: 0.5 });

  // Handle Cursor Blur Effects
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //
  // useEffect(() => {
  //   const handleMouseUpdate = (event) => {
  //     setMousePosition({ x: event.pageX, y: event.pageY });
  //     console.log(event.pageX, event.pageY);
  //   };
  //
  //   bodyRef.current.addEventListener("mousemove", handleMouseUpdate);
  //
  //   return () => {
  //     bodyRef.current.removeEventListener("mousemove", handleMouseUpdate);
  //   };
  // }, []);

  const scrollToSection = (ref: RefObject<any>) => {
    if (ref != null) ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Page pageSectionRefs={[landingSectionRef, aboutSectionRef, skillsSectionRef, contactSectionRef]}>
      <PageSection ref={landingSectionRef} id={"landing-section"}>
        <SvgHeroCropped
          style={{
            position: "absolute",
            top: "50%",
            translate: "0 -50%",
            fill: "var(--ref-palette-neutral-0)",
            maxWidth: "calc(40% + 10vh)",
          }}
        />
        <p>
          I'm a Student and Full-Stack Software <br />
          Engineer, based in the United States.
        </p>
        <Button
          text={"About Me"}
          iconName={"user-round"}
          onClick={() => {
            scrollToSection(aboutSectionRef);
          }}
        />
      </PageSection>
      <PageSection ref={aboutSectionRef} id={"about-section"}>
        <h1 id="about-me-heading">About Me!</h1>
        <TextFrame
          style={{
            gridArea: "description",
          }}>
          <h3>Hi, I'm Devyon</h3>
          <p>
            I’m a Belizean Born, Atlanta-based <b>software engineer</b>. My programming journey started as a desire to
            develop videogames, but has since blossomed into a vast new world of possibilities where I’ve realized just
            how much of an impact I can have on the world by crafting accessible software.
            <br />
            <br />
            I’ve a penchant for creative problem solving, and have practical experience in developing scalable, secure
            systems, accompanied by intuitive, interfaces, that accomplish much more than the bare minimum.
            <br />
            <br /> I try to pickup new tools and frameworks frequently so I can stay ahead of the curve. My adaptability
            and persistent work ethic make me a great fit for any development team._
          </p>
        </TextFrame>
        <TextFrame
          style={{
            gridArea: "timeline",
          }}>
          <h3>My Timeline</h3>
          <dl
            style={{
              display: "flex",
              flexDirection: "column",
              // flex: "1",
              gap: "1rem",
              justifyContent: "space-around",
              height: "auto",
            }}>
            <div>
              <dt>
                <h4>Saint John's College High School</h4>
              </dt>
              <dd>
                <small>Computer Science Diploma (2019 - 2023)</small>
              </dd>
            </div>
            <div>
              <dt>
                <h4>Saint John's College Junior College</h4>
              </dt>
              <dd>
                <small>A.S. Computer Information Systems (2023 - 2025)</small>
              </dd>
            </div>
            <div>
              <dt>
                <h4>Saint John's College High School</h4>
              </dt>
              <dd>
                <small>Computer Science Diploma (2019 - 2023)</small>
              </dd>
            </div>
          </dl>
        </TextFrame>
        <TextFrame
          id="about-me-footer"
          style={{ gridArea: "footer", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <h2>I am...</h2>
          <div className="mono-tile__container">
            <MonoTile>Logical</MonoTile>
            <MonoTile>Detailed</MonoTile>
            <MonoTile>Motivated</MonoTile>
          </div>
          <div className="mono-tile__container">
            <i style={{ fontWeight: "200" }}>...and Incredibly</i> <MonoTile>Passionate</MonoTile>
          </div>
          <p>about software development.</p>
        </TextFrame>
      </PageSection>
      <PageSection ref={skillsSectionRef} id="skills-section">
        <h1>My Stack</h1>
        <StackCard stackIconsData={LanguagesStackIcons}>Languages</StackCard>
        <StackCard stackIconsData={FrameworksStackIcons}>Frameworks</StackCard>
        <StackCard stackIconsData={ToolsStackIcons}>
          Additional
          <br />
          Tools
        </StackCard>
        <Button
          buttonVariant={"button--normal--link"}
          text={"Projects"}
          iconName={"gallery-vertical-end"}
          target={"/projects"}
        />
      </PageSection>
      <PageSection
        ref={contactSectionRef}
        id={"contact-section"}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto auto 1fr",
          gridTemplateAreas: `"header" "body" "socials"`,
          gap: "0 4rem",
        }}>
        <h1>Reach Out!</h1>
        <TextFrame>
          <h3>I'm Available for Work, Feedback, or a Quick Chat.</h3>
          <p>Shoot me an email, or message me on LinkedIn, and I'll be sure to get back to you as soon as I can.</p>
        </TextFrame>
        <div id="social-tiles">
          <LinkTile href={SOCIALS.GitHub} text={"GitHub"} iconSrc={"github"} />
          <LinkTile href={SOCIALS.LinkedIn} text={"Linkedin"} iconSrc={"linkedin"} />
          <LinkTile href={`mailto:${SOCIALS.Email}`} text={"Email"} iconSrc={"email"} />
        </div>
      </PageSection>
    </Page>
  );
}

export default Home;
