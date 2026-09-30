export function SiteFooter() {
  return (
    <footer className="border-t border-[#dfe4ef] bg-[#f5f3ee]">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 py-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="text-xl font-black tracking-[-0.07em] text-[#1f1c2e]">IT'S NOT YOU, IT'S ME</div>
          <p className="mt-4 max-w-[260px] text-sm leading-6 text-[#564f60]">
            The internet's most compassionate breakup tool for people who want to leave quietly and still keep their dignity.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm text-[#564f60]">
            <span>✉</span>
            <span>hello@breakupsimplified.com</span>
          </div>
        </div>

        <div>
          <div className="text-xs font-black uppercase tracking-[0.18em] text-[#353050]">Toolkits</div>
          <ul className="mt-4 space-y-3 text-sm text-[#564f60]">
            <li>Excuse Generator</li>
            <li>Text Message Ideas</li>
            <li>Vibe Check</li>
            <li>The Hall of Shame</li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-black uppercase tracking-[0.18em] text-[#353050]">Legal & safety</div>
          <ul className="mt-4 space-y-3 text-sm text-[#564f60]">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Work with us</li>
            <li>Delete account</li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-black uppercase tracking-[0.18em] text-[#353050]">Need help?</div>
          <ul className="mt-4 space-y-3 text-sm text-[#564f60]">
            <li>Contact support</li>
            <li>Frequently asked</li>
            <li>Blog archive</li>
            <li>Press kit</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#dfe4ef]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-5 py-5 text-[11px] uppercase tracking-[0.15em] text-[#6b6475] md:flex-row">
          <span>© 2024 It's Not You, It's Me.</span>
          <span>Made with zero drama</span>
        </div>
      </div>
    </footer>
  );
}
