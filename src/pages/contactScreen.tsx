import Header from "../components/header";
import Footer from "../components/footer";
import MainBanner from "../components/mainBanner";
import useWindowWidth from "../utils/windowWidth";

export default function ContactScreen() {
  const windWith = useWindowWidth();
  return (
    <body>
      <Header />
      <main>
        <MainBanner
          title="Contactanos"
          subtitle={[" ", " "]}
          btn={false}
          Size="text-5xl md:text-8xl lg:text-[200px] md:pt-20"
        />
      </main>
      <Footer />
    </body>
  );
}
