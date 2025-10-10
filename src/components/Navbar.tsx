import { motion, AnimatePresence } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navbarHeight = 64; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 sm:left-40 sm:right-40 z-50 border-b border-white/10 bg-black/90 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-bold tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
          >
            &lt; Shivanand K /&gt;
          </button>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-4">
            <Button
              variant="ghost"
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => handleMenuItemClick("projects")}
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => handleMenuItemClick("experience")}
            >
              Work
            </Button>
            <Button
              variant="ghost"
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => handleMenuItemClick("about")}
            >
              About
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden text-white relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onTouchStart={() => {}} // Ensures touch events work on iOS
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay to close menu when clicking outside */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-30 sm:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="sm:hidden absolute top-full left-0 right-0 border-t border-white/10 bg-black/95 backdrop-blur-lg z-40"
              >
                <div className="flex flex-col py-4 px-4 space-y-2">
                  <button
                    className="w-full text-left text-white py-4 px-4 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors touch-manipulation"
                    onClick={() => handleMenuItemClick("projects")}
                    onTouchStart={() => {}} // Ensures touch events work on iOS
                  >
                    <span className="text-lg font-medium">Projects</span>
                  </button>
                  <button
                    className="w-full text-left text-white py-4 px-4 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors touch-manipulation"
                    onClick={() => handleMenuItemClick("experience")}
                    onTouchStart={() => {}} // Ensures touch events work on iOS
                  >
                    <span className="text-lg font-medium">Work</span>
                  </button>
                  <button
                    className="w-full text-left text-white py-4 px-4 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors touch-manipulation"
                    onClick={() => handleMenuItemClick("about")}
                    onTouchStart={() => {}} // Ensures touch events work on iOS
                  >
                    <span className="text-lg font-medium">About</span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}