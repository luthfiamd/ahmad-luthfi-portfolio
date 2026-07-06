import { useState, useEffect } from "react";

/**
 * Hook untuk fetch data dan otomatis mengelola state loading/error/data.
 * Dipakai supaya komponen tidak perlu nulis ulang logic try/catch/loading tiap kali fetch data.
 *
 * Contoh: const { data, loading, error } = useFetch(() => api.get("/users"));
 *
 * @param {() => Promise<any>} fetchFn - fungsi yang mengembalikan Promise (biasanya panggilan api.get/post)
 * @param {any[]} [deps] - dependency array, sama seperti useEffect. Isi ulang fetch kalau berubah.
 */
export function useFetch(fetchFn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchFn();
        if (!isCancelled) setData(result);
      } catch (err) {
        if (!isCancelled) setError(err);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    load();

    // Kalau komponen unmount sebelum fetch selesai, hasil fetch diabaikan
    // (mencegah "setState on unmounted component" warning)
    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}
