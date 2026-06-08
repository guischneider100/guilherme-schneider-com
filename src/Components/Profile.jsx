import pixelArt from '../assets/pixel-art.png';
import { useLanguage } from './LanguageContext';

export default function Char() {

    const {text} = useLanguage()

    return (
        <>
            <img src={pixelArt} loading="lazy" alt="Profile photo" className="profile-photo" />

            <h1>Guilherme Felipe Schneider<span className="cursor">_</span></h1>
            <h2>{text["profile"]["title"]}</h2>

            <div style={{paddingTop: "80px"}}/>
        </>
    );
}