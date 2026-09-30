type SectionIntroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function SectionIntro({ eyebrow, title, subtitle }: SectionIntroProps) {
  return (
    <div className="mb-8 text-center">
      <div className="text-xs font-black uppercase tracking-[0.18em] text-[#524d5f]">{eyebrow}</div>
      <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#1b1828]">{title}</h2>
      <p className="mx-auto mt-4 max-w-[680px] text-base text-[#584f5f]">{subtitle}</p>
    </div>
  );
}
