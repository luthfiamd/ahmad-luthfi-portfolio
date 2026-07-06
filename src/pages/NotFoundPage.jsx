import { Link } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import { ROUTES } from "../constants/config.js";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-6xl font-bold text-primary-600 dark:text-primary-400">404</p>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Halaman yang kamu cari tidak ditemukan.
      </p>
      <Link to={ROUTES.HOME} className="mt-6">
        <Button>Kembali ke Home</Button>
      </Link>
    </div>
  );
}
