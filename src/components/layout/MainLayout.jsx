import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useAppContext } from "../../context/AppContext.jsx";

// Bungkus semua halaman dengan Navbar di atas dan Footer di bawah,
// supaya tidak perlu tulis ulang Navbar/Footer di setiap file page.

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export default function MainLayout({ children }) {
  const { darkMode } = useAppContext();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex min-h-screen flex-col bg-neutral-50 dark:bg-neutral-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
