import { itemImg } from "../data/itemsImg";
import type { dataItemsImg } from "../data/itemsImg";

export default function Cuadricula() {
  return (
    <div className="inline-grid grid-cols-2 gap-3 md:gap-10 items-center mt-10 mx-4 md:mx-8">
      {itemImg.map((item: dataItemsImg) => (
        <div className="overflow-hidden max-w-full sm:w-60 md:w-96 lg:w-[446px] 2xl:w-[512px] aspect-[16/9]">
          <img
            className="object-cover object-center h-full w-full"
            src={item.img}
          />
        </div>
      ))}{" "}
    </div>
  );
}
