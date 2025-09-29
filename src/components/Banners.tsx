import useWindowWidth from "../utils/windowWidth";
import type { dataItemsImg } from "../data/itemsImg";
import BannerSection from "./BannersTow";

export interface BannersProps {
  btn?: boolean;
  data: dataItemsImg[];
}
/* import type { dataItemsImg } from "../data/itemsImg";
import BtnStroke from "./btn_stroke";
import useWindowWidth from "../utils/windowWidth";

export interface BannersProps {
  btn?: boolean;
  data: dataItemsImg[];
}

export default function Banners({ btn, data }: BannersProps) {
  const winWidth = useWindowWidth();
  //esto es para las direcciones y que los banners se alternen. true es izquierda a derecha y false es derecha a izquierda

  return (
    <div className="grid grid-cols-1 gap-10 mt-28 mb-10 lg:mt-60">
      {data.map((banner: dataItemsImg) => (
        <div
          style={{ backgroundImage: `url(${banner.bgImg})` }}
          className="flex bg-cover bg-center bg-no-repeat h-48 md:h-80 lg:h-[500px] xl:h-[500px] 2xl:h-[2000px] "
        >
          {banner.direction ? (
            <div
              className={`flex justify-between w-11/12 md:w-3/5 gap-x-2 mx-12 items-center md:gap-x-22  md:mx-20 ${
                btn && "ml-6 mr-14"
              }`}
            >
              <img
                src={banner.img}
                className={`w-2/5 md:w-80 lg:w-[416px] -translate-y-6 md:mr-20 lg:w-1/2 xl:w-3/5 xl:w-2/5 2xl:w-1/ 2xl:translate-x-1/2 2xl:max-w-[1900px]  2xl:min-w-[1000px]`}
              />
              <div className="flex flex-col">
                <h2 className="text-white lg:text-2xl xl:text-3xl 2xl:text-4xl md:text-3xl font-bold">
                  {banner.text}
                </h2>
                {winWidth > 1500 && (
                  <p className="text-white lg:text-xl xl:text-2xl 2xl:text-3xl md:text-lg mt-2">
                    {banner.data}
                  </p>
                )}
                {btn && (
                  <BtnStroke Size="h-4 mt-4 w-32" color="white">
                    Ver más
                  </BtnStroke>
                )}
              </div>
            </div>
          ) : (
            <div
              className={`flex justify-between w-11/12 md:w-3/5 gap-x-12 mx-12 2xl:mx-96  md:ml-40 md:mr-12 items-center  ${
                btn && "ml-14 mr-6"
              }`}
            >
              <div className="flex justify-center flex-col gap-y-2 2xl:pl-96">
                <h2 className="text-white lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold md:text-3xl ">
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
                className={`w-2/5 md:w-80 lg:w-3/5 -translate-y-6 md:translate-x-1/4 lg:translate-x-1/2 2xl:max-w-[1000px]`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
 */

export default function Banners({ btn, data }: BannersProps) {
  const winWidth = useWindowWidth();

  return (
    <div className="flex flex-col gap-20 mt-28 mb-10 lg:mt-60">
      {data.map((banner, index) => (
        <BannerSection
          key={index}
          banner={banner}
          btn={btn}
          winWidth={winWidth}
          reverse={!banner.direction}
        />
      ))}
    </div>
  );
}
