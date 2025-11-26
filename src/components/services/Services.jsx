import React from 'react';
import "./services.css";
import Image1 from "../../assets/icon-cms.svg";
import Image2 from "../../assets/icon-ui.svg";
import Image3 from "../../assets/icon-seo.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "WordPress Development",
    description:
      "Build and customize responsive websites with Elementor Pro, WooCommerce, and Figma-to-WordPress conversion.",
  },
  {
    id: 2,
    image: Image2,
    title: "Front-End & UI Implementation",
    description:
      "Turn UI designs into functional, user-friendly web pages with sliders, animations, and clean styling.",
  },
  {
    id: 3,
    image: Image3,
    title: "SEO & Technical Optimization",
    description:
      "Optimize site performance, improve page speed, and implement SEO-friendly structures for better user experience.",
  },
];


const Services = () => {
  return (
  <section className="services container section" id="services">
    <h2 className="section__title">Services</h2>

    <div className="services__container grid">
      {data.map(({id, image, title, description}) => {
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        );
      })}
    </div>
  </section>
  );
}

export default Services
