import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./style";

import { Navbar, Education, Footer, Loading } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <AnimatePresence>
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <motion.section
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Navigation */}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar />
              </div>
            </div>

            {/* Education section */}
            <div
              className={`bg-primary ${styles.flexCenter} ${styles.paddingX} pt-[80px]`}
            >
              <div className={`${styles.boxWidth}`}>
                <Education />
              </div>
            </div>

            {/* Contact Me (Footer section in this template) */}
            <Footer />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
