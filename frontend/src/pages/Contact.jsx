
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import SocialLinks from "../components/SocialLinks";
import "./Contact.css";

const CONTACT_EMAIL = "your-email@example.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-page">
      <div className="container">
        <SectionTitle
          eyebrow="LET'S CONNECT"
          title="Contact"
          highlight="Me"
          description="Have an opportunity or project idea? Let's connect."
        />

        <div className="contact-layout">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Let's work together</h2>

            <p>
              I am looking for opportunities to begin my career as a
              MERN Stack Developer and contribute to real-world projects.
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <Mail size={22} />
              </div>

              <div>
                <h4>Email</h4>
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <MapPin size={22} />
              </div>

              <div>
                <h4>Location</h4>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

            <SocialLinks />
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message <Send size={17} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
