// Tombol reusable. Dipakai di seluruh aplikasi supaya style tombol konsisten
// dan tidak perlu tulis ulang className setiap kali butuh tombol baru.

const VARIANTS = {
  primary: "bg-primary-600 text-white hover:bg-primary-700",
  secondary: "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
  outline:
    "border border-neutral-300 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const SIZES = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-[15px]",
  lg: "px-6 py-3 text-base",
};

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {keyof VARIANTS} [props.variant] - "primary" | "secondary" | "outline" | "danger"
 * @param {keyof SIZES} [props.size] - "sm" | "md" | "lg"
 * @param {"button" | "submit"} [props.type]
 * @param {boolean} [props.disabled]
 * @param {() => void} [props.onClick]
 * @param {string} [props.className] - class tambahan kalau perlu
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-lg font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {children}
    </button>
  );
}
