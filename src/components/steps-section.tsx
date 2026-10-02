const steps = [
  {
    number: "1",
    title: "Identify Their Red Flags",
    text: "Clarity starts here. Spot the warning signs early and keep your exit plan grounded in reality instead of hope.",
    tag: '#clap when they say: "I need space"',
  },
  {
    number: "2",
    title: "Dial Exit Velocity",
    text: "Move with calm certainty. A good breakup script is short, clear, and zero drama — no explaining required.",
    tag: "#quiet confidence",
  },
  {
    number: "3",
    title: "Copy, Send & No Dignity",
    text: "Hit send and walk away. A clean text preserves your peace and makes the final message harder to argue with.",
    tag: "#delete, block, breathe",
  },
];

import { SectionIntro } from "./section-intro";

export function StepsSection() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-[1200px] px-5 py-12">
      <SectionIntro
        eyebrow="EXIT PROTOCOL"
        title="How It Works in 3 Painless Steps"
        subtitle="Zero long talks in crowded diners. Zero “we need to talk” dread. Just a cleaner exit, one careful step at a time."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.number} className="card-lift rounded-[22px] border border-[#1d1a2a] bg-[#f6f4f1] p-4 shadow-[0_10px_22px_rgba(28,24,41,0.06)]">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff4fb0] text-lg font-black text-white">
              {step.number}
            </div>
            <h3 className="text-[1.5rem] font-black leading-tight tracking-[-0.05em] text-[#1d1a2d]">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#594f61]">{step.text}</p>
            <div className="mt-5 rounded-xl border border-[#d5cde2] bg-white/70 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#514b63]">
              {step.tag}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
