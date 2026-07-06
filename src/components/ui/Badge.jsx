// Label kecil untuk status, misal "Aktif", "Pending", "Ditolak".

const COLORS = {
  neutral: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
  success: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  warning: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  danger: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {keyof COLORS} [props.color] - "neutral" | "success" | "warning" | "danger"
 * @param {string} [props.className] - class tambahan kalau perlu
 */
export default function Badge({ children, color = "neutral", className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${COLORS[color]} ${className}`}
    >
      {children}
    </span>
  );
}
