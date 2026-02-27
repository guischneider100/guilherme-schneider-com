import { useMemo, useState } from 'react';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Card from './Components/Card';
import Section from './Components/Section';
import { projects } from './data/projects';
import Profile from './Components/Profile';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const professionalProjects = useMemo(() => projects.filter(p => p.type === "pro"), []);
  const personalProjects = useMemo(() => projects.filter(p => p.type === "per"), []);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Contact/>

      <main>
        <Profile/>

        <Section id={"about"} title={"About Me"}>
          <p>I'm a Computer Science graduate from Unochapecó with over 5 years of experience as a Full Stack Developer, specializing in the development and maintenance of desktop, web, and mobile applications, particularly ERP systems that support key business operations. I've worked closely with clients to deliver tailored software solutions that improve efficiency and system reliability across departments. My technical toolkit includes Java (with Spring Boot), PHP, JavaScript, React Native, Ionic, Android, PostgreSQL, and MySQL, and I've often taken on multiple roles within small, agile teams. Now based in Australia, I'm looking to bring my hands-on experience and strong technical foundation to new challenges in backend or full-stack development. </p>
        </Section>

        <Section id={"work-experience"} title={"Work Experience"}>
          <Card title="Online Sistemas" description="Development and management of desktop, web, and mobile applications for ERP and POS systems. Led cross-platform projects, created custom reporting tools, implemented data migration solutions, and optimized app deployment processes to improve scalability, user experience, and operational efficiency. Java, PHP, Android, Ionic, Javascript, HTML, CSS and SQL." link={"https://onlinebr.net/"} buttonText={"View Website"}/>
        </Section>

        <Section id={"pro-projects"} title={"Professional Projects"}>
          {professionalProjects.map((project, index) =>
            <Card key={project.title} {...project}/>
          )}
        </Section>

        <Section id={"per-projects"} title={"Personal Projects"}>
          {personalProjects.map((project, index) =>
            <Card key={project.title} {...project} buttonText={"View Code"}/>
          )}
        </Section>
      </main>
    </>
  )
}

export default App