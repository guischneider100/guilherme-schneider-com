import pixelArt from '../assets/pixel-art.png';

export default function Char() {
    return (
        <>
            <img src={pixelArt} loading="lazy" alt="Profile photo" className="profile-photo" />

            <h1>Guilherme Felipe Schneider<span className="cursor">_</span></h1>
            <h2>Full Stack Developer</h2>

            <div style={{paddingTop: "80px"}}/>
        </>
    );
}