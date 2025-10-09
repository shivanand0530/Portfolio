import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex sm:flex-row items-center justify-center sm:justify-end ">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Shivananda K. All rights reserved.
          </p>
         
        </div>
      </div>
    </motion.footer>
  );
}
