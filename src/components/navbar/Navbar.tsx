import { NavbarButton } from "./navbarButton/NavbarButton.tsx";
import { motion } from "motion/react";

// Import Stylesheet
import "./navbar.css";

import wiggleDown from "../../../public/sfx/wiggleDown.wav";
import wiggleUp from "../../../public/sfx/wiggleUp.wav";

export function Navbar() {
    const playSound = (audioFile: any) => {
        const audio = new Audio(audioFile);
        return audio.play();
    };

    return (
        <>
            <motion.nav
                id="navbar"
                className="center-absolute--horizontal"
                initial={{
                    translateY: "-150px",
                }}
                animate={{
                    translateY: "0px",
                }}
                transition={{
                    delay: 0.5,
                }}
            >
                <motion.img
                    id="home-button"
                    src={"/icon-transparent.svg"}
                    alt="Devyon Lozano"
                    onMouseDown={() => playSound(wiggleDown)}
                    onMouseUp={() => playSound(wiggleUp)}
                    whileHover={{ scale: 1.1, rotate: 2.2 }}
                    whileTap={{ scale: 0.9, rotate: 2.2 }}
                />
                <NavbarButton
                    text="Developer"
                    target="/developer"
                    iconName={"terminal"}
                    // iconName={"code-xml"}
                />
                <NavbarButton
                    text="Photographer"
                    target="/photographer"
                    iconName={"camera"}
                />
            </motion.nav>
        </>
    );
}
