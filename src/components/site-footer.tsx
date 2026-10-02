export function SiteFooter() {
  return (
    <footer className="border-t border-[#dfe4ef] bg-[#f5f3ee]">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 py-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="text-xl font-black tracking-[-0.07em] text-[#1f1c2e]">IT&apos;S NOT YOU, IT&apos;S ME</div>
          <p className="mt-4 max-w-[260px] text-sm leading-6 text-[#564f60]">
            The internet&apos;s most compassionate breakup tool for people who want to leave quietly and still keep their dignity.
          </p>
        </div>

        <div>
          <div className="text-xs font-black uppercase tracking-[0.18em] text-[#353050]">Legal & safety</div>
          <ul className="mt-4 space-y-3 text-sm text-[#564f60]">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#dfe4ef]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-5 py-5 text-[11px] uppercase tracking-[0.15em] text-[#6b6475] md:flex-row">
          <span>© {new Date().getFullYear()} It&apos;s Not You, It&apos;s Me.</span>
          <a href="https://kiranraut.vercel.app/" target="_blank" rel="noopener noreferrer">Made with zero drama by Kiran</a>
        </div>
      </div>
    </footer>
  );
}
