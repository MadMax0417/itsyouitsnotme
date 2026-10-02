import { SectionIntro } from "./section-intro";

const testimonials = [
  {
    quote:
      "I used The Silent Retreat excuse and got a surprisingly peaceful exit. My ex texted back, then vanished. It felt like closure.",
    author: "Sasha",
    id: "KJ",
  },
  {
    quote:
      "I opted the Corporate Retreat excuse. It was a little dramatic, but it worked beautifully and kept my dignity intact.",
    author: "Marco",
    id: "MD",
  },
  {
    quote:
      "The Astrology excuse gave me a clean, absurdly confident out. It was exactly the kind of final note I needed.",
    author: "Jordan",
    id: "TL",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="mx-auto w-full max-w-[1200px] px-5 py-12">
      <SectionIntro
        eyebrow="UNFILTERED REVIEWS"
        title="From the Newly Liberated"
        subtitle="Saved our users a combined 32,000 minutes of emotional overthinking."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.author} className="card-lift rounded-[22px] border border-[#d8d1d6] bg-white p-5 shadow-[0_12px_20px_rgba(25,22,35,0.05)]">
            <div className="mb-4 flex items-center gap-1 text-[#ffb703]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx}>★</span>
              ))}
            </div>
            <p className="text-base leading-7 text-[#2d2a40]">&ldquo;{item.quote}&rdquo;</p>
            <div className="mt-5 flex items-center justify-between border-t border-[#efebf0] pt-4">
              <div>
                <div className="text-sm font-black text-[#1f1c2d]">{item.author}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#6a6476]">{item.id}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
