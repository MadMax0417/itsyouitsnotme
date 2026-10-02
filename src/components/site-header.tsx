const navItems = [
  { label: "Generate", href: "#excuse-generator" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Toolbox", href: "#toolkit" },
  { label: "Reviews", href: "#reviews" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-5 py-4 text-[11px] font-semibold text-[#2f2a40]">
      <div className="flex items-center gap-3">
        <div className="text-xl font-black tracking-[-0.08em] text-[#1b1a2b]">
          IT'S NOT YOU, IT'S ME
        </div>
      </div>

      <nav className="hidden items-center gap-7 md:flex">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="transition hover:text-[#ec4899]">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="#excuse-generator"
          className="rounded-full bg-[#ff4fb0] px-5 py-2.5 font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_20px_rgba(255,79,176,0.35)]"
        >
          Try now
        </a>
      </div>
    </header>
  );
}
