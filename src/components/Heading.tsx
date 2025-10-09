import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeadingProps {
  heading: string;
  showButton?: boolean;
  buttonLink?: string;
}

export default function Heading({ heading, showButton, buttonLink }: HeadingProps) {
  return (
    <div className="w-full border-b-2 border-t-2 border-[#1C1C1F] bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white py-2 md:py-3 flex items-center justify-between max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16"
      >
        <h1>{heading}</h1>
        {showButton && buttonLink && (
          <Button
            variant="outline"
            className="cursor-pointer group rounded-full border-2 border-[#444446] bg-[#18181B] px-4 sm:px-6 py-1.5 text-xs sm:text-sm text-gray-200 transition hover:bg-[#222226]"
            onClick={() => { window.open("https://github.com/shivanand0530", "_blank"); }}
          >
            See all
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        )}
      </motion.div>
    </div>
  );
}
