import "./monoTile.css";

export function MonoTile(props) {
  const combinedClassNames = `mono-tile ${props.className || ""}`.trim();

  return (
    <span {...props} className={combinedClassNames}>
      {props.children}
    </span>
  );
}
