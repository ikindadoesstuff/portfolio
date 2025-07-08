import "./navbarButton.css";
import { DynamicIcon } from "lucide-react/dynamic";

export function NavbarButton({
    text,
    target,
    iconName,
}: {
    text: string;
    target: string;
    iconName: any;
}) {
    console.log(location.href + "\n" + target);

    let isCurrentPage = false;
    if (location.href === target) {
        isCurrentPage = true;
    }

    return (
        <>
            <a id="navbarButton" href={target}>
                <DynamicIcon
                    className={"icon " + (isCurrentPage ? "selected" : "")}
                    name={iconName}
                />
                {text}
            </a>
        </>
    );
}
