
import { BriefcaseBusiness, Code2, Rocket } from "lucide-react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import "./Experience.css";

const experiences = [
  {
    icon: Code2,
    title: "MERN Stack Development",
    organization: "Personal Projects & Practical Learning",
    duration: "Ongoing",
    type: "Project-Based Learning",
    description:
      "Developing practical knowledge of frontend and backend technologies by building web applications and reusable components.",
    skills: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Messwala – Mess Management Web Application",
    organization: "Personal / Academic Project",
    duration: "Project Work",
    type: "Web Development Project",
    description:
      "Worked on mess management user-interface pages, responsive layouts, reusable React components and page navigation.",
    skills: [
      "React.js",
      "HTML",
      "CSS",
      "React Router",
      "Responsive UI",
    ],
  },
  {
    icon: Rocket,
    title: "Pymera – Finance Platform",
    organization: "Project Experience",
    duration: "Project Work",
    type: "Web Application Learning",
    description:
      "Explored a finance-platform project to understand its functionality and improve my understanding of web application development.",
    skills: [
      "Web Development",
      "UI Understanding",
      "Problem Solving",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-page">
      <div className="container">
        <SectionTitle
          eyebrow="MY PRACTICAL JOURNEY"
          title="Experience &"
          highlight="Projects"
          description="Practical learning and project work that help me develop my technical skills."
        />

        <div className="experience-list">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="experience-card"
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="experience-icon">
                  <Icon size={27} />
                </div>

                <div className="experience-content">
                  <div className="experience-heading">
                    <div>
                      <span className="experience-type">
                        {item.type}
                      </span>

                      <h3>{item.title}</h3>
                      <h4>{item.organization}</h4>
                    </div>

                    <span className="experience-duration">
                      {item.duration}
                    </span>
                  </div>

                  <p>{item.description}</p>

                  <div className="experience-skills">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
