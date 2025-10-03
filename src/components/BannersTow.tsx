import type { dataItemsImg } from "../data/itemsImg";
import BtnStroke from "./btn_stroke";

interface BannerSectionProps {
  banner: dataItemsImg;
  btn?: boolean;
  reverse?: boolean;
  winWidth: number;
}

export default function BannerSection({
  banner,
  btn,
  reverse,
  winWidth,
}: BannerSectionProps) {
  return (
    <div
      style={{ backgroundImage: `url(${banner.bgImg})` }}
      className="bg-cover bg-center bg-no-repeat py-12 px-6 md:px-20 lg:px-6 lg:max-h-[750px] md:max-h-[500px] "
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 items-center gap-9  md:gap-32  max-w-7xl mx-auto ${
          reverse ? " md:flex md:flex-row-reverse md:gap-10 lg:gap-48" : ""
        }`}
      >
        {/* Imagen */}
        <div className="flex justify-center md:justify-start">
          <img
            src={banner.img}
            alt={banner.text}
            className="z-100 w-full max-w-[300px] object-cover rounded-xl shadow-lg
            md:max-w-[2000px] lg:-translate-y-24 md:-translate-y-10"
          />
        </div>

        {/* Texto */}
        <div
          className={`text-white text-center md:text-left flex flex-col items-center md:items-center ${
            reverse
              ? "lg:translate-x-20 xl:-translate-x-10 md:justify-end  justify-start"
              : ""
          } `}
        >
          <h2 className="text-2xl md:text-2xl lg:text-5xl font-bold">
            {banner.text}
          </h2>
          {winWidth >= 800 && (
            <p className="mt-10 items-center text-center text-light  lg:text-3xl text-1xl max-w-md">
              {banner.data}
            </p>
          )}
          {btn && (
            <div className="mt-6">
              <BtnStroke Size="h-4 w-32" color="white">
                Ver más
              </BtnStroke>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
