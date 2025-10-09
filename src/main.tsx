import { Toaster } from "@/components/ui/sonner";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Landing from "./pages/Landing.tsx";
import "./types/global.d.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Landing />
    <Toaster />
  </StrictMode>
);
