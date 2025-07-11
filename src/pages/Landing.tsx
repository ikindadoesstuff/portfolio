import "./Landing.css";
import hero from "../../public/hero.svg";
import { motion } from "motion/react";
import { Button } from "../components/button/Button.tsx";

function Landing() {
    // const onLoadTransitionSettings = {
    //     duration: 0.75,
    //     type: "tween",
    //     ease: "circOut",
    // };

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
                <section id="landing" className="page-section-flex">
                    <img id="hero" src={"/hero-cropped.svg"} alt="hero" />
                    <h2 className="center-text">
                        I'm a <b>Student</b> and{" "}
                        <b>
                            Full-Stack Software <br /> Engineer
                        </b>
                        , based in the United States.
                    </h2>
                    <Button text="About Me" iconName="arrow-down"></Button>
                </section>
            </motion.div>
        </main>
    );
}

export default Landing;
