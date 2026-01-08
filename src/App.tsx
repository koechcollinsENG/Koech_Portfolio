import React from 'react';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/skills';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/contact me/contact';
import ContactForm from './components/sureform/sure';
import FindMe from './components/Links/links';
import Footer from './components/Links/links';
function App() {
  return (
      <div>
        <NavBar/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <ContactForm/>
        <Footer/>
      </div>
  );
}

export default App;
