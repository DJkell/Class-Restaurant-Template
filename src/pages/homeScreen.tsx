import Header from "../components/header";
import BtnStroke from "../components/btn_stroke";
import Banners from "../components/Banners";
import Schedule from "../components/Schedule";
import Cuadricula from "../components/cuadricula";
import useWindowWidth from "../utils/windowWidth";
import DeliveriSection from "../components/DeliveriSection";

import { bannersImg } from "../data/itemsImg";
import Footer from "../components/footer";

export default function HomeScreen() {
  const windWith = useWindowWidth();

  return (
    <main className="bg-black justify-center">
      <Header />
      {/*Seccion de imagen de fondo con texto Welcome*/}
      <div
        className="bg-white w-full h-96 bg-cover bg-center bg-no-repeat mb-5 md:h-screen md:max-h-[88vh] justify-center items-center flex "
        style={{ backgroundImage: "url('/src/assets/images/local_bg.png')" }}
      >
        <h1 className="text-5xl md:text-6xl xl:text-9xl font-bold text-white">
          Welcome
        </h1>
      </div>

      {/*Seccion de bienvenida con boton ver mas y cuadricula de imagenes*/}
      <div className=" w-full p-0 ph-10 justify-center text-center  ">
        <div className="bg-black md:w-4/5 mx-auto md:-translate-y-40 md:pt-10 ">
          <h1 className="lg:text-7xl text-3xl font-bold text-white relative lg:my-12">
            Hello you! welcome
          </h1>
          <p className="text-white relative m-4 lg:text-1xl lg:mx-40 lg:my-12 md:text-2xl ">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum es simplemente el texto de relleno de
            las imprentas y archivos de texto.Lorem Ipsum es simplemente el
            texto de relleno de las imprentas y archivos de texto.{" "}
          </p>
          {windWith < 800 && <BtnStroke>Ver Mas</BtnStroke>}
        </div>

        <Cuadricula />

        <Banners data={bannersImg} />
      </div>
      <Schedule />

      {/*Delivery Section. Esto despues lo modificare con el componente Banners para que lo genere pasando props.*/}
      <DeliveriSection />

      {/*Este apartado es el espacio que va en blanco con el titulo inductivo.
          recordar modificar componentes para pasar los arreglos como argumentos
          para que sean dinamicos.*/}
      {windWith < 800 && (
        <div className="bg-white w-full pb-10 pt-8 ">
          <h2 className="text-black text-2xl text-left font-semibold mb-9 ml-8  md:text-3xl mx-10 lg:align-center lg:text-5xl lg:text-center lg:my-16">
            Dale a tus invitados un recuerdo que puedan
            <b> degustar</b>
          </h2>
          <BtnStroke color={"black"}>Detalles</BtnStroke>
          <Cuadricula />
        </div>
      )}
      <Footer></Footer>
    </main>
  );
}
