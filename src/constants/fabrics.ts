import { i18n } from "../translations/i18n";

export const fabrics: FabricsType[] = [{
  value: "0",
  label: i18n.t("constants.fabrics.0"),
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHeCVpj2zLfNxfpSzeN-nX3eGJlrkRFppY7A&usqp=CAU"
},
{
  value: "1",
  label: i18n.t("constants.fabrics.1"),
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkaQA6PkIR_hCrT0E_3ksrIemWd1_Rz7hD5zVB5CaBwosrml_B-rnZ-V5B330m0o4NWcg&usqp=CAU"
},
{
  value: "2",
  label: i18n.t("constants.fabrics.1"),
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KGhLOyr-SBCngVdAWnS1pXPnQsBkQsSfQQ&usqp=CAU"
},

]

type FabricsType = {
  value: string;
  label: string;
  image: string;
}

