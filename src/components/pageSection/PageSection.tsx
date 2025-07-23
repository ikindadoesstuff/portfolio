import "./pageSection.css";

import React from "react";

export function PageSection({
    ...props
}: {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    id?: string;
    ref?: React.RefObject<null>;
}) {
    const combinedClassNames = `page-section ${props.className || ""}`.trim();

    return (
        <section {...props} className={combinedClassNames}>
            {props.children}
        </section>
    );
}
