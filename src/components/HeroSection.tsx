import { motion } from "framer-motion";
import { Download, Calendar } from "lucide-react";
import pdf from '../assets/files/SHivananda-Resume.pdf'
export default function HeroSection() {
  return (
    <div>
      <div className="border-b-2 border-[#1C1C1F] bg-black">
        <div className="px-4 pt-15 sm:px-6 sm:pt-24 md:px-0 md:pt-32 lg:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 flex max-w-7xl mx-auto flex-col items-center justify-center text-white text-center"
          >
            <h1 className="font-space-grotesk text-3xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I'm Shivanand 
            </h1>
            <h1 className="font-space-grotesk text-2xl leading-tight font-bold mt-2 sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl text-gray-300 italic">
              I develop <span >Mobile Apps</span> , <span >Web</span>
            </h1>
            <h1 className="font-space-grotesk text-2xl leading-tight font-bold -mt-1 sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl text-gray-300 italic">
              Experiences & <span >CyberSecurity stuff</span>.
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-space-grotesk mt-4 w-full text-sm text-[#A4A4A4] text-center sm:mt-6 sm:w-[80%] sm:text-base md:mt-8 md:w-[70%] md:text-lg lg:w-[60%] lg:text-xl xl:w-[45%] xl:text-2xl"
            >
              I build exceptional digital experiences with modern technologies. Specialized in React, React-native and CyberSecurity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 flex flex-wrap gap-3 justify-center sm:mt-6 md:mt-8"
            >
              <a
                href={pdf}
                download="Shivananda-resume.pdf"
                className="font-space-grotesk-500 flex items-center gap-2 rounded-full border-2 border-[#494949] bg-[#1C1C1C] px-4 py-2 text-sm transition-all hover:border-[#5A5A5A] hover:bg-[#2C2C2C] sm:gap-3 sm:px-6 sm:py-2.5 sm:text-base md:px-8 md:py-3"
              >
                <span>Download Resume</span>
                <Download
                  size={18}
                  strokeWidth={1.25}
                  className="text-gray-300 sm:h-5 sm:w-5 md:h-[22px] md:w-[22px]"
                />
              </a>
              
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="h-12 border-b-2 border-[#1C1C1F] bg-black bg-[radial-gradient(circle,#1D202A_1px,transparent_1px)] [background-size:12px_12px] sm:h-16 sm:[background-size:14px_14px] md:h-18 md:[background-size:16px_16px]"></div>
    </div>
  );
}