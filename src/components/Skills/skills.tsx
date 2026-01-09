
import './skills.css';
import Ux from '../../assets/UX Design.jpg';
import Web from '../../assets/Web.jpg';



const Skills = () => {
  return (
    <section id="Myskills">
      <span className="skillTit">My Work</span><br/>
      <span className="skillDescribe">"React|Typescript|Vite|Tailwind Css|UX/UI enthuasist|Crafting web apps with clean code & sleek interfaces."</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={Web} alt="Web Development" className="skillImage" />
            <h3 className="skillName">Web Development</h3><br/>
            <p id='webP'>👋 I’m a Front-End Web Developer specializing in building responsive, modern user interfaces with React.js and JavaScript. </p>
        </div>
        <div className="skillBar">
            <img src={Ux} alt="UxDev" className="skillImage" />
            <h3 className="skillName">UX/UI Design</h3><br/>
            <p>💻 I turn design concepts into responsive, interactive experiences using tools like Figma and prototyping workflows.</p>
        </div>
        </div>
    </section>
  );
};

export default Skills;