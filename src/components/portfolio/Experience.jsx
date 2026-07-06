import { CheckCircle2 } from "lucide-react";
import Card from "../ui/Card.jsx";
import Badge from "../ui/Badge.jsx";
import { useI18n } from "../../i18n/useI18n.js";

export default function Experience() {
  const { t, profile } = useI18n();

  return (
    <section id="experience" className="scroll-mt-20 border-b border-neutral-200 py-16 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">{t.experience.title}</h2>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">{t.experience.subtitle}</p>

        <div className="mt-8 space-y-6">
          {profile.experience.map((job) => (
            <Card key={job.role + job.period}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                    {job.role}
                  </h3>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {job.company}
                  </p>
                </div>
                <Badge color="neutral">{job.period}</Badge>
              </div>

              <p className="mt-3 text-neutral-600 dark:text-neutral-400">{job.summary}</p>

              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
                    {t.experience.responsibilities}
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
                    {t.experience.achievements}
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {job.achievements.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
