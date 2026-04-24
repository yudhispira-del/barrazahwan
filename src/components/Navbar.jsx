import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = ["beranda","tentang","layanan","portofolio","kontak"];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="font-bold text-lg">Barra Zahwan</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {menus.map((m) => (
            <Link key={m} to={m} smooth duration={500} className="cursor-pointer hover:text-blue-600">
              {m}
            </Link>
          ))}
        </div>

        {/* Button */}
        <Link
          to="kontak"
          smooth={true}
          offset={-80}
          duration={500}
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 cursor-pointer"
        >
          Hubungi Kami
        </Link>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4">
          {menus.map((m) => (
            <Link key={m} to={m} smooth duration={500} className="block py-2">
              {m}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}