import { useState } from "react";
import { bannersImg } from "../data/itemsImg";
import type { dataItemsImg } from "../data/itemsImg";

export default function Banners() {
  //esto es para las direcciones y que los banners se alternen. true es izquierda a derecha y false es derecha a izquierda

  return (
    <div>
      {bannersImg.map((banner: dataItemsImg) => (
        <div
          style={{ backgroundImage: `url(${banner.bgImg})` }}
          className="W-full "
        >
          <img src={banner.img} /> <h2>{banner.text}</h2>
        </div>
      ))}
    </div>
  );
}
