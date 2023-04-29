import { i18n } from "../translations/i18n";
export const fabricsX= [
  "Vichy Powder Pink",
 "Vichy Classic",
 "Floral Powder Pink",
 "Floral Classic",
 "Octo's",
  "Pure White",
 "Waffle Stone",
  "Waffle Cream",
]
export const fabrics: FabricsType[] = [
  {
    id: 0,
    value: fabricsX[0],
    title: i18n.t("constants.fabrics.1"),
      icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070876/Octo/patterns/1-2_i4s044.webp",
  },
  {
    id: 1,
    value: fabricsX[1],
    title: i18n.t("constants.fabrics.2"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-4_srt8lh.webp",
  },
  {
    id: 2,
    value: fabricsX[2],
    title: i18n.t("constants.fabrics.3"),
      icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-3_qlqzjr.webp",
  },
  {
    id: 3,
    value: fabricsX[3],
    title: i18n.t("constants.fabrics.4"),
       icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070876/Octo/patterns/1-1_edzth5.webp",
  },
  {
    id: 4,
    value: fabricsX[4],
    title: i18n.t("constants.fabrics.5"),
      icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-6_vwrygd.webp",
  },
  {
    id: 5,
    value: fabricsX[5],
    title: i18n.t("constants.fabrics.6"),
      icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1_xfn4yn.webp",
  },
  {
    id: 6,
    value: fabricsX[6],
    title: i18n.t("constants.fabrics.7"),
     icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-7_bwowqi.webp",
  },
  {
    id: 7,
    value: fabricsX[7],
    title: i18n.t("constants.fabrics.8"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-5_kxujkw.webp",
  },
];

export type FabricsType = {
  id: number;
  title: string;
  value: string;
  icon:string
};

