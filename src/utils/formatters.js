// Kumpulan fungsi kecil untuk format data (tanggal, angka, teks, dll).
// Taruh fungsi murni (pure function) di sini — tidak ada state, tidak ada side effect.

/**
 * Format angka jadi format Rupiah, misal 15000 -> "Rp 15.000"
 * @param {number} value
 */
export function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

/**
 * Format tanggal ISO string jadi format Indonesia, misal "2026-07-06" -> "6 Juli 2026"
 * @param {string | Date} date
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Potong teks yang terlalu panjang dan tambahkan "..." di akhir.
 * @param {string} text
 * @param {number} maxLength
 */
export function truncateText(text, maxLength = 50) {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}
