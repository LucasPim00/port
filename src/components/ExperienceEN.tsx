export default function Experience() {
  return (
    <section id="experience" className="p-4 w-full scroll-mt-24">

      <div className="relative bg-[rgba(100,100,100,0.2)] rounded-2xl shadow-lg p-6 border border-zinc-700">
        <h2 className="text-3xl font-bold text-white mb-2">Experiences</h2>
        <div className="h-2 w-80 bg-gradient-to-r from-red-400 to-white rounded-full mb-6" />
        <a
        href="/certificados/CURRICULO.pdf" 
        download
        className="absolute top-4 right-4 group"
        >
        <button className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg shadow-md transition-all relative">
          📄
          {/* Tooltip com a mensagem */}
          <span className="absolute -left-[250%] top-1/2 -translate-y-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            See my resume
          </span>
        </button>
        </a>

        <p className="text-white text-xl leading-relaxed">
        I don't yet have professional experience in the programming market, but I'm constantly learning and improving my skills.
        I'm looking for my first opportunity to apply my knowledge, collaborate with teams, and grow alongside the challenges of the real world of technology.
        <br></br>
        My goal is to build a career as a developer, starting on real projects and continually evolving as a professional.
        I intend to work on technology teams, learn from the day-to-day challenges, and eventually specialize in FullStack development.
        </p>
      </div>
    </section>
  );
}