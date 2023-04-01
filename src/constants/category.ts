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
  value:string
  title:string
  image: string
  images:string[]
  price: number
  patterns:{
    value:string,
    image:string
  }[]
}

export const categories:Product[] = [
  {
    value: "0",
    price: 34,
    title: i18n.t("constants.categories.1"),
    image: icon1,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
    patterns:[{
      value:"0",
      image:"string"
    },{
      value:"2",
      image:"string"
    }]
  },
  {
    value: "1",
    price: 34,
    images:["https://tse1.mm.bing.net/th?id=OIP.C3MsUeg7ie6NSKSz_kW8gQHaE8&pid=Api&P=0","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   
    title: i18n.t("constants.categories.2"),
    image: icon2,
    patterns:[{
      value:"0",
      image:"string"
    }]
  },
  {
    value: "2",
    price: 34,
    images:["https://tse1.mm.bing.net/th?id=OIP.C3MsUeg7ie6NSKSz_kW8gQHaE8&pid=Api&P=0","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   
    title: i18n.t("constants.categories.3"),
    image: icon3,
    patterns:[{
      value:"0",
      image:"string"
    }]
  },
  {
    value: "3",
    price: 34,
    images:["https://tse1.mm.bing.net/th?id=OIP.C3MsUeg7ie6NSKSz_kW8gQHaE8&pid=Api&P=0","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   
    title: i18n.t("constants.categories.4"),
    image: icon4,
    patterns:[{
      value:"0",
      image:"string"
    }]
  },
  {
    value: "4",
    price: 34,
    images:["https://tse1.mm.bing.net/th?id=OIP.C3MsUeg7ie6NSKSz_kW8gQHaE8&pid=Api&P=0","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   
    title: i18n.t("constants.categories.5"),
    image: icon5,
    patterns:[{
      value:"0",
      image:"string"
    }]
  },
  {
    value: "5",
    price: 34,
    images:["https://tse1.mm.bing.net/th?id=OIP.C3MsUeg7ie6NSKSz_kW8gQHaE8&pid=Api&P=0","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   
    title: i18n.t("constants.categories.6"),
    image: icon6,
    patterns:[{
      value:"0",
      image:"string"
    }]
  },
  {
    value: "6",
    price: 34,
    images:["https://tse1.mm.bing.net/th?id=OIP.C3MsUeg7ie6NSKSz_kW8gQHaE8&pid=Api&P=0","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   
    title: i18n.t("constants.categories.7"),
    image: icon7,
    patterns:[{
      value:"0",
      image:"string"
    }]
  },
  {
    value: "7",
    price: 34,
    images:["https://tse1.mm.bing.net/th?id=OIP.C3MsUeg7ie6NSKSz_kW8gQHaE8&pid=Api&P=0","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   
    title: i18n.t("constants.categories.8"),
    image: icon8,
    patterns:[{
      value:"0",
      image:"string"
    }]
  }
]