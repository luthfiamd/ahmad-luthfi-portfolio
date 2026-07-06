import Card from "../ui/Card.jsx";
import Badge from "../ui/Badge.jsx";
import { useI18n } from "../../i18n/useI18n.js";

export default function Skills() {
  const { t, profile } = useI18n();

  return (
    <section id="skills" className="scroll-mt-20 border-b border-neutral-200 py-16 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">{t.skills.title}</h2>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">{t.skills.subtitle}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {profile.skills.map((group) => (
            <Card key={group.category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} color="neutral">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
