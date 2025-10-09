import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Linkleaf from "../assets/images/LinkLeaf.png";
import GuardVault from "../assets/images/pw-rn.jpg";
import codeflux from "../assets/images/codeflux.png";
import rgui from "../assets/images/rgui.jpg";

const projects = [    
  {
    title: "LinkLeaf",
    description: "Modern & minimal Link manager app.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    image: Linkleaf,
    link: "https://link-leaf-vault.vercel.app"
  },
  {
    title: "GuardVault",
    description: "A lightweight and secure password manager mobile app.",
    tags: ["ReactNative", "TypeScript", "Sqlite", "Expo"],
    image: GuardVault,
    link: "https://github.com/shivanand0530/Password-Manager-RN"
  },
  {
    title: "CodeFlux AI",
    description: "An AI-powered coding assistant for LeetCode.",
    tags: ["React", "TypeScript", "Gemini API", "Tailwind"],
    image: codeflux,
    link: "https://github.com/shivanand0530/Leet-Buddy-AI"
  },
  {
    title : 'Reverse Engineering GUI',
    description: "A tool for Binary Analysis and Reverse Engineering.",
    tags: ["C++", "Qt", "Make"],
    image: rgui,
    link: "https://github.com/shivanand0530/Reverse-Engineering-GUI"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="font-space-grotesk bg-black px-[5%] py-12 sm:py-16">
      <div className="space-y-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}