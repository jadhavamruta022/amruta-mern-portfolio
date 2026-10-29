
import { motion } from "motion/react";
import "./PageLoader.css";

function PageLoader() {
  return (
    <div className="page-loader">
      <motion.div
        className="loader-content"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="loader-ring"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
        />

        <h2>
          Amruta<span>.</span>
        </h2>

        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Loading portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
}

export default PageLoader;
