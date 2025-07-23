import "./Home.css";
import { type RefObject, useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "../components/button/Button.tsx";
import { InfoFrame } from "../components/infoCard/InfoFrame.tsx";
import { TextFrame } from "../components/textFrame/TextFrame.tsx";
import SvgHeroCropped from "../assets/svg/SvgHeroCropped.tsx";
import SvgStreak1 from "../assets/svg/SvgStreak1.tsx";
import SvgStreak2 from "../assets/svg/SvgStreak2.tsx";
import { PageSection } from "../components/pageSection/PageSection.tsx";
import { MonoTile } from "../components/monoTile/MonoTile.tsx";

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

    // Handle Page Section FX
    const isLandingSectionInView = useInView(landingSectionRef, { amount: 0.5 });
    const isAboutSectionInView = useInView(aboutSectionRef, { amount: 0.5 });
    const isSkillsSectionInView = useInView(skillsSectionRef, { amount: 0.5 });

    // useEffect(() => {
    //     let hueRotationDegree: number, saturationPercentage: number;
    //     console.log(`Landing section is ${isLandingSectionInView ? "" : "not "}in view`);
    //     console.log(`About section is ${isAboutSectionInView ? "" : "not "}in view`);
    //     console.log(`Skills section is ${isSkillsSectionInView ? "" : "not "}in view\n"=====`);
    //
    //     if (isLandingSectionInView) {
    //         hueRotationDegree = 0;
    //         saturationPercentage = 100;
    //     } else if (isAboutSectionInView) {
    //         hueRotationDegree = -55;
    //         saturationPercentage = 100;
    //     } else if (isSkillsSectionInView) {
    //         hueRotationDegree = -105;
    //         saturationPercentage = 100;
    //     }
    //
    //     // bodyRef.current.style.filter = `
    //     //     hue-rotate(${hueRotationDegree}deg)
    //     //     saturate(${saturationPercentage}%)`;
    // }, [isLandingSectionInView, isAboutSectionInView, isSkillsSectionInView]);

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
                    }}
                >
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
                        }
                    >
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
                    }}
                >
                    <h1>About Me!</h1>
                    <TextFrame
                        style={{
                            gridArea: "description",
                        }}
                    >
                        <h3>Hi, I'm Devyon</h3>
                        <p>
                            I’m a Belizean Born, Atlanta-based <b>software engineer</b>. My programming journey started
                            as a desire to develop videogames, but has since blossomed into a vast new world of
                            possibilities where I’ve realized just how much of an impact I can have on the world by
                            crafting accessible software.
                            <br />
                            <br />
                            I’ve a penchant for creative problem solving, and have practical experience in developing
                            scalable, secure systems, accompanied by intuitive, interfaces, that accomplish much more
                            than the bare minimum.
                            <br />
                            <br /> I try to pickup new tools and frameworks frequently so I can stay ahead of the curve.
                            My adaptability and persistent work ethic make me a great fit for any development team._
                        </p>
                    </TextFrame>
                    <TextFrame
                        style={{
                            gridArea: "timeline",
                        }}
                    >
                        <h3>My Timeline</h3>
                        <dl
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                // flex: "1",
                                gap: "1rem",
                                justifyContent: "space-around",
                                height: "auto",
                            }}
                        >
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
                <PageSection></PageSection>
                <PageSection></PageSection>
                {/*<section id="landingSection" ref={landingSectionRef} className="page-section"></section>*/}
                {/*<section ref={aboutSectionRef} className="page-section page-section--flex"></section>*/}
                {/*<section id="skillsSection" ref={skillsSectionRef} className={"page-section"}></section>*/}
            </motion.div>
        </main>
    );
}

export default Home;
