import "./button.css";

import { DynamicIcon } from "lucide-react/dynamic";
import { Link } from "react-router";

export function Button({
  text,
  iconName,
  buttonVariant = "button--normal",
  target,
  onClick,
  ...props
}: {
  text: string;
  iconName: any;
  buttonVariant?: "button--normal" | "button--normal--link" | "button--nav";
  target?: string;
  onClick?: () => void;
}) {
  const combinedClassNames = `button ${buttonVariant ? buttonVariant : ""}`.trim();
  const iconStrokeWidth = 1.5;

  if (buttonVariant == "button--normal") {
    return (
      <button onClick={onClick} {...props} className={combinedClassNames}>
        <DynamicIcon className={"icon"} name={iconName} strokeWidth={iconStrokeWidth} />
        {text}
      </button>
    );
  } else if (buttonVariant == "button--normal--link") {
    return (
      <Link to={target} onClick={onClick} {...props} className={combinedClassNames}>
        <DynamicIcon className={"icon"} name={iconName} strokeWidth={iconStrokeWidth} />
        {text}
      </Link>
    );
  } else if (buttonVariant == "button--nav") {
    return (
      <Link to={target} onClick={onClick} {...props} className={combinedClassNames}>
        <DynamicIcon className={"icon"} name={iconName} strokeWidth={iconStrokeWidth} />
        {text}
      </Link>
    );
  }
}
