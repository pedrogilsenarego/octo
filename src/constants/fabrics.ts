import { i18n } from "../translations/i18n";

export const fabrics: FabricsType[] = [
  {
    id: 0,
    title: i18n.t("constants.fabrics.1"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1-2_v0hv9b.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1-2_v0hv9b.webp",
  },
  {
    id: 1,
    title: i18n.t("constants.fabrics.2"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1-4_vtlnnm.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1-4_vtlnnm.webp",
  },
  {
    id: 2,
    title: i18n.t("constants.fabrics.3"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1-3_kjr3d3.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1-3_kjr3d3.webp",
  },
  {
    id: 3,
    title: i18n.t("constants.fabrics.4"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1-1_xpslbb.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1-1_xpslbb.webp",
  },
  {
    id: 4,
    title: i18n.t("constants.fabrics.5"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1-6_wnjgim.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1-6_wnjgim.webp",
  },
  {
    id: 5,
    title: i18n.t("constants.fabrics.6"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1_vfzhup.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1_vfzhup.webp",
  },
  {
    id: 6,
    title: i18n.t("constants.fabrics.7"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1-7_iwbuwa.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681991525/Octo/patterns/1-7_iwbuwa.webp",
  },
  {
    id: 7,
    title: i18n.t("constants.fabrics.8"),
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681991524/Octo/patterns/1-5_ggr4ed.webp",
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681991524/Octo/patterns/1-5_ggr4ed.webp",
  },
];

export type FabricsType = {
  id: number;
  title: string;
  image: string;
  icon:string
};
