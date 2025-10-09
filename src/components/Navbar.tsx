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
      className="fixed top-0 left-0 right-0 sm:left-40 sm:right-40 z-50 border-b border-white/10 bg-background/80 backdrop-blur-lg"
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
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden border-t border-white/10 bg-background/95 backdrop-blur-lg"
            >
              <div className="flex flex-col py-2">
                <Button
                  variant="ghost"
                  className="justify-start text-left hover:opacity-80 transition-opacity"
                  onClick={() => handleMenuItemClick("projects")}
                >
                  Projects
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start text-left hover:opacity-80 transition-opacity"
                  onClick={() => handleMenuItemClick("experience")}
                >
                  Work
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start text-left hover:opacity-80 transition-opacity"
                  onClick={() => handleMenuItemClick("about")}
                >
                  About
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}