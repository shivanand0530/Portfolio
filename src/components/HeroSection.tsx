import { motion } from "framer-motion";
import { Download, Calendar } from "lucide-react";
import pdf from '../assets/files/SHIVANANDA-K_RESUME.pdf';
import darth from '../assets/images/darthVader.jpg'

export default function HeroSection() {
  return (
    <div>
      <div className="border-b-2 border-[#1C1C1F] bg-black overflow-hidden">
        <div className="flex max-w-7xl mx-auto flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-white">
          {/* Image on the left */}
          <div 
            className="relative w-full md:w-1/2 lg:w-[450px] shrink-0 self-stretch"
          >
            <img 
              src={darth} 
              alt="Darth Vader" 
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text on the right */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-16">
            <h1 className="font-space-grotesk-500 text-3xl sm:text-4xl md:text-5xl font-medium">
              Hi, I'm Shivanand 
            </h1>
            <p className="font-space-grotesk-300 text-base sm:text-lg md:text-xl mt-4 max-w-xl text-gray-300">
               A fresh graduate Software Developer with a foundation in computer science and a specialization in cybersecurity. I Build scalable web and mobile applications with clean architecture, strong fundamentals, and secure design principles. Experienced with modern tech stacks, APIs, databases, and delivering production-ready solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="h-12 border-b-2 border-[#1C1C1F] bg-black bg-[radial-gradient(circle,#1D202A_1px,transparent_1px)] [background-size:12px_12px] sm:h-16 sm:[background-size:14px_14px] md:h-18 md:[background-size:16px_16px]"></div>
    </div>
  );
}