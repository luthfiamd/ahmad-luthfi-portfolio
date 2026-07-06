// Kumpulan konstanta yang dipakai di banyak tempat.
// Taruh nilai tetap (fixed value) di sini supaya gampang diubah dari satu tempat.

export const APP_NAME = "Ahmad Luthfi";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export const ROUTES = {
  HOME: "/",
};

export const SITE = {
  name: "Ahmad Luthfi",
  role: "Product Manager",
  location: "Yogyakarta, Indonesia",
  email: "azunoakhfi@gmail.com",
  phone: "+62 822-1840-9228",
  phoneHref: "+6282218409228",
  linkedin: "https://www.linkedin.com/in/ahmad-luthfi-4033a31b4/", // TODO: ganti dengan URL LinkedIn asli kamu
  cvFile: "/Ahmad-Luthfi-CV.pdf",
  // Judul peran sengaja tidak diterjemahkan — ini keyword yang dicari recruiter/ATS.
  targetRoles: ["Product Manager", "Project Manager", "Technical Product Manager"],
};
