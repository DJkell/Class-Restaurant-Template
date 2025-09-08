import "./App.css";
import Header from "./components/header";
import BtnStroke from "./components/btn_stroke";
import Banners from "./components/Banners";
import Schedule from "./components/Schedule";
import Cuadricula from "./components/cuadricula";

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

        <Cuadricula />

        <Banners />
      </div>
      <Schedule />
      //Delivery Section. Esto despues lo modificare con el componente
      Bannerspara que lo genere pasando props.
      <div
        style={{
          backgroundImage: `url("/src/assets/images/bannersImg/Bbg1.png")`,
        }}
        className="flex bg-cover bg-center bg-no-repeat h-48 md:h-80 lg:h-[640px] items-center"
      >
        <div className="flex justify-center w-11/12 md:w-3/5 gap-x-12 mx-auto items-center">
          <div className="flex flex-col gap-y-6">
            <h2 className="text-white lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
              Pedidos Ya
            </h2>
            <h2 className="text-white lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
              Uber Eats
            </h2>
          </div>
          <img
            src="/src/assets/images/bannersImg/delivery.png"
            className={`w-52 -top-12 mt-10`}
          />
        </div>
      </div>
      //Este apartado es el espacio que va en blanco con el titulo inductivo.
      recordar modificar componentes para pasar los arreglos como argumentos
      para que sean dinamicos.
      <div className="bg-white w-full pb-10 pt-9 ">
        <h2 className="text-black text-2xl text-left font-semibold mb-9 ml-8">
          Dale a tus invitados un <br /> recuerdo que puedan <br />
          <b>degustar</b>
        </h2>
        <BtnStroke color={"black"}>Detalles</BtnStroke>
        <Cuadricula />
      </div>
    </>
  );
}

export default App;
