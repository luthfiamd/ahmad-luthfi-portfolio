import { Loader2 } from "lucide-react";

// Indikator loading sederhana. Pakai ini di mana pun ada proses async (fetch data, submit form, dll).

/**
 * @param {object} props
 * @param {"sm" | "md" | "lg"} [props.size]
 */
export default function Spinner({ size = "md" }) {
  const sizes = { sm: "h-4 w-4", md: "h-6 w-6", lg: "h-10 w-10" };
  return <Loader2 className={`animate-spin text-primary-600 ${sizes[size]}`} />;
}
