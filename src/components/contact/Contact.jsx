import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_l6m507a",     // <-- replace
        "template_fxq701g",    // <-- replace
        form.current,
        "hq0O2XLsijsBrRVDf"      // <-- replace
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contach__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Insert your subject"
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button className="btn">Send Message</button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
