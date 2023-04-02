import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/OCTO_Icones-02.png";
import icon3 from "../assets/icons/OCTO_Icones-03.png";
import icon4 from "../assets/icons/OCTO_Icones-04.png";
import icon5 from "../assets/icons/OCTO_Icones-05.png";
import icon6 from "../assets/icons/OCTO_Icones-06.png";
import icon7 from "../assets/icons/OCTO_Icones-07.png";
import icon8 from "../assets/icons/OCTO_Icones-08.png";
import { i18n } from "../translations/i18n";

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
}


export const products:Product[] = [
  {
    uid: "string",
    price: 34,
    category: 0,
    icon:"https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 0
  },
  {
    uid: "string",
    price: 345,
    category: 0,
    icon:"https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 0
  },
  {
    uid: "string",
    price: 67,
    category: 0,
    icon:"https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
  
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 2
  },
  {
    uid: "string",
    price: 45,
    category: 1,
    icon:"https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
  
    images:["https://mcdn.wallpapersafari.com/medium/48/92/e0ntXE.jpg"],
   pattern: 2
  },
  {
    uid: "string",
    price: 45,
    category: 1,
    icon:"https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
  
    images:["https://mcdn.wallpapersafari.com/medium/14/73/mObqwW.jpg"],
   pattern: 2
  },
  {
    uid: "string",
    price: 78,
    category: 3,
    icon:"https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
  
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 1
  }

]

export const categories:Category[] = [
  {
    id: 0,
    title: i18n.t("constants.categories.1"),
    icon: icon1,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
  {
    id: 1,
    title: i18n.t("constants.categories.2"),
    icon: icon2,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
  {
    id: 2,
    title: i18n.t("constants.categories.3"),
    icon: icon3,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
  {
    id: 3,
    title: i18n.t("constants.categories.4"),
    icon: icon4,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
 },
  {
    id: 4,
    title: i18n.t("constants.categories.5"),
    icon: icon5,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
     },
  {
    id: 5,
      title: i18n.t("constants.categories.6"),
    icon: icon6,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
   },
  {
    id: 6,
     title: i18n.t("constants.categories.7"),
    icon: icon7,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
    },
  {
    id: 7,
     title: i18n.t("constants.categories.8"),
    icon: icon8,
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
 
  }
]