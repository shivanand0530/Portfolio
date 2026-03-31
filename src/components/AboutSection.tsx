import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <>
    <section id="about" className="border-b-2 border-[#1C1C1F] bg-black bg-black text-gray-300 font-space-grotesk">
      <div className="px-4 sm:px-[5%] mt-0 py-6">
        <div className="space-y-4 sm:space-y-6">
          <p className="leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
            Software Engineer. Mobile App Developer. Cybersecurity Enthusiast.
          </p>
          <p className="leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
            Built on a Computer Science foundation from Alliance University, I work at the intersection of user experience, system design, and security. I don’t just build apps, I engineer products that are fast, resilient, and secure.
          </p>
          <p className="leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
            My approach is simple: clean interfaces, efficient architecture, and security woven in from the start. From offline-first mobile systems to scalable applications, every decision is intentional.
          </p>
          <p className="leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
            Outside of development, I study systems - how they fail, how they’re exploited, and how they can be strengthened. That perspective shapes everything I build.
          </p>
          <p className="leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
            If it runs on a device, scales on the web, or needs to stay secure under pressure, I work on it.
          </p>
        </div>
        {/* <p className="mb-6 sm:mb-10 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          When I'm not coding, you'll find me exploring the latest tech trends, tinkering with new cybersecurity technology and tools.
          Let's connect and create something amazing together!
        </p> */}
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
    <div className="h-12 border-b-2 border-[#1C1C1F] bg-black bg-[radial-gradient(circle,#1D202A_1px,transparent_1px)] [background-size:12px_12px] sm:h-16 sm:[background-size:14px_14px] md:h-18 md:[background-size:16px_16px]"></div>
    </>
  );
}
