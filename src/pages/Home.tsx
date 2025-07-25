import "./Home.css";
import { type RefObject, useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "../components/button/Button.tsx";
import { TextFrame } from "../components/textFrame/TextFrame.tsx";
import SvgHeroCropped from "../assets/svg/SvgHeroCropped.tsx";
import { PageSection } from "../components/pageSection/PageSection.tsx";
import { MonoTile } from "../components/monoTile/MonoTile.tsx";
import { StackCard } from "../components/stackCard/StackCard.tsx";
import { LinkTile } from "../components/linkTile/LinkTile.tsx";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseUpdate = (event) => {
      setMousePosition({ x: event.pageX, y: event.pageY });
      console.log(event.pageX, event.pageY);
    };

    bodyRef.current.addEventListener("mousemove", handleMouseUpdate);

    return () => {
      bodyRef.current.removeEventListener("mousemove", handleMouseUpdate);
    };
  }, []);

  const scrollToSection = (ref: RefObject<any>) => {
    if (ref != null) ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main className="page-container">
      <motion.div
        className="page-container__content"
        // initial={{
        //     opacity: "0%",
        //     scale: "0%",
        //     // scaleX: "10%",
        //     // height: "150%",
        //     borderRadius: "100%",
        // }}
        // animate={{
        //     opacity: "100%",
        //     scale: "100%",
        //     // scaleX: "100%",
        //     // height: "100%",
        //     borderRadius: "5vw",
        // }}
        // transition={{
        //     duration: 0.75,
        //     type: "tween",
        //     ease: "circOut",
        // }}
      >
        <PageSection
          ref={landingSectionRef}
          id={"landing-section"}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "2rem",
            // paddingTop: "50vh",
          }}>
          <SvgHeroCropped
            style={{
              position: "absolute",
              top: "50%",
              translate: "0 -50%",
              fill: "var(--ref-palette-neutral-0)",
              maxWidth: "calc(40% + 10vh)",
            }}
          />
          <p
            style={
              {
                // marginTop: "auto",
              }
            }>
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
        <PageSection
          ref={aboutSectionRef}
          id={"about-section"}
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 3fr",
            gridTemplateRows: "auto 2fr 1fr",
            gridTemplateAreas: `"header header" "description timeline" "footer footer"`,
            gap: "0 4rem",
          }}>
          <h1>About Me!</h1>
          <TextFrame
            style={{
              gridArea: "description",
            }}>
            <h3>Hi, I'm Devyon</h3>
            <p>
              I’m a Belizean Born, Atlanta-based <b>software engineer</b>. My programming journey started as a desire to
              develop videogames, but has since blossomed into a vast new world of possibilities where I’ve realized
              just how much of an impact I can have on the world by crafting accessible software.
              <br />
              <br />
              I’ve a penchant for creative problem solving, and have practical experience in developing scalable, secure
              systems, accompanied by intuitive, interfaces, that accomplish much more than the bare minimum.
              <br />
              <br /> I try to pickup new tools and frameworks frequently so I can stay ahead of the curve. My
              adaptability and persistent work ethic make me a great fit for any development team._
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
          <TextFrame style={{ gridArea: "footer", justifyContent: "center", alignItems: "center" }}>
            <h2>I am...</h2>
            <h4>
              <MonoTile>Logical</MonoTile>
              <MonoTile>Detailed</MonoTile>
              <MonoTile>Motivated</MonoTile>
            </h4>
            <h4>
              <i style={{ fontWeight: "200" }}>...and Incredibly</i> <MonoTile>Passionate</MonoTile>
            </h4>
            <p>about software development.</p>
          </TextFrame>
        </PageSection>
        <PageSection
          ref={skillsSectionRef}
          id={"skills-section"}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            // gridTemplateColumns: "1fr",
            // gridTemplateRows: "auto 1fr 1fr 1fr 1fr",
            // gridTemplateAreas: `"header" "row1" "row2" "row3" "footer"`,
            gap: "0 4rem",
          }}>
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
            // onClick={() => {
            //     scrollToSection(aboutSectionRef);
            // }}
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
          <div style={{ display: "flex", margin: "6rem 2rem 2rem 2rem", height: "fit-content" }}>
            <LinkTile text={"GitHub"} iconSrc={"github"} href={""} />
            <LinkTile text={"Linkedin"} iconSrc={"linkedin"} href={""} />
            <LinkTile text={"Email"} iconSrc={"email"} href={""} />
          </div>
        </PageSection>
      </motion.div>
    </main>
  );
}

export default Home;
