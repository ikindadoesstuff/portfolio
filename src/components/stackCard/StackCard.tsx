import "./stackCard.css";
import React from "react";

interface StackIconDataObject {
  src: string;
  description: string;
}

export function StackCard({
  stackIconsData,
  className,
  children,
  ...props
}: {
  stackIconsData: Array<StackIconDataObject>;
  className?: string;
  children?: React.ReactNode;
}) {
  const combinedClassNames = `stack-card ${className || ""}`.trim();

  return (
    <div {...props} className={combinedClassNames}>
      <div style={{ gridArea: "title" }}>
        <h4 style={{ textAlign: "center", lineHeight: "1.2" }}>{children}</h4>
      </div>
      <div className="stack-icon-container" style={{ gridArea: "icons" }}>
        {stackIconsData.map((stackIconData) => (
          <img
            key={stackIconData.src}
            className="stack-icon"
            src={`/stack_icons/${stackIconData.src}.svg`}
            alt={stackIconData.description}
          />
        ))}
      </div>
    </div>
  );
}
