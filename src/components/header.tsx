import { useState } from "react";
import { Menu, X } from "lucide-react"; // iconos minimalistas

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`z-50 w-full p-4 bg-white text-black flex fixed absolute justify-between items-center w-full ${
        open ? "bg-opacity-10" : "bg-white"
      }`}
    >
      <h1 className="text-lg font-bold z-50">logo</h1>

      {/* Botón de Menú hamburguesa con el botonsito de Menú y X */}
      <button onClick={() => setOpen(!open)} className="md:hidden z-50">
        {open ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Menú desplegable para los celulares*/}
      {open && (
        <div className="z-40 fixed inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center  mt-0">
          <ul className="space-y-6 text-2xl font-semibold">
            <li className="hover:text-yellow-400 cursor-pointer">Inicio</li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Menú Restaurante
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">Contacto</li>
          </ul>
        </div>
      )}
    </header>
  );
}
