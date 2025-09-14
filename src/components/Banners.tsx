import type { dataItemsImg } from "../data/itemsImg";
import BtnStroke from "./btn_stroke";

export interface BannersProps {
  btn?: boolean;
  data: dataItemsImg[];
}

export default function Banners({ btn, data }: BannersProps) {
  //esto es para las direcciones y que los banners se alternen. true es izquierda a derecha y false es derecha a izquierda

  return (
    <div className="grid grid-cols-1 gap-10 mt-28 mb-10">
      {data.map((banner: dataItemsImg) => (
        <div
          style={{ backgroundImage: `url(${banner.bgImg})` }}
          className="flex bg-cover bg-center bg-no-repeat h-48 md:h-80 lg:h-[640px] items-center"
        >
          {banner.direction ? (
            <div
              className={`flex justify-between w-11/12 md:w-3/5 gap-x-12 mx-auto items-center ${
                btn && "ml-6 mr-14"
              }`}
            >
              <img
                src={banner.img}
                className={`w-2/5 md:w-96 lg:w-[416px] m-0 p-0 -translate-y-6`}
              />
              <div className="flex flex-col gap-y-2">
                <h2 className="text-white lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                  {banner.text}
                </h2>
                {btn && (
                  <BtnStroke Size="h-4 mt-4 w-32" color="white">
                    Ver más
                  </BtnStroke>
                )}
              </div>
            </div>
          ) : (
            <div
              className={`flex justify-between w-11/12 md:w-3/5 gap-x-12 mx-auto items-center ${
                btn && "ml-14 mr-6"
              }`}
            >
              <div className="flex justify-center flex-col gap-y-2">
                <h2 className="text-white lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                  {banner.text}
                </h2>
                {btn && (
                  <BtnStroke Size="h-4 mt-4 w-32" color="white">
                    Ver más
                  </BtnStroke>
                )}
              </div>
              <img
                src={banner.img}
                className={`w-1/2 md:w-96 lg:w-[416px] m-0 p-0 -translate-y-6`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
