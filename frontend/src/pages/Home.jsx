
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import "./Home.css";

export default function Home() {
  return (
    <section className="home-page">
      <div className="home-background">
        <div className="home-glow home-glow-one" />
        <div className="home-glow home-glow-two" />
      </div>

      <div className="container home-container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="home-availability">
            <span className="availability-dot" />
            Aspiring MERN Stack Developer
          </div>

          <p className="home-greeting">HELLO, I'M</p>

          <h1>
            Amruta
            <span className="home-name-gradient"> Jadhav</span>
          </h1>

          <h2>
            I build <span>modern web applications.</span>
          </h2>

          <p className="home-description">
            I am an MCA student passionate about full-stack web
            development. I enjoy building responsive user interfaces
            and developing modern web applications using React.js,
            Node.js, Express.js and MongoDB.
          </p>

          <div className="home-tech-stack">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>

          <div className="home-buttons">
            <Link to="/projects" className="home-primary-btn">
              Explore My Projects
              <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="home-secondary-btn">
              Contact Me
            </Link>
          </div>

          <div className="home-socials">
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          className="home-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="home-orbit home-orbit-one" />
          <div className="home-orbit home-orbit-two" />

          <motion.div
            className="home-code-card"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="home-code-header">
              <span />
              <span />
              <span />
              <p>developer.js</p>
            </div>

            <div className="home-code-body">
              <p>
                <span className="code-purple">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="code-indent">
                name: <span className="code-green">"Amruta"</span>,
              </p>

              <p className="code-indent">
                role: <span className="code-green">"MERN Developer"</span>,
              </p>

              <p className="code-indent">
                skills: [
                <span className="code-orange">"React"</span>,
              </p>

              <p className="code-indent">
                <span className="code-orange">"Node.js"</span>],
              </p>

              <p className="code-indent">
                learning: <span className="code-blue">true</span>
              </p>

              <p>{"};"}</p>
            </div>

            <div className="home-code-footer">
              <Code2 size={17} />
              <span>Always learning, always building</span>
            </div>
          </motion.div>

          <div className="home-floating-icon home-floating-code">
            <Code2 size={25} />
          </div>

          <div className="home-floating-icon home-floating-sparkle">
            <Sparkles size={23} />
          </div>
        </motion.div>
      </div>

      <Link to="/about" className="home-scroll-indicator">
        <span>Discover More</span>
        <ArrowDown size={17} />
      </Link>
    </section>
  );
}
