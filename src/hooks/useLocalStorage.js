import { useState, useEffect } from "react";

/**
 * Hook seperti useState biasa, tapi otomatis tersimpan di localStorage
 * jadi datanya tidak hilang walau halaman di-refresh.
 *
 * Contoh: const [theme, setTheme] = useLocalStorage("theme", "light");
 *
 * @param {string} key - nama key di localStorage
 * @param {*} initialValue - nilai awal kalau belum ada data tersimpan
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localStorage bisa gagal (misal mode private browsing) — aman diabaikan
    }
  }, [key, value]);

  return [value, setValue];
}
