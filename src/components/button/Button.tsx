import "./button.css";

import { DynamicIcon } from "lucide-react/dynamic";

export function Button({ text, iconName }: { text: string; iconName: any }) {
    return (
        <button className={"button"}>
            <DynamicIcon
                className={"icon"}
                name={iconName}
                // strokeWidth={2}
            />
            {text}
        </button>
    );
}
