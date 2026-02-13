import { useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2300);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 grid place-items-center bg-black text-white z-50">
      {/* <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-center"
      > */}
        <video
          src="/videos/incintro.mp4"
          autoPlay
          muted
          playsInline
className="w-[95vw] max-w-[1100px] mx-auto"
        />

        
      {/* </motion.div> */}
    </div>
  );
};

export default Preloader;
