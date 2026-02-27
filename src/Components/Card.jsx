export default function Card({ title, description, images = [], link, buttonText }) {
    return (
        <div className="card">
            <h4>{title}<span className="cursor">_</span></h4>
            {images.map((img, index) => (
                <img key={index} src={img} loading="lazy"></img>
            ))}
            <p>{description}</p>
            {link && <a href={link} target="_blank">{buttonText}</a>}
        </div>
    );
}