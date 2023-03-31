import { i18n } from "../translations/i18n";
import fabric1 from "../assets/fabrics/vichyPowderPink.png";
import fabric2 from "../assets/fabrics/vichyClassic.png";
import fabric3 from "../assets/fabrics/floralPowderPink.png";
import fabric4 from "../assets/fabrics/floralClassic.png";
import fabric5 from "../assets/fabrics/octos.png";
import fabric6 from "../assets/fabrics/white.png";
import fabric7 from "../assets/fabrics/waffleStone.png";

export const fabrics: FabricsType[] = [
  {
    value: "0",
    title: i18n.t("constants.fabrics.1"),
    image: fabric1,
  },
  {
    value: "1",
    title: i18n.t("constants.fabrics.2"),
    image: fabric2,
  },
  {
    value: "2",
    title: i18n.t("constants.fabrics.3"),
    image: fabric3,
  },
  {
    value: "3",
    title: i18n.t("constants.fabrics.4"),
    image: fabric4,
  },
  {
    value: "4",
    title: i18n.t("constants.fabrics.5"),
    image: fabric5,
  },
  {
    value: "5",
    title: i18n.t("constants.fabrics.6"),
    image: fabric6,
  },
  {
    value: "6",
    title: i18n.t("constants.fabrics.7"),
    image: fabric7,
  },
];

type FabricsType = {
  value: string;
  title: string;
  image: string;
};
