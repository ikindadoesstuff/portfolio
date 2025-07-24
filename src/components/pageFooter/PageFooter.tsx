import "./pageFooter.css";

import React from "react";
import { Link } from "react-router";

export function PageFooter({
    ...props
}: {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    id?: string;
    ref?: React.RefObject<null>;
}) {
    const combinedClassNames = `page-footer ${props.className || ""}`.trim();

    return (
        <div {...props} className={combinedClassNames}>
            {/*{props.children}*/}
            <div className="page-footer__content">
                <div className="page-footer__description">
                    <p>
                        This site was designed in <b>Figma</b> and built in <b>React</b> with love and dedication. ✌️
                        <br />
                        It is subject to change and will be updated as I develop new projects and advance in my career.
                        <br />
                        To anyone viewing, <b>thank you!</b>
                        <br />
                    </p>
                </div>
                <div className="page-footer__links">
                    <div className="page-footer__links__column">
                        <span className="page-footer__links__text">
                            <b>Pages</b>
                        </span>
                        <Link to="/home" className="page-footer__links__text">
                            Home
                        </Link>
                        <Link to="/projects" className="page-footer__links__text">
                            Projects
                        </Link>
                        <Link to="/experiments" className="page-footer__links__text">
                            Experiments
                        </Link>
                    </div>
                    <div className="page-footer__links__column">
                        <span className="page-footer__links__text">
                            <b>Resources</b>
                        </span>
                        <a href="" className="page-footer__links__text">
                            Home
                        </a>
                        <a href="" className="page-footer__links__text">
                            Projects
                        </a>
                        <a href="" className="page-footer__links__text">
                            Experiments
                        </a>
                    </div>
                    <div className="page-footer__links__column"></div>
                </div>
                <hr className="separator" />
                <div className="page-footer__copyright">
                    <p>© 2025</p>
                </div>
            </div>
        </div>
    );
}
