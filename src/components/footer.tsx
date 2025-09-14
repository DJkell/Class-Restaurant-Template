import React from "react";
import { data } from "../data/data";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      {/* Primera fila */}
      <div className="max-w-6xl mx-auto px-4 w-full flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex-1">
          <h3 className="font-bold mb-2">{data.name}</h3>
          <p className="text-sm">
            El mejor en sabor precio y diversion a la vuelta de la esquina.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="font-bold mb-2">Contacto</h3>

          <ul className="text-sm">
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
          <ul className="flex gap-4">
            <li>
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-400"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                Twitter
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
