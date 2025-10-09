import * as React from "react"
import { cn } from "@/lib/utils"

interface SeparatorProps {
  className?: string;
}

function Separator({ className }: SeparatorProps) {
  return (
    <div className={cn("bg-[repeating-linear-gradient(45deg,#000_0px,#000_7px,#1C1C1F_7px,#1C1C1F_8px)] h-10 border-t border-b border-[#1C1C1F] font-space-grotesk", className)}></div>
  )
}

export { Separator }