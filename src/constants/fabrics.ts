import { i18n } from "../translations/i18n";
import fabric1 from "../assets/fabrics/vichyPowderPink.png";
import fabric2 from "../assets/fabrics/vichyClassic.png";
import fabric3 from "../assets/fabrics/floralPowderPink.png";
import fabric4 from "../assets/fabrics/floralClassic.png";
import fabric5 from "../assets/fabrics/octos.png";
import fabric6 from "../assets/fabrics/white.png";
import fabric7 from "../assets/fabrics/waffleStone.png";
import fabric8 from "../assets/fabrics/waffleCream.png"

export const fabrics: FabricsType[] = [
  {
    id: 0,
    title: i18n.t("constants.fabrics.1"),
    image: fabric1,
    icon: fabric1,
  },
  {
    id: 1,
    title: i18n.t("constants.fabrics.2"),
    image: fabric2,
    icon: fabric2,
  },
  {
    id: 2,
    title: i18n.t("constants.fabrics.3"),
    image: fabric3,
    icon: fabric3,
  },
  {
    id: 3,
    title: i18n.t("constants.fabrics.4"),
    image: fabric4,
    icon: fabric4,
  },
  {
    id: 4,
    title: i18n.t("constants.fabrics.5"),
    image: fabric5,
    icon: fabric5,
  },
  {
    id: 5,
    title: i18n.t("constants.fabrics.6"),
    image: fabric6,
    icon: fabric6,
  },
  {
    id: 6,
    title: i18n.t("constants.fabrics.7"),
    image: fabric7,
    icon: fabric7,
  },
  {
    id: 7,
    title: i18n.t("constants.fabrics.8"),
    image: fabric8,
    icon: fabric8,
  },
];

export type FabricsType = {
  id: number;
  title: string;
  image: string;
  icon:string
};
