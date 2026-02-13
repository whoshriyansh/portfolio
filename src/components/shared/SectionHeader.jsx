import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SectionHeader = ({ label, title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-4"
    >
      {/* Label */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-2 rounded-full bg-orange" />
        <span className="text-xs text-soft_gray/60 uppercase tracking-[0.3em] font-medium">
          {label}
        </span>
      </div>

      {/* Title */}
      <h2 className="font-display font-bold text-4xl md:text-5xl text-white heading-tight">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-soft_gray/50 text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-light">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
