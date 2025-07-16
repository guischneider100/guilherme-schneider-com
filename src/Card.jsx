function Card({ title, description, image }) {
    return (
        <div className="card">
            <h4>{title}<span className="cursor">_</span></h4>
            {image && <img src={image}></img>}
            <p>{description}</p>
        </div>
    );
}

export default Card;