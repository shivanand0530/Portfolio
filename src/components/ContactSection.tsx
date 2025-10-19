import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <>
    <section className="border-b-2 border-[#1C1C1F] bg-black text-center py-28 px-[5%] font-space-grotesk">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Let's work together
      </h2>
      <p className="text-gray-300 mb-10 text-lg">
        Have an idea or opportunity to work on? Feel free to reach out.
      </p>
      <div className="flex justify-center">
        <motion.a
          href="mailto:shivananda0645@gmail.com"
          className="flex items-center gap-2 rounded-full border-2 border-[#323232] px-6 py-3 text-white bg-transparent"
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            duration: 0.35,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          Get in touch <ArrowRight size={18} />
        </motion.a>
      </div>
    </section>
    <div className="h-8 border-b-2 border-[#1C1C1F] bg-black bg-[radial-gradient(circle,#1D202A_1px,transparent_1px)] [background-size:12px_12px] sm:h-16 sm:[background-size:14px_14px] md:h-18 md:[background-size:16px_16px]"></div>
    </>
  );
} 
