import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg"

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid"></div>
      <img src={Image} alt="" className="about__img" />

      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">
          I am Mia May Vilatcha, web developer from Laguna, Philippines. I have rich experience in web site design and building and customization, also I am good at WordPress.
          </p>
          <a href="" className="btn">Download CV</a>

          <div className="about__skills grid">
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  <span className="skills__number"></span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
