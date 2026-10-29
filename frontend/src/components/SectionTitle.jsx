
import { motion } from "motion/react";
import "./SectionTitle.css";

function SectionTitle({
  eyebrow = "DISCOVER",
  title,
  highlight,
  description,
  align = "center",
}) {
  return (
    <motion.div
      className={`section-title section-title-${align}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          {eyebrow}
        </span>
      )}

      <h2>
        {title}{" "}
        {highlight && (
          <span className="title-highlight">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}

      <div className="section-title-line" />
    </motion.div>
  );
}

export default SectionTitle;
