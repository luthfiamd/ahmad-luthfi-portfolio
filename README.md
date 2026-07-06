# React Boilerplate

Template dasar React + Vite + Tailwind CSS + React Router, disusun supaya folder
dan file-nya mudah dibaca dan reusable — bahkan untuk orang yang baru belajar React.

## Cara menjalankan di lokal

```bash
cd react-boilerplate
npm install
npm run dev
```

Lalu buka `http://localhost:5173` di browser.

Build untuk production:

```bash
npm run build
npm run preview
```

---

## Struktur Folder & Kegunaannya

```
react-boilerplate/
├── .env.example         # contoh environment variable, copy jadi .env
├── index.html           # HTML dasar, titik masuk aplikasi
├── package.json         # daftar dependency & script (npm run dev, dll)
└── src/
    ├── main.jsx          # titik masuk React, tempat render <App />
    ├── App.jsx           # bungkus semua halaman dengan layout
    ├── index.css         # style global + import Tailwind
    │
    ├── components/       # semua komponen UI
    │   ├── ui/           # komponen kecil & generik (Button, Input, Card, dll)
    │   └── layout/        # komponen struktur halaman (Navbar, Footer, MainLayout)
    │
    ├── pages/            # 1 file = 1 halaman (HomePage, AboutPage, dll)
    ├── routes/           # pengaturan URL -> halaman mana yang tampil
    ├── hooks/            # custom hooks (logic yang bisa dipakai ulang)
    ├── context/          # global state (data yang perlu diakses banyak komponen)
    ├── services/         # semua kode yang komunikasi ke API/backend
    ├── utils/            # fungsi bantu kecil (format tanggal, format rupiah, dll)
    ├── constants/         # nilai tetap (nama app, URL API, daftar rute)
    └── assets/           # gambar, ikon, font, dll
```

### Kapan pakai folder yang mana?

| Kalau kamu mau...                                   | Taruh di...                          |
| ---------------------------------------------------- | -------------------------------------- |
| Bikin tombol/input/card yang dipakai di banyak tempat | `components/ui/`                       |
| Bikin Navbar/Footer/struktur halaman                  | `components/layout/`                   |
| Bikin halaman baru (misal `/produk`)                  | `pages/` lalu daftarkan di `routes/`    |
| Ambil data dari API                                   | `services/api.js`                      |
| Bikin logic yang dipakai ulang di beberapa komponen    | `hooks/`                               |
| Simpan data yang perlu diakses banyak komponen        | `context/`                             |
| Format angka/tanggal/teks                              | `utils/formatters.js`                  |
| Nilai tetap (nama app, URL, dll)                       | `constants/config.js`                  |

---

## Alur data sederhana (biar tidak bingung)

```
Halaman (pages/)
   │  pakai
   ▼
Komponen UI (components/ui/)
   │  ambil data lewat
   ▼
Hook (hooks/useFetch.js)
   │  yang manggil
   ▼
Service (services/api.js)
   │  yang fetch ke
   ▼
Backend / API
```

Kalau butuh state yang dipakai di banyak halaman (misal status login, dark mode),
pakai `context/AppContext.jsx` supaya tidak perlu oper props berlapis-lapis.

---

## Cara menambah halaman baru

1. Buat file baru di `src/pages/`, misal `ProdukPage.jsx`:

   ```jsx
   import Card from "../components/ui/Card.jsx";

   export default function ProdukPage() {
     return (
       <Card>
         <h1 className="text-2xl font-bold">Halaman Produk</h1>
       </Card>
     );
   }
   ```

2. Daftarkan URL-nya di `src/constants/config.js`:

   ```js
   export const ROUTES = {
     HOME: "/",
     ABOUT: "/about",
     PRODUK: "/produk", // baris baru
   };
   ```

3. Tambahkan `<Route>` di `src/routes/AppRoutes.jsx`:

   ```jsx
   import ProdukPage from "../pages/ProdukPage.jsx";
   // ...
   <Route path={ROUTES.PRODUK} element={<ProdukPage />} />
   ```

4. (Opsional) tambahkan link di Navbar (`src/components/layout/Navbar.jsx`), di array `NAV_LINKS`.

---

## Cara memakai komponen UI yang sudah ada

Semua komponen di `components/ui/` dibuat generik lewat props, jadi tinggal import dan pakai:

```jsx
import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import Card from "../components/ui/Card.jsx";
import Badge from "../components/ui/Badge.jsx";
import Modal from "../components/ui/Modal.jsx";
import Spinner from "../components/ui/Spinner.jsx";

<Button variant="primary" size="md" onClick={() => alert("klik!")}>
  Simpan
</Button>

<Input label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

<Badge color="success">Aktif</Badge>
```

## Cara memanggil API

Semua panggilan API lewat `src/services/api.js` supaya rapi dan konsisten:

```jsx
import { api } from "../services/api.js";
import { useFetch } from "../hooks/useFetch.js";

function ProdukList() {
  const { data, loading, error } = useFetch(() => api.get("/produk"));

  if (loading) return <Spinner />;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return <ul>{data.map((item) => <li key={item.id}>{item.nama}</li>)}</ul>;
}
```

Ubah `VITE_API_BASE_URL` di file `.env` untuk ganti alamat backend.

---

## Tech stack yang dipakai

- **React 18** — library UI
- **Vite** — dev server & build tool (cepat, hot-reload instan)
- **React Router** — untuk multi-halaman (routing)
- **Tailwind CSS** — styling lewat utility class
- **lucide-react** — kumpulan ikon
