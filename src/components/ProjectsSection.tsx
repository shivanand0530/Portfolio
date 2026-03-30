import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Linkleaf from "../assets/images/LinkLeaf.png";
import GuardVault from "../assets/images/pw-rn.jpg";
import rgui from "../assets/images/rgui.jpg";
import sketchflow from "../assets/images/skectchflow.png";
import apiGateway from "../assets/images/apiGateway.png";



const projects = [    
  {
    title: "LinkLeaf",
    description: "Modern & minimal Link manager app.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    image: Linkleaf,
    live: "https://link-leaf-vault.vercel.app",
    link: "https://github.com/shivanand0530/LinkLeaf"

  },
  {
    title: "GuardVault",
    description: "A lightweight and secure password manager mobile app.",
    tags: ["ReactNative", "TypeScript", "Sqlite", "Expo"],
    image: GuardVault,
    live : null,
    link: "https://github.com/shivanand0530/Password-Manager-RN"
  },
  {
    title: "SketchFlow",
    description: "A tool for sketching and sharing your ideas.",
    tags: ["React", "TypeScript", "Redux", "Framer Motion"],
    image: sketchflow,
    live: "https://sketchflow-draw.vercel.app/",
    link: "https://github.com/shivanand0530/SketchFlow"
  },
  {
    title: "API- Gateway",
    description: "A Node.js based API gateway for your microservices.",
    tags: ["Node.js", "Express", "Redis"],
    image: apiGateway,
    live: null,
    link: "https://github.com/shivanand0530/API-Gateway-Node.js-"
  },
  {
    title : 'Reverse Engineering GUI',
    description: "A tool for Binary Analysis and Reverse Engineering.",
    tags: ["C++", "Qt", "Make"],
    image: rgui,
    live: null,
    link: "https://github.com/shivanand0530/Reverse-Engineering-GUI"
  },
];

export default function ProjectsSection() {
  return (
    <>
    <section id="projects" className=" border-b-2 border-[#1C1C1F] bg-black font-space-grotesk bg-black px-[5%] py-12 sm:py-16">
      <div className="space-y-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
    <div className="h-12 border-b-2 border-[#1C1C1F] bg-black bg-[radial-gradient(circle,#1D202A_1px,transparent_1px)] [background-size:12px_12px] sm:h-16 sm:[background-size:14px_14px] md:h-18 md:[background-size:16px_16px]">
    </div>
    </>
  );
}