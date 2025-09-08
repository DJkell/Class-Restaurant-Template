import "./App.css";
import Header from "./components/header";
import BtnStroke from "./components/btn_stroke";
import { itemImg } from "./data/itemsImg";
import Banners from "./components/Banners";
import type { dataItemsImg } from "./data/itemsImg";
import { data } from "./data/data";
import type { dataType } from "./data/data";

function App() {
  return (
    <>
      <Header />
      <div
        className="bg-white w-full h-[45vh] fixed bg-cover bg-center bg-no-repeat mb-5 md:h-screen justify-center items-center flex relative"
        style={{ backgroundImage: "url('/src/assets/images/local_bg.png')" }}
      >
        <h1 className="text-5xl font-bold text-white">Welcome</h1>
      </div>
      <div className="w-full p-0 ph-10 justify-center  ">
        <h1 className="text-3xl font-bold text-white relative">Welcome</h1>
        <p className="text-white relative m-4">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto.{" "}
        </p>
        <BtnStroke />
        <div className="grid grid-cols-2 gap-5  m-10 justify-center items-center">
          {itemImg.map((item: dataItemsImg) => (
            <img src={item.img} />
          ))}
        </div>
        <Banners />
      </div>
    </>
  );
}

export default App;
