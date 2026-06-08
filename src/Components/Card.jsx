import { useLanguage } from "./LanguageContext";

export default function Card({ id, title, images = [], link }) {

    const {text} = useLanguage()

    return (
        <div className="card">
            {title && <h4>{title}<span className="cursor">_</span></h4>}
            {images.map((img, index) => (
                <img key={index} src={img} loading="lazy"></img>
            ))}
            <p>{text[id]["description"]}</p>
            {link && <a href={link} target="_blank">{text[id]["buttonText"]}</a>}
        </div>
    );
}