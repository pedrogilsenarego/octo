import icon1 from "../assets/icons/categorias/icon1.png";
import icon2 from "../assets/icons/categorias/OCTO_Icones-02.png";
import icon3 from "../assets/icons/categorias/OCTO_Icones-03.png";
import icon4 from "../assets/icons/categorias/OCTO_Icones-04.png";
import icon5 from "../assets/icons/categorias/OCTO_Icones-05.png";
import icon6 from "../assets/icons/categorias/OCTO_Icones-06.png";
import icon7 from "../assets/icons/categorias/OCTO_Icones-07.png";
import icon8 from "../assets/icons/categorias/OCTO_Icones-08.png";
import { i18n } from "../translations/i18n";
import iconBandanaVichyClassic from "../assets/icons/produtos/icones_padroes-bandana1.png"
import iconBandanaFloralPowderPink from "../assets/icons/produtos/icones_padroes-bandana2.png"
import iconBandanaOctos from "../assets/icons/produtos/icones_padroes-bandana3.png"
import iconBandanaPureWhite from "../assets/icons/produtos/icones_padroes-bandana4.png"
import iconBlanketVichyPowderPink from "../assets/icons/produtos/icones_padroes-blanket1.png"
import iconBlanketVichyClassic from "../assets/icons/produtos/icones_padroes-blanket2.png"
import iconBlanketPowderPink from "../assets/icons/produtos/icones_padroes-blanket3.png"
import iconBlanketFloralClassic from "../assets/icons/produtos/icones_padroes-blanket4.png"
import iconBlanketOctos from "../assets/icons/produtos/icones_padroes-blanket5.png"
import iconCollarBibVichyPowderPink from "../assets/icons/produtos/icones_padroes-collar1.png"
import iconCollarFloralPowderPink from "../assets/icons/produtos/icones_padroes-collar2.png"
import iconCollarVichyClassic from "../assets/icons/produtos/icones_padroes-collar3.png"
import iconCollarFloralClassic from "../assets/icons/produtos/icones_padroes-collar4.png"
import iconCollarOctos from "../assets/icons/produtos/icones_padroes-collar5.png"
import iconCollarPureWhite from "../assets/icons/produtos/icones_padroes-collar6.png"


export type Product = {
  uid: string
  category:number
  title?:string
  images: string[]
  price: number
  pattern:number
  icon:string
  
}

export type Category = {
id:number
title:string
icon:string
image:string
price: number
}


export const products:Product[] = [
  {
    uid: "ddwwqwdq",
    price: 34,
    category: 0,
    icon:iconBandanaVichyClassic,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 1
  },
  {
    uid: "strddqwing",
    price: 345,
    category: 0,
    icon:iconBandanaFloralPowderPink,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 2
  },
  {
    uid: "strwqqding",
    price: 67,
    category: 0,
    icon:iconBandanaOctos,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 4
  },
  {
    uid: "strwqqdding",
    price: 67,
    category: 0,
    icon:iconBandanaPureWhite,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 6
  },
  {
    uid: "strisdndddg",
    price: 45,
    category: 1,
    icon:"https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
  
    images:["https://mcdn.wallpapersafari.com/medium/48/92/e0ntXE.jpg","https://mcdn.wallpapersafari.com/medium/1/99/2z0L1F.jpg"],
   pattern: 2
  },
  {
    uid: "stqwdwqdsdqring",
    price: 45,
    category: 1,
    icon:"https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
  
    images:["https://mcdn.wallpapersafari.com/medium/14/73/mObqwW.jpg"],
   pattern: 0
  },
  {
    uid: "strdffsring",
    price: 78,
    category: 3,
    icon:"https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
  
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 1
  },
  {
    uid: "strdfsfsing",
    price: 78,
    category: 4,
    icon:iconBlanketVichyPowderPink,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 0
  },
  {
    uid: "strccding",
    price: 78,
    category: 4,
    icon:iconBlanketVichyClassic,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 1
  },
  {
    uid: "strsfding",
    price: 78,
    category: 4,
    icon:iconBlanketPowderPink,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 2
  },
  {
    uid: "strdinfrg",
    price: 78,
    category: 4,
    icon:iconBlanketFloralClassic,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 3
  },
  {
    uid: "strdferfing",
    price: 78,
    category: 4,
    icon:iconBlanketOctos,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 4
  },
  {
    uid: "strdfevcrfing",
    price: 748,
    category: 8,
    icon:iconCollarBibVichyPowderPink,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 0
  },
  {
    uid: "strdsafevcrfing",
    price: 748,
    category: 8,
    icon:iconCollarFloralPowderPink,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 2
  },
  {
    uid: "strsdsafevcrfing",
    price: 748,
    category: 8,
    icon:iconCollarVichyClassic,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 1
  },
  {
    uid: "strsdsafevcrfing",
    price: 748,
    category: 8,
    icon:iconCollarFloralClassic,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 3
  },
  {
    uid: "strsdsasafevcrfing",
    price: 748,
    category: 8,
    icon:iconCollarOctos,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 4
  },
  {
    uid: "strsdsassafevcrfing",
    price: 748,
    category: 8,
    icon:iconCollarPureWhite,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 5
  }


]

export const categories:Category[] = [
  {
    id: 0,
    title: i18n.t("constants.categories.1"),
    icon: icon1,
    price: 34,
    image: "https://tse1.mm.bing.net/th?id=OIP.nc7wUe2uWZXx6ZwCnEYcbQHaFS&pid=Api&rs=1&c=1&qlt=95&w=150&h=107"
  },
  {
    id: 1,
    title: i18n.t("constants.categories.2"),
    icon: icon2,
    price: 345,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
  {
    id: 2,
    title: i18n.t("constants.categories.3"),
    icon: icon3,
    price: 34,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
  {
    id: 3,
    title: i18n.t("constants.categories.4"),
    icon: icon4,
    price: 34,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
 },
  {
    id: 4,
    price: 34,
    title: i18n.t("constants.categories.5"),
    icon: icon5,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
     },
  {
    id: 5,
      title: i18n.t("constants.categories.6"),
    icon: icon6,
    price: 34,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
   },
  {
    id: 6,
     title: i18n.t("constants.categories.7"),
    icon: icon7,
    price: 34,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
    },
  {
    id: 7,
     title: i18n.t("constants.categories.8"),
    icon: icon8,
    price: 34,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
 
  },
  {
    id: 8,
    title: i18n.t("constants.categories.9"),
    icon: icon1,
    price: 34,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
]