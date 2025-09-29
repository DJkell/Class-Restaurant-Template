import { itemImg } from "../data/itemsImg";
import type { dataItemsImg } from "../data/itemsImg";

export default function Cuadricula() {
  return (
    <div className="inline-grid grid-cols-2 gap-1 md:gap-1 items-center mt-10 mx-4 md:mx-8 md:mt-0 md:-translate-y-20">
      {itemImg.map((item: dataItemsImg) => (
        <div className="overflow-hidden max-w-full sm:w-60 md:w-96 lg:w-[700px] 2xl:max-w-[1000px] aspect-[16/9]">
          <img
            className="object-cover object-center h-full w-full"
            src={item.img}
          />
        </div>
      ))}{" "}
    </div>
  );
}
