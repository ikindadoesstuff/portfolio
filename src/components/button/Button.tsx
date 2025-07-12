import "./button.css";

import { DynamicIcon } from "lucide-react/dynamic";

export function Button({
    text,
    iconName,
    buttonType,
    ...props
}: {
    text: string;
    iconName: any;
    buttonType?: string;
    onClick?: () => void;
}) {
    return (
        <button {...props} className={`button " + ${buttonType ? buttonType : ""}`}>
            <DynamicIcon
                className={"icon"}
                name={iconName}
                // strokeWidth={2}
            />
            {text}
        </button>
    );
}
