import { Mail, Phone, Linkedin } from "lucide-react";
import { SITE } from "../../constants/config.js";
import { useI18n } from "../../i18n/useI18n.js";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-neutral-200 bg-white py-8 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center">
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={`tel:${SITE.phoneHref}`}
            aria-label="Telepon"
            className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          © {new Date().getFullYear()} {SITE.name}. {t.footer.madeWith}
        </p>
      </div>
    </footer>
  );
}
