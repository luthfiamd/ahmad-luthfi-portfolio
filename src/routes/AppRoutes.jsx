import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import { ROUTES } from "../constants/config.js";

// Semua rute (URL path -> halaman) didaftarkan di sini.
// Kalau bikin halaman baru: 1) buat file di src/pages, 2) tambahkan <Route> di bawah ini.

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
