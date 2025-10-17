import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-black text-gray-300 font-space-grotesk">
      <div className="px-4 sm:px-[5%] mt-0 py-6">
        <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I'm  a Mobile app developer, a Frontend Developer, and a CyberSecurity specialized individual, graduated in BTech - CSE from Alliance University, Bengaluru.
          I blend design thinking with technical expertise to create intuitive and scalable
          digital solutions.
        </p>
        <p className="mb-6 sm:mb-10 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          When I'm not coding, you'll find me exploring the latest tech trends, tinkering with new cybersecurity technology and tools.
          Let's connect and create something amazing together!
        </p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-6 py-2 sm:py-4">
          <a
            href="https://github.com/shivanand0530"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/shivananda-k"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
          <a
            href="https://leetcode.com/u/Shivananda_k/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            Leetcode <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
