import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import StackSection from "@/components/StackSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Taskbar from "@/components/Taskbar";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";

export default function Landing() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen w-full bg-[repeating-linear-gradient(45deg,#000_0px,#000_7px,#1C1C1F_7px,#1C1C1F_8px)]"
        >
          <Container>
            <div className="text-white">
              <Navbar />
              <HeroSection />
              <Heading heading="Skills" />
              <StackSection />
              <Separator className="my-12" />
              <Heading heading="Projects" showButton buttonLink="#" />
              <ProjectsSection />
              <Separator className="my-12" />
              <Heading heading="Experience" />
              <ExperienceSection />
              <Separator className="my-12" />
              <Heading heading="About Me" />
              <AboutSection />
              <Separator className="my-12" />
              <ContactSection />
              <Footer />
            </div>
          </Container>
        </motion.div>
      )}
      {!loading && <Taskbar />}
    </>
  );
}