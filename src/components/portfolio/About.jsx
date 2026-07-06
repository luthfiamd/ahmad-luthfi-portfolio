import Card from "../ui/Card.jsx";
import { useI18n } from "../../i18n/useI18n.js";

export default function About() {
  const { t, profile } = useI18n();

  return (
    <section id="about" className="scroll-mt-20 border-b border-neutral-200 py-16 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">{t.about.title}</h2>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">{t.about.subtitle}</p>

        <Card className="mt-6">
          <dl className="grid gap-6 sm:grid-cols-2">
            {profile.quickFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-[15px] text-neutral-800 dark:text-neutral-200">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>
    </section>
  );
}
