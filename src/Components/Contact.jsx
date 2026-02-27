import gitPixel from '../assets/git-pixel.png'
import emailPixel from '../assets/email-pixel.png'
import linkedinPixel from '../assets/linkedin-pixel.png'
import cvPixel from '../assets/cv-pixel.png'
import resumePDF from '../assets/resume.pdf'

export default function Contact() {
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
        <a href={resumePDF} download>
          <img src={cvPixel} className="navbar-icon" />
        </a>
      </div> 
    );
}