import React from 'react';
import "./about.css";
import Image from "../../assets/my-pic-1.svg";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
      <img src={Image} alt="" className="about__img" />

      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">
          I’m Mia May Vilatcha, a WordPress Web Developer from Laguna, Philippines, with strong experience building, designing and customizing high-performance websites. I specialize in Elementor, Figma-to-WordPress workflows and custom theme functionality. I’m continuously upskilling in Technical SEO to build websites that are not only visually polished but also optimized for growth and conversions.
          </p>
          <a href="https://drive.google.com/file/d/1exSa7ZH6GM36sKVChaeCqHRw1FeUg-Nz/view?usp=sharing" target="_blank" rel="noreferrer" className="btn">Download CV</a>
        </div>

          <div className="about__skills grid">
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                  <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">UI Implementation</h3>
                  <span className="skills__number">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__implementation"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">SEO & Technical Optimization</h3>
                  <span className="skills__number">65%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage technical_seo"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default About
