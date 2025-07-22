'use client';

export default function AboutMe() {
  return (
    <section id="sobre" className="p-4 w-full scroll-mt-24">
      <div className="bg-[rgba(100,100,100,0.2)] rounded-2xl shadow-lg p-6 border border-zinc-700">
        <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
        <div className="h-2 w-80 bg-gradient-to-r from-red-400 to-white rounded-full mb-6" />
        <p className="text-white text-xl leading-relaxed">
          I'm a <b>budding developer</b> with a keen interest in creative solutions.
        I'm always focused on my studies, developing projects, and seeking my first opportunity to join a team and apply my skills in practice.
        <br></br>
        I have expertise in web development, focusing on technologies such as <b>Next, Tailwind CSS</b>, and database integration using <b>Prisma ORM</b>. I've also studied other areas such as <b>QA, Data Science, Cloud Computing, and basic design.</b>
        </p>
      </div>
    </section>
  );
}