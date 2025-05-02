import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function IntroPage() {
  const [step, setStep] = useState(0); // 0 = name, 1 = portfolio, 2 = exit
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 3000),   // Show portfolio text at 3s
      setTimeout(() => setStep(2), 5000),   // Start exit at 5s
      setTimeout(() => setShowIntro(false), 6000), // Unmount at 6s
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="w-screen h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden"
          initial={{ opacity: 1 }}
          animate={step === 2
            ? { opacity: 0, scale: 1.1, filter: "blur(12px)" }
            : { opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Background Text */}
          {step === 1 && (
            <motion.div
              className="absolute flex justify-center items-center text-[80px] md:text-[150px] font-extrabold text-white/15 select-none pointer-events-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.0 }}
            >
              Portfolio
            </motion.div>
          )}

          {/* Main Text */}
          {step === 0 && (
            <>
              <motion.h1
                className="text-2xl md:text-4xl font-medium tracking-widest text-center px-4 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
              >
                Built for the Future by
              </motion.h1>

              <motion.h2
                className="text-4xl md:text-6xl font-extrabold mt-4 tracking-wider z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 1.5 }}
              >
                SANDEEP SAINI
              </motion.h2>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroPage;
