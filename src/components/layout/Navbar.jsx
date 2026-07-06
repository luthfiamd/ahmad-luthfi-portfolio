import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { SITE } from "../../constants/config.js";
import { useAppContext } from "../../context/AppContext.jsx";
import { useI18n } from "../../i18n/useI18n.js";

// Navigasi atas untuk portofolio one-page: link mengarah ke section (anchor),
// bukan ke route terpisah. Tambahkan section baru di NAV_KEYS kalau perlu.

const NAV_KEYS = [
  { href: "#fit", key: "fit" },
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#projects", key: "projects" },
  { href: "#skills", key: "skills" },
  { href: "#contact", key: "contact" },
];

function LanguageSwitcher({ lang, setLang }) {
  return (
    <div className="flex items-center rounded-md border border-neutral-200 text-xs font-semibold dark:border-neutral-700">
      {["en", "id"].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`px-2 py-1 uppercase transition-colors ${
            lang === code
              ? "bg-primary-600 text-white"
              : "text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          } ${code === "en" ? "rounded-l-md" : "rounded-r-md"}`}
          aria-pressed={lang === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useAppContext();
  const { lang, setLang, t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
          {SITE.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_KEYS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              {t.nav[link.key]}
            </a>
          ))}

          <LanguageSwitcher lang={lang} setLang={setLang} />

          <button
            type="button"
            onClick={toggleDarkMode}
            className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <button
            type="button"
            onClick={toggleDarkMode}
            className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
            aria-label="Buka menu navigasi"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-neutral-200 bg-white px-6 py-3 md:hidden dark:border-neutral-800 dark:bg-neutral-950">
          <div className="flex flex-col gap-1">
            {NAV_KEYS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
              >
                {t.nav[link.key]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
