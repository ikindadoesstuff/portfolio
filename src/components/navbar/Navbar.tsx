import { NavbarButton } from "./navbarButton/NavbarButton.tsx";
import { motion } from "motion/react";

// Import Stylesheet
import "./navbar.css";

export function Navbar() {
    return (
        <>
            <nav id="navbar" className="center-absolute--horizontal">
                <motion.img
                    id="home-button"
                    src={"/icon-transparent.svg"}
                    alt="Devyon Lozano"
                    whileHover={{ scale: 1.1, rotate: 2.2 }}
                    whileTap={{ scale: 0.9, rotate: 2.2 }}
                />
                <NavbarButton text="Developer" target="/" iconName={"camera"} />
                <NavbarButton
                    text="Photographer"
                    target="/"
                    iconName={"code-xml"}
                />
            </nav>
        </>
    );
}
