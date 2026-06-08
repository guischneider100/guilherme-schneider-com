import gitPixel from '../assets/git-pixel.png'
import emailPixel from '../assets/email-pixel.png'
import linkedinPixel from '../assets/linkedin-pixel.png'
import cvPixel from '../assets/cv-pixel.png'
import { useLanguage } from './LanguageContext'

export default function Contact() {

    const {language} = useLanguage()

    const resumeLink = language == "pt" ? "https://drive.google.com/file/d/1faBctYelezn60G9WYlMMHRZT-ktkCn18/preview" : "https://drive.google.com/file/d/1syNvAcgvWGYEKotthW1mY-Nqit0JQfMG/preview"

    return (
      <div className="floating-contact">   
        <a href="https://github.com/guischneider100" target="_blank" rel="noopener noreferrer">
          <img src={gitPixel} className="navbar-icon" />
        </a>
        <a href="mailto:guilhermeschneider23@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailPixel} className="navbar-icon" />
        </a>
        <a href="https://www.linkedin.com/in/guilherme-felipe-schneider" target="_blank" rel="noopener noreferrer">
          <img src={linkedinPixel} className="navbar-icon" />
        </a>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <img src={cvPixel} className="navbar-icon" />
        </a>
      </div> 
    );
}