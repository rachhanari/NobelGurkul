import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gpcke0n", // service ID
        "template_9i38tbc", // template ID
        form.current,
        "c24d1YlNFNEuFIgQP" // public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6197.76427893578!2d73.01114569083425!3d19.250598382191985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd471ab7adbf%3A0x93ad15f523cd4006!2sNOBEL%20gurukul%20convent%20school%20and%20jr%20college!5e0!3m2!1sen!2sin!4v1741076580808!5m2!1sen!2sin";

  return (
    <section className="contacts padding">
      <div className="container shadow flexSB">
        <div className="left row">
          <iframe
            src={map}
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="School Location Map"
          ></iframe>
        </div>

        <div className="right row">
          <h1>Contact us</h1>
          <p>We're open for any suggestion or just to have a chat</p>

          <div className="items grid2">
            <div className="box">
              <h4>📍 ADDRESS:</h4>
              <p>
                <strong>NOBEL Gurukul Convent School & Jr College</strong>
                <br />
                Paresh Complex, Padmashri Nanasaheb Dharmadhikari Gate, <br />
                Kalher, Bhiwandi - 421302 (Opp Shilpa Hotel)
              </p>
            </div>
            <div className="box">
              <h4>📧 EMAIL:</h4>
              <p>info@nobelgurukulschool.org</p>
            </div>
            <div className="box">
              <h4>📞 PHONE:</h4>
              <p>+91 9892538534</p>
            </div>
          </div>

          {/* ✅ Contact Form integrated with emailjs */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="flexSB">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              placeholder="Create a message here..."
              rows="5"
              required
            ></textarea>
            <button type="submit" className="primary-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
