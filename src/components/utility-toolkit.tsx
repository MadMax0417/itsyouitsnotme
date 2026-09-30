import { SectionIntro } from "./section-intro";

const utilityCards = [
  {
    icon: "◌",
    title: "The Ghosting Calculator",
    label: "Calculator",
    accent: "bg-[#f7d7ea]",
    list: ["Date Afterend", "Mute the Situation", "No follow-up text"],
  },
  {
    icon: "✓",
    title: "Vibe Check AI",
    label: "Diagnostic",
    accent: "bg-[#f2e7ff]",
    list: ["He is hot and cold", "Has a pattern", "Needs a boundary"],
  },
  {
    icon: "✦",
    title: "The Hall of Shame",
    label: "Community",
    accent: "bg-[#e8f7ef]",
    list: ["Publicly shared excuses", "Best one-liners", "Red-flag confessions"],
  },
];

export function UtilityToolkit() {
  return (
    <section id="toolkit" className="mx-auto w-full max-w-[1200px] px-5 py-8">
      <SectionIntro
        eyebrow="SURVIVAL TOOLKIT"
        title="Survival Utility Toolkit"
        subtitle="A curated set of tools built for the moments after the conversation goes sideways."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {utilityCards.map((card) => (
          <article key={card.title} className={`rounded-[22px] border border-[#1d1a2a] ${card.accent} p-4`}>
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-full border border-[#2f2a43] bg-white px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#332d45]">
                {card.label}
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2f2a43] bg-white text-lg font-black text-[#ff4fb0]">
                {card.icon}
              </div>
            </div>
            <h3 className="text-[2rem] font-black leading-[1.05] tracking-[-0.06em] text-[#1f1c2d]">{card.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#4f4a5d]">
              {card.list.map((line) => (
                <li key={line} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff4fb0]" />
                  {line}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
