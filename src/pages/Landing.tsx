import "./Landing.css";
import { type RefObject, useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "../components/button/Button.tsx";
import { InfoFrame } from "../components/infoCard/InfoFrame.tsx";
import { TextFrame } from "../components/textFrame/TextFrame.tsx";
import SvgHeroCropped from "../assets/svg/hero-cropped.tsx";

function Landing() {
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

    useEffect(() => {
        let hueRotationDegree: number, saturationPercentage: number;
        console.log(`Landing section is ${isLandingSectionInView ? "" : "not "}in view`);
        console.log(`About section is ${isAboutSectionInView ? "" : "not "}in view`);
        console.log(`Skills section is ${isSkillsSectionInView ? "" : "not "}in view\n"=====`);

        if (isLandingSectionInView) {
            hueRotationDegree = 0;
            saturationPercentage = 100;
        } else if (isAboutSectionInView) {
            hueRotationDegree = -55;
            saturationPercentage = 100;
        } else if (isSkillsSectionInView) {
            hueRotationDegree = -105;
            saturationPercentage = 100;
        }

        // bodyRef.current.style.filter = `
        //     hue-rotate(${hueRotationDegree}deg)
        //     saturate(${saturationPercentage}%)`;
    }, [isLandingSectionInView, isAboutSectionInView, isSkillsSectionInView]);

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
                initial={{
                    opacity: "0%",
                    scale: "0%",
                    // scaleX: "10%",
                    // height: "150%",
                    borderRadius: "100%",
                }}
                animate={{
                    opacity: "100%",
                    scale: "100%",
                    // scaleX: "100%",
                    // height: "100%",
                    borderRadius: "5vw",
                }}
                transition={{
                    duration: 0.75,
                    type: "tween",
                    ease: "circOut",
                }}
            >
                <section id="landing" ref={landingSectionRef} className="page-section page-section--flex">
                    {/*<img id="hero" src={"/hero-cropped.svg"} alt="hero" />*/}
                    <SvgHeroCropped id="hero"></SvgHeroCropped>
                    <TextFrame>
                        <p id="subheading" className="center-text">
                            I'm a <b>Student</b> and{" "}
                            <b>
                                Full-Stack Software <br /> Engineer
                            </b>
                            , based in the United States.
                        </p>
                    </TextFrame>

                    <Button
                        buttonType={"button--important"}
                        text="About Me"
                        iconName="arrow-down"
                        onClick={() => scrollToSection(aboutSectionRef)}
                    />
                </section>
                <section
                    style={{
                        flex: "1 1 0",
                    }}
                    ref={aboutSectionRef}
                    className="page-section page-section--flex"
                >
                    {/*<InfoCard text={"Hey, I'm Devyon."}></InfoCard>*/}
                    <div>
                        {/*<h2>Hi, I'm Devyon</h2>*/}
                        <InfoFrame>
                            <h1>About Me!</h1>
                            <h2>Hi, I'm Devyon.</h2>
                            <p>
                                I’m a Belizean Born, Atlanta-based software engineer. My programming journey started as
                                a desire to develop video games, but has since blossomed into a vast new world of
                                possibilities where I’ve realized just how much of an impact I can have on the world by
                                crafting accessible software.
                                <br />
                                <br />
                                I’ve a penchant for creative problem solving, and have practical experience in
                                developing scalable, secure systems, accompanied by intuitive, interfaces, that
                                accomplish much more than the bare minimum.
                                <br />
                                <br />I try to pickup new tools and frameworks frequently so I can stay ahead of the
                                curve. My adaptability and persistent work ethic make me a great fit for any development
                                team.
                            </p>
                        </InfoFrame>
                    </div>
                </section>
                <section id="skillsSection" ref={skillsSectionRef} className={"page-section page-section--grid"}>
                    <h1>Languages</h1>
                    {/*<InfoCard text={"a"}></InfoCard>*/}
                </section>
            </motion.div>
            {/*<div*/}
            {/*    style={{*/}
            {/*        position: "fixed",*/}
            {/*        zIndex: "0",*/}
            {/*        background: "rgba(0,0,0,1)",*/}
            {/*        borderRadius: "9999px",*/}
            {/*        width: "100px",*/}
            {/*        height: "100px",*/}
            {/*        top: mousePosition.y,*/}
            {/*        left: mousePosition.x,*/}
            {/*        transform: "translate(-50%, -50%)",*/}
            {/*        // maskMode: "alpha",*/}
            {/*        maskImage: "radial-gradient(circle at center, white 0%, rgba(0,0,0,0) 80%)",*/}
            {/*        maskMode: "alpha",*/}
            {/*        // filter: "blur(10px)",*/}
            {/*        // filter: "blur(10px)",*/}
            {/*        backdropFilter: "saturate(100%)",*/}
            {/*        pointerEvents: "none",*/}
            {/*    }}*/}
            {/*></div>*/}
        </main>
    );
}

export default Landing;
