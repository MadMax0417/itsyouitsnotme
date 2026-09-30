export function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 pb-12 pt-5">
      <div className="flex flex-col items-center justify-between gap-5 rounded-[26px] bg-[#1b2036] px-6 py-8 text-white md:flex-row">
        <div>
          <div className="text-3xl font-black tracking-[-0.06em] text-white">Need an excuse right this second?</div>
          <p className="mt-2 text-sm text-[#d9dceb]">
            Zero signup. Zero red flags. Free forever because shutting down a bad one is a public service.
          </p>
        </div>
        <a
          href="#excuse-generator"
          className="rounded-full bg-[#ff4fb0] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_10px_22px_rgba(255,79,176,0.35)]"
        >
          Generate a text line
        </a>
      </div>
    </section>
  );
}
