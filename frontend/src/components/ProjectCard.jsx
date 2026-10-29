
import { motion } from "motion/react";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import "./ProjectCard.css";

function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ y: -7 }}
    >
      <div className="project-image">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
        ) : (
          <div className="project-placeholder">
            <span>{project.title}</span>
          </div>
        )}

        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="project-content">
        <div className="project-tech">
          {project.technologies?.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              <span>Code</span>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-demo"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
