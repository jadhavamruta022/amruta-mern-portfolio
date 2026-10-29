
import { motion } from "motion/react";
import { ExternalLink, GitFork, FolderCode } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import "./Projects.css";

const projects = [
  {
    title: "Pymera",
    category: "Finance Platform",
    description:
      "A finance platform project that helped me explore web application functionality and understand user-facing financial features.",
    technologies: ["Web Development", "UI", "Finance"],
    liveUrl: "http://www.pymera.in/",
    githubUrl: "",
  },
  {
    title: "Messwala",
    category: "Mess Management Web Application",
    description:
      "A web application concept for managing mess operations, including customers, meal attendance, coupons, subscriptions and payments.",
    technologies: ["React.js", "HTML", "CSS", "React Router"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Pet Service Platform",
    category: "Full Stack Web Application",
    description:
      "A pet service platform project involving Admin, Service Provider and Customer roles, with REST API and authentication concepts.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Weather Application",
    category: "Web Application",
    description:
      "A practice project focused on fetching weather information from an API and displaying data in a user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Fetch API"],
    liveUrl: "",
    githubUrl: "",
  },
];

export default function Projects() {
  return (
    <section className="projects-page">
      <div className="container">
        <SectionTitle
          eyebrow="MY WORK"
          title="Featured"
          highlight="Projects"
          description="A selection of projects that demonstrate my practical learning and development skills."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="project-card-top">
                <div className="project-folder-icon">
                  <FolderCode size={28} />
                </div>

                <div className="project-card-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} source code`}
                    >
                      <GitFork size={20} />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} website`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
