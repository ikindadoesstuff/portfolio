import "./infoFrame.css";
import type { ReactElement } from "react";

export function InfoFrame({ children, ...props }: { children }) {
    return (
        <div className="info-card" {...props}>
            <div className="info-card__content">{children}</div>
        </div>
    );
}
