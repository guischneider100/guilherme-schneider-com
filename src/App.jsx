import { useState } from 'react';
import Card from './Card';
import { GiHamburgerMenu } from 'react-icons/gi';

/* Images */
import pixelArt from './assets/pixel-art.png'
import gitPixel from './assets/git-pixel.png'
import emailPixel from './assets/email-pixel.png'
import linkedinPixel from './assets/linkedin-pixel.png'
import cvPixel from './assets/cv-pixel.png'
import trashToTreasure from './assets/trash-to-treasure-login.png'
import trashToTreasure2 from './assets/trash-to-treasure-itens.png'
import resumePDF from './assets/resume.pdf'

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
          I'm a Computer Science graduate from Unochapecó with over 5 years of experience as a Full Stack Developer, specializing in the development and maintenance of desktop, web, and mobile applications, particularly ERP systems that support key business operations. I've worked closely with clients to deliver tailored software solutions that improve efficiency and system reliability across departments. My technical toolkit includes Java (with Spring Boot), PHP, JavaScript, React Native, Ionic, Android, PostgreSQL, and MySQL, and I've often taken on multiple roles within small, agile teams. Now based in Australia, I'm looking to bring my hands-on experience and strong technical foundation to new challenges in backend or full-stack development.
        </p>
      </section>

      <section id="work-experience" className="section">
        <h3>Work Experience<span className="cursor">_</span></h3>

        <Card title="Online Sistemas" description="Development and management of desktop, web, and mobile applications for ERP and POS systems. Led cross-platform projects, created custom reporting tools, implemented data migration solutions, and optimized app deployment processes to improve scalability, user experience, and operational efficiency. Java, PHP, Android, Ionic, Javascript, HTML, CSS and SQL." link={"https://onlinebr.net/"} buttonText={"View Website"}>   
        </Card>
      </section>

      <section id="projects" className="section">
        <h3>Professional Projects<span className="cursor">_</span></h3>

        <section className="section-al">
          <Card title="Data Migration Tool" description="Designed and built a custom tool to migrate data from multiple database types into PostgreSQL and MySQL, ensuring reliable ERP adoption for new clients. Reduced errors and improved migration speed compared to existing market tools. Built with: Java."/>
        </section>
        <section className="section-al">
          <Card title="Milk Collection App" description="Developed a cross-platform mobile app for rural milk collectors, replacing manual paper dockets with real-time digital entry. Enabled on-site invoice printing and inventory updates via portable printers, streamlining operations and expanding the company’s ERP into the agricultural sector. Built with: Ionic."/>
        </section>
        <section className="section-al">
          <Card title="Municipal Services App" description="Developed a mobile app for local governments to allow citizens to request services, report issues, and submit improvement ideas. Streamlined field data collection and improved project oversight for municipal teams. Built with: Ionic."/>
        </section>
        <section className="section-al">
          <Card title="Mobile App Refactor & New POS System" description="Refactored the main Android app to Ionic, enabling cross-platform functionality and improving user experience across devices. Proposed and initiated a new POS system in Java to replace a third-party solution, enhancing integration, reducing dependency, and improving long-term maintainability."/>
        </section>
      </section>

      <section id="projects" className="section">
        <h3>Personal Projects<span className="cursor">_</span></h3>

        <section className="section-al">
          <Card title="Trash to Treasure" description="A community-powered app that lets users share and find free street items, promoting sustainability through reuse and waste reduction. Built with: React Native, Spring Boot and PostgreSQL." image={trashToTreasure} image2={trashToTreasure2} link={"https://github.com/guischneider100/trash-to-treasure"} buttonText={"View Code"}/>
        </section>
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
        <a href={resumePDF} download>
          <img src={cvPixel} className="navbar-icon" />
        </a>
      </div> 
    </>
  )
}

export default App
