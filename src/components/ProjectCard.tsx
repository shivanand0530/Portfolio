import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string; // GitHub link
  live?: string | null; // Live Demo link
  index: number;
}

export default function ProjectCard({ title, description, tags, image, link, live, index }: ProjectCardProps) {
  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const handleLiveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (live) {
      window.open(live, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="relative font-space-grotesk">
      <div className="relative bg-black pb-8 border-b border-[#1C1C1F]">
        <div className="mx-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 pb-6 lg:mx-20">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {title}
            </h3>
            <p className="mt-2 text-base text-gray-400 sm:text-lg lg:text-xl">
              {description}
            </p>
            
            {/* Tags below description */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium rounded-md border border-[#2D2D30] bg-[#1C1C1F] text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links below tags */}
            <div className="mt-6 flex items-center gap-4">
              {link && (
                <button 
                  onClick={handleGithubClick}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#2D2D30] bg-[#1C1C1F] hover:bg-[#2D2D30] transition-colors group cursor-pointer"
                >
                  <Github size={16} className="text-gray-400 group-hover:text-white" />
                  <span className="text-xs font-medium text-gray-400 group-hover:text-white">View on GitHub</span>
                </button>
              )}
              {live && (
                <button 
                  onClick={handleLiveClick}
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-white transition-colors cursor-pointer group"
                >
                  <ExternalLink size={14} className="text-gray-500 group-hover:text-white" />
                  <span className="text-gray-500 group-hover:text-white">Live Demo</span>
                </button>
              )}
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0 rounded-xl border border-[#2D2D30] bg-[#1C1C1F] p-1.5 overflow-hidden">
            {image && (
              <img
                src={image}
                alt={`${title} screenshot`}
                className="h-40 w-full md:h-32 md:w-56 lg:h-[180px] lg:w-[320px] rounded-lg object-cover grayscale opacity-80"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}