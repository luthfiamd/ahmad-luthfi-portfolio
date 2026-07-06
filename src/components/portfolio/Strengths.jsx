import { Target, Workflow, Code2, CheckCircle2 } from "lucide-react";
import Card from "../ui/Card.jsx";
import { useI18n } from "../../i18n/useI18n.js";

const ICONS = [Target, Workflow, Code2];

export default function Strengths() {
  const { t, profile } = useI18n();

  return (
    <section id="fit" className="scroll-mt-20 border-b border-neutral-200 py-16 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">{t.strengths.title}</h2>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">{t.strengths.subtitle}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {profile.strengths.map((strength, index) => {
            const Icon = ICONS[index] ?? Target;
            return (
              <Card key={strength.role} className="flex flex-col">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-primary-50 p-2 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                    {strength.role}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{strength.description}</p>
                <ul className="mt-4 space-y-2">
                  {strength.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
