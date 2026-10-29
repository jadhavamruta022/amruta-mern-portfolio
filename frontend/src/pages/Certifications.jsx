
import { Award, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import "./Certifications.css";

const certifications = [
  {
    title: "Your Certification Name",
    provider: "Your Course Provider",
    year: "2026",
    description: "Add details about your actual certification.",
    certificateUrl: "",
  },
];

export default function Certifications() {
  return (
    <section className="certifications-page">
      <div className="container">
        <SectionTitle
          eyebrow="LEARNING & ACHIEVEMENTS"
          title="My"
          highlight="Certifications"
          description="Courses and certifications that support my technical learning."
        />

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.article
              className="certification-card"
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="certification-icon">
                <Award size={30} />
              </div>

              <span className="certification-year">
                {cert.year}
              </span>

              <h3>{cert.title}</h3>
              <h4>{cert.provider}</h4>
              <p>{cert.description}</p>

              {cert.certificateUrl && (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-link"
                >
                  View Certificate <ExternalLink size={16} />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
