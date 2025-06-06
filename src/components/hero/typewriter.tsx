"use client";

import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function Typewriter() {
  const words = [
    {
      text: "Olá,",
    },
    {
      text: "eu",
    },
    {
      text: "sou",
    },
    {
      text: "João Luís.",
      className: "text-blue-500 dark:text-blue-500",
      
    },
  ];
  return (
    <div className="">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
