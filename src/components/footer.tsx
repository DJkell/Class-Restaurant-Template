import React from "react";
import { data } from "../data/data";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black md:py-20 text-xl md:text-xl lg:text-3xl text-base/8">
      {/* Primera fila */}
      <div className="max-w-6xl mx-auto px-4 w-full flex flex-col md:flex-row md:justify-between md:gap-20">
        <div className="flex-1">
          <h3 className="font-bold mb-2 ">{data.name}</h3>
          <ul className="flex flex-col mb-5 md:gap-5">
            <Link to="/">Inicio</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/Contacto">Contactanos</Link>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold mb-2">Contacto</h3>

          <ul className="flex flex-col md:mb-8 md:gap-5">
            <li>Tel: {data.phone}</li>
            <li>Email: {data.email}</li>
            <li className="mt-5 font-bold ">Dirección:</li>
            {data.ubicacion.map((ubicacion) => (
              <>
                <li key={ubicacion.ubicacion}> {ubicacion.ubicacion}</li>
              </>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold mb-2 md:mt-0 mt-5">Síguenos</h3>
          <ul className="flex gap-4 justify-center">
            <li>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-400"
              >
                <Instagram size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Segunda fila */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="max-w-6xl mx-auto px-4 text-center ">
          © {new Date().getFullYear()} Restaurante. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
