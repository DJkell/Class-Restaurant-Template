export interface dataItemsImg {
  id: number;
  text?: string;
  img: string;
  bgImg?: string;
  direction?: boolean;
  size?: string;
}
export const itemImg: dataItemsImg[] = [
  {
    id: 1,
    img: "/src/assets/images/image1.png",
  },
  {
    id: 2,
    img: "/src/assets/images/image2.png",
  },
  {
    id: 3,
    img: "/src/assets/images/image3.png",
  },
  {
    id: 4,
    img: "/src/assets/images/image4.png",
  },
];

export const bannersImg: dataItemsImg[] = [
  {
    id: 1,
    text: "MENU GENERAL",
    img: "/src/assets/images/bannersImg/image1.png",
    direction: true,
    bgImg: "/src/assets/images/bannersImg/Bbg1.png",
    // size: "h-64",
  },

  {
    id: 2,
    text: "MENU ",
    img: "/src/assets/images/bannersImg/image2.png",
    direction: false,
    bgImg: "/src/assets/images/bannersImg/Bbg2.png",
    // size: "h-52",
  },
  {
    id: 3,
    text: "MENU GENERAL",
    img: "/src/assets/images/bannersImg/image3.png",
    direction: true,
    bgImg: "/src/assets/images/bannersImg/Bbg1.png",
    // size: "h-52",
  },
  {
    id: 4,
    text: "BEBIDAS VARIADAS",
    img: "/src/assets/images/bannersImg/bebidas.png",
    direction: false,
    bgImg: "/src/assets/images/bannersImg/Bbg2.png",
    size: "h-52",
  },
];

export const ScheduleImg = {
  id: 1,
  img: "/src/assets/images/bannersImg/ImgSchedule.png",
};

export const DeliveryImg = [
  {
    id: 1,
    name: "general",
    imgbg: "/src/assets/images/bannersImg/delivery.png",
    pngImg: "/src/assets/images/bannersImg/LogoPedidosYa.png",
    pdfLink: "https://www.pedidosya.com.ar/",
  },
];
