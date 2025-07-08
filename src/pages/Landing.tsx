import "./Landing.css";
import hero from "../../public/hero.svg";

function Landing() {
    return (
        <>
            <main className="page-container">
                <div className="page-container__content">
                    <img
                        id="hero"
                        className="center-absolute--horizontal center-absolute--vertical"
                        src={"/hero.svg"}
                        alt="hero"
                    />
                </div>
            </main>
        </>
    );
}

export default Landing;
