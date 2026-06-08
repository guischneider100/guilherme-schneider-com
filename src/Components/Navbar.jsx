import { GiHamburgerMenu } from "react-icons/gi";

import pixelArt from '../assets/pixel-art.png'
import flagBrazil from '../assets/flag-brazil.png'
import flagUsa from '../assets/flag-usa.png'

import { useContext } from "react";
import { LanguageContext, useLanguage } from "./LanguageContext";

export default function Navbar({ menuOpen, setMenuOpen }) {

  const {text, language, toggleLanguage} = useLanguage()

  return (
    <nav className="navbar">
      <a href="#">
        <img src={pixelArt} className="navbar-icon" />
      </a>

      <GiHamburgerMenu
        className="hamburger"
        size={28}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>{text["nav_bar"]["about"]}</a>
        <a href="#work_experience" onClick={() => setMenuOpen(false)}>{text["nav_bar"]["work_experience"]}</a>
        <a href="#per_projects" onClick={() => setMenuOpen(false)}>{text["nav_bar"]["per_projects"]}</a>

        <a href="javascript:void(0)" onClick={() => { language == "pt" ? toggleLanguage('en') : toggleLanguage('pt')}}>{language == "pt" ? <img src={flagBrazil}/> : <img src={flagUsa}/>}</a>
      </div>
    </nav>
  );
}