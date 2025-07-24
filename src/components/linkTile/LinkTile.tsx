import "./linkTile.css";

export function LinkTile({ text, iconSrc, href, ...props }) {
    return (
        <div className="link-tile" {...props}>
            <div className="link-tile__card">
                <img src={`/social_icons/${iconSrc}.svg`} alt="" />
            </div>
            <h4>{text}</h4>
        </div>
    );
}
