// Input teks reusable, sudah termasuk label dan pesan error.

/**
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.value
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.onChange
 * @param {string} [props.type]
 * @param {string} [props.placeholder]
 * @param {string} [props.name]
 * @param {string} [props.error] - pesan error, tampil merah di bawah input kalau ada isinya
 */
export default function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  name,
  error,
}) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-lg border px-3.5 py-2.5 text-[15px] outline-none transition-colors placeholder:text-neutral-400 focus:ring-2 ${
          error
            ? "border-red-400 focus:ring-red-100"
            : "border-neutral-300 focus:border-primary-400 focus:ring-primary-100"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
