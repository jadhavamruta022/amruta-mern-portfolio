
import { motion } from "motion/react";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found-page">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="not-found-icon">
          <SearchX size={42} />
        </div>

        <h1>4<span>0</span>4</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist or may have
          been moved. Let's get you back on track.
        </p>

        <div className="not-found-buttons">
          <Link to="/" className="not-found-home-btn">
            <Home size={18} />
            Back to Home
          </Link>

          <button
            type="button"
            className="not-found-back-btn"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </motion.div>
    </section>
  );
}
