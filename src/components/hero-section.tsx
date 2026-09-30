export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 pb-8 pt-2">
      <div className="rounded-[20px] border border-[#1d1a2a] bg-[#f4f0ec] px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.11em] text-[#2e2a37] shadow-[0_1px_0_rgba(15,23,42,0.08)]">
        <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#ff4fb0] align-middle" />
        5,000+ people have already used our breakup scripts — 91% said they felt lighter after one send.
      </div>

      <div className="pt-10 text-center">
        <h1 className="mx-auto max-w-[980px] text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#1f1c2e] sm:text-6xl lg:text-[5.2rem]">
          The Gentlest Way to Say
          <span className="mt-2 block text-[#ff4fb0]">
            &quot;Never Speak to Me Again.&quot;
          </span>
        </h1>

        <div className="mt-4 flex justify-center">
          <div className="wavy-underline" />
        </div>

        <p className="mx-auto mt-5 max-w-[760px] text-base text-[#544d5d]">
          AI-powered gut-punch breakup lines, graceful exits, and soft-but-firm text scripts designed
          to help you heal while keeping your dignity intact.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#excuse-generator"
            className="rounded-full bg-[#ff4fb0] px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-white shadow-[0_10px_22px_rgba(255,79,176,0.3)]"
          >
            Generate an Excuse Now
          </a>
          <a
            href="#toolkit"
            className="rounded-full border border-[#2d2940] bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-[#1e1b2e]"
          >
            Browse all of Shame
          </a>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-[11px] font-medium uppercase tracking-[0.08em] text-[#56505d]">
          {[
            "No awkward phone calls",
            "Patented ego preservation",
            "Pre-written block messages included",
          ].map((tag) => (
            <span key={tag} className="rounded-full border border-[#d8d0d0] bg-white/70 px-3 py-1.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
