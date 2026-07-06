import { Mail, Linkedin, MapPin, Download } from "lucide-react";
import { SITE } from "../../constants/config.js";
import { useI18n } from "../../i18n/useI18n.js";

export default function Hero() {
  const { t, profile } = useI18n();

  return (
    <section
      id="top"
      className="border-b border-neutral-200 bg-gradient-to-b from-primary-50 to-white dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
          {SITE.role}
        </p>
        <h1 className="text-4xl font-bold text-neutral-900 sm:text-5xl dark:text-neutral-50">
          {SITE.name}
        </h1>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {SITE.targetRoles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:border-primary-800 dark:bg-primary-500/10 dark:text-primary-300"
            >
              {role}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="rounded-lg bg-primary-600 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-primary-700"
          >
            {t.hero.ctaContact}
          </a>
          <a
            href={SITE.cvFile}
            download
            className="flex items-center gap-2 rounded-lg border border-neutral-300 px-6 py-3 text-[15px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <Download className="h-4 w-4" />
            {t.hero.ctaDownload}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {SITE.location}
          </span>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-neutral-100">
            <Mail className="h-4 w-4" />
            {SITE.email}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
