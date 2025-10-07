import "../App.css";
import Header from "../components/header";
import Banners from "../components/Banners";
import { bannersImgMenu } from "../data/itemsImg";
import Footer from "../components/footer";
import MainBanner from "../components/mainBanner";

export default function MenuScreen() {
  return (
    <main className="bg-black justify-center">
      <Header />
      {/*Seccion de imagen de fondo con texto menu*/}
      <MainBanner
        title="Menu "
        subtitle={["Descarga la seccion del ", "catalogo 2025"]}
        btn={true}
        line={true}
        btnText="Ver pdf"
      />

      {/*Seccion de bienvenida con boton ver mas y cuadricula de imagenes*/}
      <Banners btn={true} data={bannersImgMenu} />
      <Footer />
    </main>
  );
}
