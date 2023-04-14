import { i18n } from "../translations/i18n";

export const fabrics: FabricsType[] = [
  {
    id: 0,
    title: i18n.t("constants.fabrics.1"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681473276/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.00_hzsfc5.jpg",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681473276/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.00_hzsfc5.jpg",
  },
  {
    id: 1,
    title: i18n.t("constants.fabrics.2"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681473275/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.04_ymwdcd.jpg",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681473275/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.04_ymwdcd.jpg",
  },
  {
    id: 2,
    title: i18n.t("constants.fabrics.3"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681473275/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.02_sg9xr6.jpg",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681473275/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.02_sg9xr6.jpg",
  },
  {
    id: 3,
    title: i18n.t("constants.fabrics.4"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681473275/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.01_zpjgxc.jpg",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681473275/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.01_zpjgxc.jpg",
  },
  {
    id: 4,
    title: i18n.t("constants.fabrics.5"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681473275/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.02_1_zi6ewy.jpg",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681473275/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.02_1_zi6ewy.jpg",
  },
  {
    id: 5,
    title: i18n.t("constants.fabrics.6"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681473670/Octo/patterns/white_efwsto.png",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681473670/Octo/patterns/white_efwsto.png",
  },
  {
    id: 6,
    title: i18n.t("constants.fabrics.7"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681473275/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.03_yc3mzj.jpg",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681473275/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.03_yc3mzj.jpg",
  },
  {
    id: 7,
    title: i18n.t("constants.fabrics.8"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681473276/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.03_1_bvuo1p.jpg",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681473276/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.03_1_bvuo1p.jpg",
  },
];

export type FabricsType = {
  id: number;
  title: string;
  image: string;
  icon:string
};
