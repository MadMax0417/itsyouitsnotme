export const navItems = ["Generate", "How it Works", "Toolbox", "Reviews", "Exit"];

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
          <a key={item} href="#" className="transition hover:text-[#ec4899]">
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button className="rounded-full border border-[#2f2a40] bg-transparent px-4 py-2 font-bold uppercase tracking-[0.12em] text-[#2f2a40]">
          Login
        </button>
        <button className="rounded-full bg-[#ff4fb0] px-5 py-2.5 font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_20px_rgba(255,79,176,0.35)]">
          Try free
        </button>
      </div>
    </header>
  );
}
