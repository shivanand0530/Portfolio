"use client";
import React from "react";
import { ShootingStars } from "../components/ui/shootingStars";
import { StarsBackground } from "../components/ui/starsBackground";

export function ShootingStarsAndStarsBackground() {
  return (
    <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}