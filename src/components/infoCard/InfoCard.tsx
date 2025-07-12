import "./infoCard.css";

export function InfoCard({ text, ...props }: { text: string }) {
    return (
        <div className="info-card" {...props}>
            <div className="info-card__content">{text}</div>
        </div>
    );
}
