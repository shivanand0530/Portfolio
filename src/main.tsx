import { Toaster } from "@/components/ui/sonner";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Landing from "./pages/Landing.tsx";
import "./types/global.d.ts";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/next"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Landing />
    <SpeedInsights />
    <Analytics />
    <Toaster />
  </StrictMode>
);
