import { useState } from 'react';
import './App.css'
import Card from './Card';
import { GiHamburgerMenu } from 'react-icons/gi';

/* Images */
import pixelArt from './assets/pixel-art.png'
import gitPixel from './assets/git-pixel.png'
import emailPixel from './assets/email-pixel.png'
import linkedinPixel from './assets/linkedin-pixel.png'
import cvPixel from './assets/cv-pixel.png'

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
          <a href="#about">About</a>
          <a href="#work-experience">Work Experience</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <div>
        <img src={pixelArt} alt="Profile" className="profile-photo" />
      </div>

      <h1>
        Guilherme Felipe Schneider<span className="cursor">_</span>
      </h1>
      <h2>Full Stack Developer</h2>

      <div style={{paddingTop: "80px"}}></div>

      <section id="about" className="section">
        <h3>About Me<span className="cursor">_</span></h3>
        <p>
          I'm a Computer Science graduate from Unochapecó with over 5 years of experience as a Full Stack Developer, specializing in the development and maintenance of desktop, web, and mobile applications—particularly ERP systems that support key business operations. I've worked closely with clients to deliver tailored software solutions that improve efficiency and system reliability across departments. My technical toolkit includes Java, PHP, JavaScript, Ionic, Android, PostgreSQL, and MySQL, and I've often taken on multiple roles within small, agile teams. Now based in Australia, I'm looking to bring my hands-on experience and strong technical foundation to new challenges in backend or full-stack development.
        </p>
      </section>

      <section id="work-experience" className="section">
        <h3>Work Experience<span className="cursor">_</span></h3>

        <Card title="Online Sistemas" description="Development and management of desktop, web, and mobile applications for ERP and POS systems. Java, PHP, Ionic, HTML, CSS, Javascript and SQL.">   
        </Card>
      </section>

      <section id="projects" className="section">
        <h3>Projects<span className="cursor">_</span></h3>

        <Card title="Trash to Treasure" description="A community-powered app that lets users share and find free street items, promoting sustainability through reuse and waste reduction." image="src/assets/trash-to-treasure.png">   
        </Card>
      </section>

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
        <a href="src/assets/resume.pdf" download>
          <img src={cvPixel} className="navbar-icon" />
        </a>
      </div> 
    </>
  )
}

export default App
