import { useAppContext } from "../context/AppContext.jsx";
import { translations } from "./translations.js";
import { profileEn } from "./profile.en.js";
import { profileId } from "./profile.id.js";

const PROFILES = { en: profileEn, id: profileId };

/**
 * Hook gabungan untuk akses bahasa aktif, string UI (t), dan konten CV (profile)
 * sesuai bahasa yang sedang dipilih.
 */
export function useI18n() {
  const { lang, setLang } = useAppContext();
  return {
    lang,
    setLang,
    t: translations[lang],
    profile: PROFILES[lang],
  };
}
