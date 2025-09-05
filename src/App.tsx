import "./App.css";
import Header from "./components/header";
import BtnStroke from "./components/btn_stroke";

function App() {
  return (
    <>
      <Header />
      <div
        className="bg-white w-full h-[45vh] fixed bg-cover bg-center bg-no-repeat md:h-screen justify-center items-center flex relative"
        style={{ backgroundImage: "url('/src/assets/images/local_bg.png')" }}
      >
        <h1 className="text-5xl font-bold text-white">Welcome</h1>
      </div>

      <div className="w-full p-4 ph-10 justify-center  ">
        <h1 className="text-3xl font-bold text-white relative">Welcome</h1>
        <p className="text-white relative m-4">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto.{" "}
        </p>
        <BtnStroke />
      </div>
    </>
  );
}

export default App;
