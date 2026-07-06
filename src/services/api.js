// Semua komunikasi ke backend/API lewat file ini.
// Tujuannya: kalau suatu saat ganti base URL, tambah header auth, dsb,
// cukup ubah di SATU tempat ini — tidak perlu ubah di setiap komponen.

import { API_BASE_URL } from "../constants/config.js";

/**
 * Wrapper kecil di atas fetch() supaya konsisten:
 * - otomatis prefix API_BASE_URL
 * - otomatis parse JSON
 * - otomatis lempar error kalau response gagal
 *
 * @param {string} endpoint - contoh: "/users" atau "/products/1"
 * @param {RequestInit} [options] - opsi fetch biasa (method, headers, body, dll)
 */
async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.message || `Request gagal: ${response.status}`);
  }

  // Response kosong (misal DELETE 204) tidak bisa di-parse sebagai JSON
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }
  return null;
}

// Contoh pemakaian: import { api } from "../services/api.js"; lalu api.get("/users")
export const api = {
  get: (endpoint) => request(endpoint, { method: "GET" }),
  post: (endpoint, body) => request(endpoint, { method: "POST", body: JSON.stringify(body) }),
  put: (endpoint, body) => request(endpoint, { method: "PUT", body: JSON.stringify(body) }),
  patch: (endpoint, body) => request(endpoint, { method: "PATCH", body: JSON.stringify(body) }),
  delete: (endpoint) => request(endpoint, { method: "DELETE" }),
};
