import { GiHamburgerMenu } from "react-icons/gi";

import pixelArt from '../assets/pixel-art.png'

export default function Navbar({menuOpen, setMenuOpen}) {
    return(
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
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work-experience" onClick={() => setMenuOpen(false)}>Work Experience</a>
          <a href="#pro-projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </div>
      </nav>
    );
}