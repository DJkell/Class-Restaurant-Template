import React from "react";
import { data } from "../data/data";
import { Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-8 text-lg md:text-xl lg:text-2xl">
      {/* Primera fila */}
      <div className="max-w-6xl mx-auto px-4 w-full flex flex-col md:flex-row md:justify-between gap-10">
        <div className="flex-1">
          <h3 className="font-bold mb-2 ">{data.name}</h3>
          <p className="text-ms">
            El mejor en sabor precio y diversion a la vuelta de la esquina.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="font-bold mb-2">Contacto</h3>

          <ul className="text-ms mb-8">
            <li>Tel: {data.phone}</li>
            <li>Email: {data.email}</li>
            <li className="mt-2 font-bold ">Dirección:</li>
            {data.ubicacion.map((ubicacion) => (
              <>
                <li key={ubicacion.ubicacion}> {ubicacion.ubicacion}</li>
              </>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold mb-2">Síguenos</h3>
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
        <div className="max-w-6xl mx-auto px-4 text-center text-xs">
          © {new Date().getFullYear()} Restaurante. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
