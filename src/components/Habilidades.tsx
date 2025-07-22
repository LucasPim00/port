"use client"

import { useState } from "react";


export default function Habilidades() {
  const skills = [
    { name: "HTML", icon: "/html.jpg", type: "front" },
    { name: "CSS", icon: "/css.png", type: "style" },
    { name: "JavaScript", icon: "/javascript.png", type: "front" },
    { name: "TypeScript", icon: "/ts.jpg", type: "front" },
    { name: "React", icon: "/react.jpg", type: "front" },
    { name: "Next.js", icon: "/next.jpg", type: "front" },
    { name: "Tailwind", icon: "/tailwind.jpg", type: "style" },
    { name: "Prisma", icon: "/prisma.jpg", type: "back" },
    { name: "SQL", icon: "/sql.png", type: "back" },
    { name: "Git", icon: "/git.png", type: "back" },
    { name: "Figma", icon: "/figma.png", type: "style" },
    { name: "Vercel", icon: "/vercel.jpg", type: "back" },
    ];
      const getGif = (type: string) => {
    if (type === "style") return "/fogo.gif";
    if (type === "front") return "/bloco.gif";
    return "/porta.gif";
  };

  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setActiveSkill(name);
    setTimeout(() => setActiveSkill(null), 5000); // 3 segundos
  };

  return (
    <section id="habilidades" className="p-4 w-full scroll-mt-24">
      <div className="bg-[rgba(100,100,100,0.2)] rounded-2xl shadow-lg p-6 border border-zinc-700">
        <h2 className="text-3xl font-bold text-white mb-2">Habilidades</h2>
        <div className="h-2 w-80 bg-gradient-to-r from-cyan-400 to-white rounded-full mb-6" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-white">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-between gap-2 bg-white/10 border border-cyan-500 rounded-xl p-4 hover:scale-105 transition relative"
              onMouseEnter={() => handleMouseEnter(skill.name)}
            >
              <div className="h-20 w-20 relative flex items-center justify-center overflow-hidden">
                {activeSkill === skill.name ? (
                  <img
                    src={getGif(skill.type)}
                    alt="animação"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-full w-full object-contain"
                  />
                )}
              </div>
              <span className="font-semibold text-center z-20">{skill.name}</span>
              <div className="absolute bottom-0 left-0 w-[98%] ml-1 h-[4px] bg-cyan-200 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}