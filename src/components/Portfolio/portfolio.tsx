import React, { useState } from 'react';
import './portfolio.css';
import img1 from '../../assets/App development.jpg';
import img2 from '../../assets/UX Design.jpg';
import img3 from '../../assets/dataAnalysis.png';
import img4 from '../../assets/html.png';
import img5 from '../../assets/web.jpg';

const images = [
  { src: img1, caption: 'App Development' },
  { src: img2, caption: 'UX Design' },
  { src: img3, caption: 'Data Analysis' },
  { src: img4, caption: 'HTML Basics' },
  { src: img5, caption: 'Web Development' }
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="projD">
      <h2 className="projTitle">My Projects</h2>
      <span className="projectsdone">
        I take pride in the following areas having worked in…
      </span>
      
      <div className="carouselContainer">
        <button onClick={handlePrev} className="navBtn">
          Previous
        </button>

        <div className="carouselItem">
          <img
            src={images[currentIndex].src}
            alt={`Project ${currentIndex + 1}`}
            className="projectsImg"
          />
          <div className="imageCaption">{images[currentIndex].caption}</div>
        </div>

        <button onClick={handleNext} className="navBtn">
          Next
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
