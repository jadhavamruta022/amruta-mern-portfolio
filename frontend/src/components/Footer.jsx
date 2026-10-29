
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="top">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>
              Amruta<span>.</span>
            </h2>
            <p>
              Aspiring MERN Stack Developer building modern
              and responsive web applications.
            </p>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={21} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={21} />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
            >
              <Mail size={21} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Amruta. All rights reserved.
          </p>

          <a href="#top" className="back-to-top">
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
