export interface dataType {
  name: string;
  phone: string;
  email: string;
  Horario: string;
  imstagram: string;
  tiktok: string;
  ubicacion1: { ubicacion1: string; link: string }[];
  delivery: { servicio1: string; link: string }[];
}

export const data = {
  name: "100 Montaditos",
  phone: "123-456-789",
  email: "l.castro@100montaditosrd.com",
  Horario: "Todos los días: 11 am a 11 pm.",
  imstagram: "https://www.instagram.com/100montaditosrd/",
  tiktok: "https://www.tiktok.com/@100montaditosrd",
  ubicacion: [
    {
      ubicacion: "Sucursal Galería 360",
      link: "https://goo.gl/maps/xyz123",
    },
    {
      ubicacion: "Sucursal Downtown Center",
      link: "https://goo.gl/maps/xyz123",
    },
  ],
  delivery: [
    {
      servicio: "Uber Eats ",
      link: "https://wa.me/123456789?text=Hola,%20quiero%20hacer%20un%20pedido",
    },
    {
      servicio: "Rappi",
      link: "https://wa.me/123456789?text=Hola,%20quiero%20hacer%20un%20pedido",
    },
  ],
};
