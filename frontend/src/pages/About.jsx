
import { Code2, Target, Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import SocialLinks from "../components/SocialLinks";
import "./About.css";

function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Building responsive and user-friendly web interfaces using React and modern web technologies.",
    },
    {
      icon: Target,
      title: "Career Goal",
      description:
        "Looking for an opportunity to grow as a MERN Stack Developer and contribute to real-world projects.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description:
        "Improving my coding skills through hands-on projects, practice, and learning new technologies.",
    },
  ];

  return (
    <section className="about-page">
      <div className="about-container">
        <SectionTitle
          eyebrow="GET TO KNOW ME"
          title="About"
          highlight="Me"
          description="A little introduction about my journey, interests, and goals."
        />

        <div className="about-grid">
          <motion.div
            className="about-intro"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-tag">
              MCA Student & Aspiring Developer
            </span>

            <h2>
              Hello, I'm <span>Amruta Jadhav</span>
            </h2>

            <p>
              I am currently pursuing my Master of Computer
              Applications (MCA) and building my skills in
              full-stack web development.
            </p>

            <p>
              I enjoy creating responsive web applications,
              developing reusable React components, and
              learning how frontend and backend technologies
              work together.
            </p>

            <p>
              My goal is to begin my professional journey as
              a MERN Stack Developer and contribute to
              meaningful projects while continuously learning.
            </p>

            <SocialLinks />
          </motion.div>

          <div className="about-highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="about-highlight-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                >
                  <div className="about-highlight-icon">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
