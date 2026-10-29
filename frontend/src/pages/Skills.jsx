
import { motion } from "motion/react";
import {
  Code2,
  Monitor,
  Server,
  Database,
  GitBranch,
  Wrench,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import "./Skills.css";

const skillGroups = [
  {
    icon: Monitor,
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: 85 },
      { name: "CSS3", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "React.js", level: 70 },
      { name: "React Router", level: 65 },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "Express.js", level: 60 },
      { name: "REST APIs", level: 65 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: [
      { name: "MongoDB", level: 60 },
      { name: "Mongoose", level: 55 },
    ],
  },
  {
    icon: GitBranch,
    title: "Tools & Version Control",
    skills: [
      { name: "Git", level: 60 },
      { name: "GitHub", level: 65 },
      { name: "Postman", level: 55 },
    ],
  },
  {
    icon: Code2,
    title: "Programming Fundamentals",
    skills: [
      { name: "JavaScript Fundamentals", level: 70 },
      { name: "Responsive Design", level: 80 },
    ],
  },
  {
    icon: Wrench,
    title: "Development Practices",
    skills: [
      { name: "CRUD Operations", level: 65 },
      { name: "Debugging", level: 60 },
      { name: "API Integration", level: 60 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-page">
      <div className="container">
        <SectionTitle
          eyebrow="WHAT I WORK WITH"
          title="Technical"
          highlight="Skills"
          description="Technologies and tools I use while learning and building web applications."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                className="skill-group-card"
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="skill-group-heading">
                  <div className="skill-group-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{group.title}</h3>
                </div>

                <div className="skill-items">
                  {group.skills.map((skill, skillIndex) => (
                    <div className="skill-item" key={skill.name}>
                      <div className="skill-item-info">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>

                      <div className="skill-progress-track">
                        <motion.div
                          className="skill-progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: skillIndex * 0.08,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
