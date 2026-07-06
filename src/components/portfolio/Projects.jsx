import { Layers } from "lucide-react";
import Card from "../ui/Card.jsx";
import Badge from "../ui/Badge.jsx";
import { useI18n } from "../../i18n/useI18n.js";

export default function Projects() {
  const { t, profile } = useI18n();

  return (
    <section id="projects" className="scroll-mt-20 border-b border-neutral-200 py-16 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">{t.projects.title}</h2>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">{t.projects.subtitle}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {profile.projects.map((project) => (
            <Card key={project.title}>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary-50 p-2 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                    {project.title}
                  </h3>
                  <Badge color="neutral" className="mt-1">
                    {project.tag}
                  </Badge>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="border-l-2 border-primary-200 pl-3 text-sm leading-relaxed text-neutral-700 dark:border-primary-800 dark:text-neutral-300"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
