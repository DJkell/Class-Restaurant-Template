import { MapPinned, CalendarClock, NotebookPen } from "lucide-react";
import { ScheduleImg } from "../data/itemsImg";
import BtnStroke from "./btn_stroke";
import useWindowWidth from "../utils/windowWidth";
import { data } from "../data/data";

export default function Schedule() {
  const winWidth = useWindowWidth();

  //valores de estilos para evitar repeticion
  const textStyle = "md:text-1xl lg:text-4xl text-left p-2 font-normal my-7 ";
  const titleStyle =
    "md:text-2xl lg:text-5xl font-bold text-left mb-10 flex gap-x-5";
  const positionBtn = "align-center mt-6 translate-y-1/2 -translate-x-1/4";
  const liStyle = "mb-4 xl:mb-4> 4xl:mb-20";

  //logica para el responsive
  if (winWidth > 900) {
    return (
      <div className="grid grid-cols-3 grid-flow-row-dense min-h-[250px] max-h-[1300px] bg-white justify-center py-20">
        <img
          className="min-w-[800px] max-w-[1100px] object-cover rounded-xl col-span-1 h-full w-full -translate-x-52 "
          src={ScheduleImg.img}
          alt=""
        />
        <div className="grid grid-cols-2 col-span-2 gap-y-20  min-h-[250px]">
          <ul className={textStyle}>
            <h2 className={titleStyle}>
              {" "}
              <CalendarClock size={70} />
              Horarios
            </h2>

            {data.Horario.map((item) => (
              <li className={liStyle} key={item}>
                {item}
              </li>
            ))}
          </ul>

          <ul className={textStyle}>
            <h2 className={titleStyle}>
              {" "}
              <NotebookPen size={70} /> Reserva ya
            </h2>

            <li className={liStyle}>WhatsApp: {data.phone}</li>
            <li className={liStyle}>{data.email}</li>
            <li className={positionBtn}>
              <BtnStroke borderSize=" border-8" color="black" Size=" xl:h-14">
                Ver Detalles
              </BtnStroke>
            </li>
          </ul>

          <ul className={textStyle}>
            <h2 className={titleStyle}>
              {" "}
              <MapPinned size={70} />
              Ubicación
            </h2>
            {data.ubicacion.map((item) => (
              <li className={liStyle}>{item.ubicacion}</li>
            ))}
            <li className={positionBtn}>
              <BtnStroke borderSize=" border-8" color="black" Size=" xl:h-14">
                Ver Detalles
              </BtnStroke>
            </li>
          </ul>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2424998933925!2d-69.94352168818489!3d18.472671682539183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89e4e39a2ab5%3A0x98df0764eaed40ca!2sBlueMall%20Santo%20Domingo!5e0!3m2!1ses-419!2sus!4v1759502904753!5m2!1ses-419!2sus"
              width="500"
              height="450"
              className="max-w-[500px]"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
  //vista para pantallas pequeñas
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
      <div className="pb-4">
        <BtnStroke>Ver Mas</BtnStroke>
      </div>
    </div>
  );
}
