import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

// Contoh global state sederhana: dark mode on/off, bisa diakses dari komponen manapun
// tanpa perlu passing props berlapis-lapis (disebut "prop drilling").

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [lang, setLang] = useLocalStorage("lang", "en");

  const value = {
    darkMode,
    toggleDarkMode: () => setDarkMode((prev) => !prev),
    lang,
    setLang,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

/**
 * Hook untuk akses state global ini dari komponen manapun.
 * Contoh: const { darkMode, toggleDarkMode } = useAppContext();
 */
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext harus dipakai di dalam <AppProvider>");
  }
  return context;
}
