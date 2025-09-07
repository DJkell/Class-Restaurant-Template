import { bannersImg } from "../data/itemsImg";
import type { dataItemsImg } from "../data/itemsImg";

export default function Banners() {
  //esto es para las direcciones y que los banners se alternen. true es izquierda a derecha y false es derecha a izquierda

  return (
    <div className="grid grid-cols-1 gap-10 mt-24 w-full">
      {bannersImg.map((banner: dataItemsImg) => (
        <div
          style={{ backgroundImage: `url(${banner.bgImg})` }}
          className="flex bg-cover bg-center bg-no-repeat h-40 relative overflow-visible  items-center gap-5 "
        >
          {banner.direction ? (
            <div className="w-full flex justify-end ">
              <img
                src={banner.img}
                className="absolute h-48 w-45 left-0 -top-5 ml-2 "
              />

              <h2 className="text-white relative right-10 ">{banner.text}</h2>
            </div>
          ) : (
            <div className="w-full flex justify-start">
              <h2 className="text-white relative left-10">{banner.text}</h2>
              <img
                src={banner.img}
                className="absolute h-54 w-44 right-0 -top-3 m-0 "
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
