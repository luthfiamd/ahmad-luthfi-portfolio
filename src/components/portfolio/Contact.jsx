import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import Card from "../ui/Card.jsx";
import { SITE } from "../../constants/config.js";
import { useI18n } from "../../i18n/useI18n.js";

const CONTACT_LINKS = [
  { icon: Mail, label: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: SITE.phone, href: `tel:${SITE.phoneHref}` },
  { icon: Linkedin, label: "LinkedIn", href: SITE.linkedin, external: true },
];

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">{t.contact.title}</h2>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">{t.contact.subtitle}</p>

        <Card className="mt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            {CONTACT_LINKS.map(({ icon: Icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="flex items-center gap-2 text-[15px] font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
            <span className="flex items-center gap-2 text-[15px] text-neutral-500 dark:text-neutral-400">
              <MapPin className="h-4 w-4" />
              {SITE.location}
            </span>
          </div>
        </Card>
      </div>
    </section>
  );
}
