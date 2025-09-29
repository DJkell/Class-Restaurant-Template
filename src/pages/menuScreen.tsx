import "../App.css";
import Header from "../components/header";
import BtnStroke from "../components/btn_stroke";
import Banners from "../components/Banners";
import { bannersImgMenu } from "../data/itemsImg";
import Footer from "../components/footer";

export default function MenuScreen() {
  return (
    <main className="bg-black justify-center">
      <Header />
      {/*Seccion de imagen de fondo con texto menu*/}
      <div
        className="bg-black bg-cover w-full h-80  bg-center bg-no-repeat -mb-10 md:h-screen md:mb-20 justify-center items-center flex flex-col pt-10"
        style={{
          backgroundImage: "url('/src/assets/images/bannersImg/fondomenu.png')",
        }}
      >
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white">
          Menu
        </h1>

        {/*aqui esta el contenedor con la linea, texto y el boton*/}
        <div className=" w-64 flex flex-col justify-center items-center border-t-4 border-white mt-4 md:mt-10 md:w-2/3 md:mb-0 ">
          <p className="text-white text-center mt-4 md:text-3xl lg:md:text-4xl mb-2 md:mb-20">
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
      <Footer />
    </main>
  );
}
