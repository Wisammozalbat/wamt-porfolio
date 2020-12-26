import './App.css';
import Header from './layout/Header';

import About from './pages/About/About'

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import ProjectItems from './pages/Projects/ProjectItems/ProjectItems';

function App() {

  const [ aboutRef, aboutInView ] = useInView({
    threshold: 0.3,
  });
  const [ skillsRef, skillsInView ] = useInView({
    threshold: 0.5,
  });
  const [ projectsRef, projectsInView ] = useInView({
    threshold: 0.3,
  });
  const [ contactRef, contactInView ] = useInView({
    threshold: 0.3,
  });

  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    if (contactInView) {
      setActiveLink("contact");
    } else if (projectsInView) {
      setActiveLink("projects");
    } else if (skillsInView) {
      setActiveLink("skills");
    } else if (aboutInView) {
      setActiveLink("about");
    }
  }, [aboutInView, skillsInView, projectsInView, contactInView])

  return (
    <div className="container">
      <Header activeLink={activeLink} />
      <section className="about" ref={aboutRef} id="about">
        <About isVisible={activeLink === 'about'}/>
      </section>
      <section className="skills" ref={skillsRef} id="skills">Skills</section>
      <section className="projects" ref={projectsRef} id="projects"><ProjectItems /></section>
      <section className="contact" ref={contactRef} id="contact">Contact Me</section>
      <section className="footer" id="footer">&copy; Copyright 2020 by Wisam Mozalbat</section>
    </div>
  );
}

export default App;
