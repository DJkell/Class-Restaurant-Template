export interface dataItemsImg {
  id: number;
  text?: string;
  img: string;
  bgImg?: string;
  direction?: boolean;
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
  },

  {
    id: 2,
    text: "MENU GENERAL",
    img: "/src/assets/images/bannersImg/image2.png",
    direction: false,
    bgImg: "/src/assets/images/bannersImg/Bbg2.png",
  },
  {
    id: 3,
    text: "MENU GENERAL",
    img: "/src/assets/images/bannersImg/image3.png",
    direction: true,
    bgImg: "/src/assets/images/bannersImg/Bbg1.png",
  },
];
