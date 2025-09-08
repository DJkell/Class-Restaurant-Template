import "./App.css";
import Header from "./components/header";
import BtnStroke from "./components/btn_stroke";
import { itemImg } from "./data/itemsImg";
import Banners from "./components/Banners";
import type { dataItemsImg } from "./data/itemsImg";
import Schedule from "./components/Schedule";

function App() {
  return (
    <>
      <Header />
      <div
        className="bg-white w-full h-96 bg-cover bg-center bg-no-repeat mb-5 md:h-screen justify-center items-center flex"
        style={{ backgroundImage: "url('/src/assets/images/local_bg.png')" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white">Welcome</h1>
      </div>

      <div className="w-full p-0 ph-10 justify-center  ">
        <h1 className="text-3xl font-bold text-white relative">Welcome</h1>
        <p className="text-white relative m-4">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto.{" "}
        </p>
        <BtnStroke>Ver Mas</BtnStroke>
        <div className="inline-grid grid-cols-2 gap-3 md:gap-10 items-center mt-10 mx-4 md:mx-8">
          {itemImg.map((item: dataItemsImg) => (
            <div className="overflow-hidden max-w-full sm:w-60 md:w-96 lg:w-[446px] 2xl:w-[512px] aspect-[16/9]">
              <img
                className="object-cover object-center h-full w-full"
                src={item.img}
              />
            </div>
          ))}
        </div>
        <Banners />
      </div>
      <Schedule />
    </>
  );
}

export default App;
