import React from 'react';
import './About.css';
import bg from '../../assets/removeB.png';
import { Link } from 'react-scroll';
const About = () => {
  const handleHireMe = () => {
  window.location.href = "mailto:koechc2024@gmail.com?subject=Hiring%20Inquiry";
};
  return (
   <section id="About">
    <div className="introcontent">
    <span className="hello">Hello</span>
    <span className="introText">I am <span className="introName">Koech Collins</span><br/>Website Developer and Revamper</span>
        <p className="intropara">I am a skilled software developer with experience in <br/>Front-end web development</p>
        <button id='hireBtn' onClick={handleHireMe}>
  Hire Me
</button>
    </div>
    
    <img src={bg} alt="" className="bg" />


   </section>
  );
};

export default About;