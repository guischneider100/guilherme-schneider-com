function Card({ title, description, image, image2, link, buttonText }) {
    return (
        <div className="card">
            <h4>{title}<span className="cursor">_</span></h4>
            {image && <img src={image}></img>}
            {image2 && <img src={image2}></img>}
            <p>{description}</p>
            {link && <a href={link} target="_blank">{buttonText}</a>}
        </div>
    );
}

export default Card;