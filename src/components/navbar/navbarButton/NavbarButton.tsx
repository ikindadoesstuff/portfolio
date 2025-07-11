import "../../button/button.css";
import { DynamicIcon } from "lucide-react/dynamic";

export function NavbarButton({ text, target, iconName }: { text: string; target: string; iconName: any }) {
    const isCurrentPage = location.pathname.startsWith(target);
    console.log(isCurrentPage);

    return (
        <>
            <a className={"button button--contained" + (isCurrentPage ? " selected" : "")} href={target}>
                <DynamicIcon className={"icon"} name={iconName} />
                {text}
            </a>
        </>
    );
}
