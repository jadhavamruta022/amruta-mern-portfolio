
import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import "./Education.css";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "Your MCA College Name",
    duration: "2026 – Present",
    status: "Currently Pursuing",
    description:
      "Pursuing postgraduate studies and strengthening my software development knowledge.",
  },
  {
    degree: "BBA in Computer Applications (BBA-CA)",
    college: "Your BBA(CA) College Name",
    duration: "Add Your Study Years",
    status: "Completed",
    description:
      "Completed undergraduate studies with a CGPA of 8.88/10.",
  },
];

export default function Education() {
  return (
    <section className="education-page">
      <div className="container">
        <SectionTitle
          eyebrow="MY ACADEMIC BACKGROUND"
          title="Education"
          highlight="Journey"
          description="My academic journey and foundation in computer applications."
        />

        <div className="education-timeline">
          {education.map((item, index) => (
            <motion.article
              className="education-card"
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="education-icon">
                <GraduationCap size={27} />
              </div>

              <div className="education-card-content">
                <span className="education-status">
                  {item.status}
                </span>

                <h3>{item.degree}</h3>
                <h4>{item.college}</h4>

                <span className="education-duration">
                  {item.duration}
                </span>

                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
