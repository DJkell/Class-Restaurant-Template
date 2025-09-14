import "../App.css";
import Header from "../components/header";
import BtnStroke from "../components/btn_stroke";
import Banners from "../components/Banners";
import { bannersImgMenu } from "../data/itemsImg";

export default function MenuScreen() {
  return (
    <main className="bg-black justify-center">
      <Header />
      {/*Seccion de imagen de fondo con texto menu*/}
      <div
        className="bg-black bg-cover w-full h-80  bg-center bg-no-repeat -mb-10 md:h-screen justify-center items-center flex flex-col pt-10"
        style={{
          backgroundImage: "url('/src/assets/images/bannersImg/fondomenu.png')",
        }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white">Menu</h1>

        {/*aqui esta el contenedor con la linea, texto y el boton*/}
        <div className=" w-64 flex flex-col justify-center items-center border-t-4 border-white mt-4 ">
          <p className="text-white text-center mt-4">
            Ver el menú principal de la
            <br />
            selección 2025
          </p>
          <BtnStroke color="white" Size="h-4 mt-4">
            Ver pdf
          </BtnStroke>
        </div>
      </div>
      <Banners btn={true} data={bannersImgMenu} />
    </main>
  );
}
