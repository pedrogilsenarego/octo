import { i18n } from "../translations/i18n";

export const fabrics: FabricsType[] = [
  {
    id: 0,
    title: i18n.t("constants.fabrics.1"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1682070876/Octo/patterns/1-2_i4s044.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070876/Octo/patterns/1-2_i4s044.webp",
  },
  {
    id: 1,
    title: i18n.t("constants.fabrics.2"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-4_srt8lh.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-4_srt8lh.webp",
  },
  {
    id: 2,
    title: i18n.t("constants.fabrics.3"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-3_qlqzjr.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-3_qlqzjr.webp",
  },
  {
    id: 3,
    title: i18n.t("constants.fabrics.4"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1682070876/Octo/patterns/1-1_edzth5.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070876/Octo/patterns/1-1_edzth5.webp",
  },
  {
    id: 4,
    title: i18n.t("constants.fabrics.5"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-6_vwrygd.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-6_vwrygd.webp",
  },
  {
    id: 5,
    title: i18n.t("constants.fabrics.6"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1_xfn4yn.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1_xfn4yn.webp",
  },
  {
    id: 6,
    title: i18n.t("constants.fabrics.7"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-7_bwowqi.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-7_bwowqi.webp",
  },
  {
    id: 7,
    title: i18n.t("constants.fabrics.8"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-5_kxujkw.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682070875/Octo/patterns/1-5_kxujkw.webp",
  },
];

export type FabricsType = {
  id: number;
  title: string;
  image: string;
  icon:string
};
