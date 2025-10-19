import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Aepl from "../assets/images/aepl.webp";
import Au from "../assets/images/au.webp";

interface ExperienceItemProps {
  logo: string;
  title: string;
  type: string;
  highlights: string[];
  skills: string[];
}

function ExperienceItem({ logo, title, type, highlights, skills }: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => setIsExpanded((prev) => !prev);

  return (
    <div className="font-space-grotesk border-b border-[#1C1C1F] bg-black">
      <div
        onClick={toggleExpansion}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleExpansion();
        }}
        role="button"
        tabIndex={0}
        className="group flex cursor-pointer items-center gap-4 bg-black px-4 py-6 text-white transition-colors duration-200 select-none hover:bg-[#0e0e0f] sm:px-[5%] sm:py-10"
      >
        <div className="h-14 w-14 flex-shrink-0 rounded-lg border border-[#2A2A2D] bg-[#18181B] p-1 shadow-sm transition group-hover:border-[#444446]">
          <img
            src={logo}
            alt={`${title} Logo`}
            className="pointer-events-none h-full w-full rounded-md object-contain"
          />
        </div>
        <div className="flex flex-grow flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <h2 className="text-lg font-semibold sm:text-2xl">{title}</h2>
          <p className="w-fit rounded-md border border-[#2C2C2F] bg-[#1E1F21] px-3 py-1 text-xs text-gray-300 sm:text-sm">
            {type}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-6 w-6 text-gray-400 transition group-hover:text-gray-200" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="content"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden bg-black px-4 pb-8 text-white sm:px-[5%]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6"
            >
              <div>
                <ul className="space-y-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {highlights.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#444444] shadow-sm"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 sm:pt-4">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-md border border-[#2C2C2F] bg-[#18181B] px-3 py-1 text-xs text-gray-300 sm:text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const experiences = [
  { logo : Aepl,
    title: "Mobile App Developer Intern",
    type: "Internship",
    highlights: [
      "Developed and maintained mobile applications using React Native and Realm DB",
      "Collaborated with cross-functional teams to define, design, and ship new features",
      "Improved application performance and user experience through continuous testing and optimization",
      "Ensured seamless integration with backend services , APIs, and generate reports",
      "Participated in code reviews and contributed to team knowledge sharing sessions",
    ],
    skills: ["React Native", "Realm DB", "TypeScript", "Gitlab"]
  },
  {
    logo: Au,
    title: "IOS App Developement Internship",
    type: "Internship",
    highlights: [
      "Built an attendance management iOS application using Swift and Xcode",
      "Implemented user authentication and authorization using Firebase",
      "Designed intuitive user interfaces for seamless user experience and LMS integration",
      "Conducted thorough testing and debugging to ensure app stability and performance",
      "Collaborated with a team of developers and designers to deliver the project on time",
    ],
    skills: ["Swift", "Swift UI", "Firebase", "Xcode"]
  }
];

export default function ExperienceSection() {
  return (
    <>
    <section id="experience" className="border-b-2 border-[#1C1C1F] bg-black font-space-grotesk bg-black px-[5%] py-12 sm:py-16">
      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
    <div className="h-12 border-b-2 border-[#1C1C1F] bg-black bg-[radial-gradient(circle,#1D202A_1px,transparent_1px)] [background-size:12px_12px] sm:h-16 sm:[background-size:14px_14px] md:h-18 md:[background-size:16px_16px]">
    </div>
    </>
  );
}
