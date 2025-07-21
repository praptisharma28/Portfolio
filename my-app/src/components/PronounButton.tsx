"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const PronounButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "px-4 py-1 rounded-md font-medium transition-colors duration-300",
        hovered
          ? "bg-pink-300 text-black"
          : "bg-black text-white"
      )}
    >
      {hovered ? "her" : "she"}
    </motion.button>
  );
};

export default PronounButton;
