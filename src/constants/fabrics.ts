import { i18n } from "../translations/i18n";

export const fabrics: FabricsType[] = [
  {
    id: 0,
    title: i18n.t("constants.fabrics.1"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.00_va3rjj.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.00_va3rjj.webp",
  },
  {
    id: 1,
    title: i18n.t("constants.fabrics.2"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.04_hjuaa2.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.04_hjuaa2.webp",
  },
  {
    id: 2,
    title: i18n.t("constants.fabrics.3"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.02_cjqkjp.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.02_cjqkjp.webp",
  },
  {
    id: 3,
    title: i18n.t("constants.fabrics.4"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.01_uy5wx4.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.01_uy5wx4.webp",
  },
  {
    id: 4,
    title: i18n.t("constants.fabrics.5"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.02_1_kf3e8m.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.02_1_kf3e8m.webp",
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
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.03_evugam.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.03_evugam.webp",
  },
  {
    id: 7,
    title: i18n.t("constants.fabrics.8"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.03_1_wjecr7.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681646708/Octo/patterns/WhatsApp_Image_2023-04-13_at_16.32.03_1_wjecr7.webp",
  },
];

export type FabricsType = {
  id: number;
  title: string;
  image: string;
  icon:string
};
