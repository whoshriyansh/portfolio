import { motion } from "framer-motion";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h1 className="font-display font-bold text-[8rem] md:text-[12rem] leading-none heading-tight text-white/10">
          404
        </h1>
        <p className="text-soft_gray/50 text-sm mt-4 mb-8">
          This page doesn&apos;t exist. Let&apos;s get you back home.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange text-white font-display font-semibold text-sm hover:bg-orange-light transition-colors duration-300"
          data-cursor-hover
        >
          <ArrowLeft size={16} />
          Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
