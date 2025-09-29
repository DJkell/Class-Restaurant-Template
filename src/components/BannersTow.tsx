import type { dataItemsImg } from "../data/itemsImg";
import BtnStroke from "./btn_stroke";
import useWindowWidth from "../utils/windowWidth";

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
      className="bg-cover bg-center bg-no-repeat py-12 px-6 md:px-20"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Imagen */}
        <div className="flex justify-center md:justify-start">
          <img
            src={banner.img}
            alt={banner.text}
            className="w-full max-w-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Texto */}
        <div className="text-white text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {banner.text}
          </h2>
          {winWidth >= 1500 && (
            <p className="mt-4 text-base md:text-lg lg:text-xl max-w-md">
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
