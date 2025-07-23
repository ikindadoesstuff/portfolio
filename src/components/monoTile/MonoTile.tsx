import "./monoTile.css";

export function MonoTile(props) {
    const combinedClassNames = `mono-tile ${props.className || ""}`.trim();

    return <span className={combinedClassNames}>{props.children}</span>;
}
