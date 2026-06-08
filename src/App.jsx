import { useContext, useMemo, useState } from 'react';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Card from './Components/Card';
import Section from './Components/Section';
import { projects } from './data/projects';
import Profile from './Components/Profile';
import { LanguageContext, LanguageProvider } from './Components/LanguageContext';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const personalProjects = useMemo(() => projects.filter(p => p.type === "per"), []);

  return (
    <LanguageProvider>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Contact/>

      <main>
        <Profile/>

        <Section id={"about"}>
          <Card id={"about"} />
        </Section>

        <Section id={"work_experience"}>
          <Card id={"work_experience"} title="Online Sistemas" link={"https://onlinebr.net/"}/>
        </Section>

        <Section id={"per_projects"}>
          {personalProjects.map((project, index) =>
            <Card id={"per_projects"} key={project.title} {...project}/>
          )}
        </Section>
      </main>
    </LanguageProvider>
  )
}

export default App