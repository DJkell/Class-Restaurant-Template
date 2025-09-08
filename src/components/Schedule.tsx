import { MapPinned, CalendarClock } from "lucide-react"; // iconos minimalistas
import { ScheduleImg } from "../data/itemsImg";
import BtnStroke from "./btn_stroke";

export default function Schedule() {
  return (
    <div className="*:text-white *:font-semibold *:text-lg *:text-left">
      <div className="relative flex items-center py-10 overflow-hidden">
        {/* Texto */}
        <div className="flex flex-col gap-8 pl-12 w-[80%]">
          <div>
            <div className="flex gap-5 items-center">
              <CalendarClock size={32} />
              <h2>Horarios</h2>
            </div>
            <p className="py-3 font-normal">Todos los días: 11 am a 11 pm.</p>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <MapPinned size={32} />
              <h2>Ubicación</h2>
            </div>
            <p className="py-3 font-normal">
              Sucursal Galería 360 Sucursal Downtown Center
            </p>
          </div>
        </div>

        {/* Imagen */}
        <img
          className="w-48 md:w-72 absolute -right-28 top-16 md:top-4"
          src={ScheduleImg.img}
          alt=""
        />
      </div>
      <div  className="pb-4">
        <BtnStroke>Ver Mas</BtnStroke>
      </div>
    </div>
  );
}
