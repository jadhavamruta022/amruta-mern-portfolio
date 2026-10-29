
import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import "./SkillCard.css";

function SkillCard({ skill, index = 0 }) {
  const name = skill.name || "Skill";
  const level = Math.min(
    100,
    Math.max(0, Number(skill.level) || 0)
  );

  return (
    <motion.article
      className="skill-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      whileHover={{ y: -5 }}
    >
      <div className="skill-card-top">
        <div className="skill-icon">
          <Code2 size={23} />
        </div>

        {skill.level != null && (
          <span className="skill-level">
            {level}%
          </span>
        )}
      </div>

      <h3>{name}</h3>

      {skill.category && (
        <p className="skill-category">
          {skill.category}
        </p>
      )}

      {skill.level != null && (
        <div
          className="skill-progress"
          role="progressbar"
          aria-label={`${name} skill level`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={level}
        >
          <motion.div
            className="skill-progress-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: index * 0.08,
            }}
          />
        </div>
      )}
    </motion.article>
  );
}

export default SkillCard;
