import t7 from "../assets/t7.jpeg"

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
import iconCollarBibVichyPowderPink from "../assets/icons/produtos/icones_padroes-collar4.png"
import iconCollarFloralPowderPink from "../assets/icons/produtos/icones_padroes-collar5.png"
import iconCollarVichyClassic from "../assets/icons/produtos/icones_padroes-collar3.png"
import iconCollarFloralClassic from "../assets/icons/produtos/icones_padroes-collar2.png"
import iconCollarOctos from "../assets/icons/produtos/icones_padroes-collar1.png"
import iconCollarPureWhite from "../assets/icons/produtos/icones_padroes-collar6.png"
import iconBedBumperVichyPowderPink from "../assets/icons/produtos/icones_padroes-bedbumper1.png"
import iconBedBumperVichyClassic from "../assets/icons/produtos/icones_padroes-bedbumper2.png"
import iconBedBumperFloralPowderPink from "../assets/icons/produtos/icones_padroes-bedbumper3.png"
import iconBedBumperFloralClassic from "../assets/icons/produtos/icones_padroes-bedbumper4.png"
import iconBedBumperWaffleCream from "../assets/icons/produtos/icones_padroes-bedbumper5.png"
import iconBedPocketVichyPowderPink from "../assets/icons/produtos/icones_padroes-bedpocket1.png"
import iconBedPocketVichyClassic from "../assets/icons/produtos/icones_padroes-bedpocket2.png"
import iconBedPocketFloralPowderPink from "../assets/icons/produtos/icones_padroes-bedpocket3.png"
import iconBedPocketFloralClassic from "../assets/icons/produtos/icones_padroes-bedpocket4.png"
import iconBedPocketOctos from "../assets/icons/produtos/icones_padroes-bedpocket5.png"
import iconBedPocketPureWhite from "../assets/icons/produtos/icones_padroes-bedpocket6.png"
import iconMaternityBagVichyPowderPink from "../assets/icons/produtos/icones_padroes-maternitybag1.png"
import iconMaternityBagVichyClassic from "../assets/icons/produtos/icones_padroes-maternitybag2.png"
import iconMaternityBagOctos from "../assets/icons/produtos/icones_padroes-maternitybag3.png"
import iconMaternityWaffleStone from "../assets/icons/produtos/icones_padroes-maternitybag5.png"
import iconMaternityWaffleCream from "../assets/icons/produtos/icones_padroes-maternitybag4.png"
import iconsPacifierVichyPowderPink from "../assets/icons/produtos/icones_padroes-pacifier1.png"
import iconsPacifierVichyClassic from "../assets/icons/produtos/icones_padroes-pacifier2.png"
import iconsPacifierFloralPowderPink from "../assets/icons/produtos/icones_padroes-pacifier3.png"
import iconsPacifierFloralClassic from "../assets/icons/produtos/icones_padroes-pacifier4.png"
import iconsPacifierOctos from "../assets/icons/produtos/icones_padroes-pacifier5.png"
import iconsPacifierPureWhite from "../assets/icons/produtos/icones_padroes-pacifier6.png"


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
moreInfo: {
  description: string
  dimensions:string
  washing:string
 }
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
   pattern: 3
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
   pattern: 5
  },
  {
    uid: "strisdndddg",
    price: 45,
    category: 1,
    icon:iconsPacifierVichyPowderPink,
    images:["https://mcdn.wallpapersafari.com/medium/48/92/e0ntXE.jpg","https://mcdn.wallpapersafari.com/medium/1/99/2z0L1F.jpg"],
   pattern: 0
  },
  {
    uid: "stqwdwqdsdqring",
    price: 45,
    category: 1,
    icon:iconsPacifierVichyClassic,
    images:["https://mcdn.wallpapersafari.com/medium/14/73/mObqwW.jpg"],
   pattern: 1
  },
  {
    uid: "stqwdwqdvsdqring",
    price: 45,
    category: 1,
    icon:iconsPacifierFloralPowderPink,
    images:["https://mcdn.wallpapersafari.com/medium/14/73/mObqwW.jpg"],
   pattern: 2
  },
  {
    uid: "stqwdwasqdsdqring",
    price: 45,
    category: 1,
    icon:iconsPacifierFloralClassic,
    images:["https://mcdn.wallpapersafari.com/medium/14/73/mObqwW.jpg"],
   pattern: 3
  },
  {
    uid: "stqwdssxwasqdsdqring",
    price: 45,
    category: 1,
    icon:iconsPacifierOctos,
    images:["https://mcdn.wallpapersafari.com/medium/14/73/mObqwW.jpg"],
   pattern: 4
  },
  {
    uid: "stqwdqawasqdsdqring",
    price: 45,
    category: 1,
    icon:iconsPacifierPureWhite,
    images:["https://mcdn.wallpapersafari.com/medium/14/73/mObqwW.jpg"],
   pattern: 5
  },
  {
    uid: "ddwwhkjqwdq",
    price: 34,
    category: 2,
    icon:iconMaternityBagVichyPowderPink,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 0
  },
  {
    uid: "ddwwhakjqwdq",
    price: 34,
    category: 2,
    icon:iconMaternityBagVichyClassic,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 1
  },
  {
    uid: "ddwzwhakjqwdq",
    price: 34,
    category: 2,
    icon:iconMaternityBagOctos,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 4
  },
  {
    uid: "ddwzzawhakjqwdq",
    price: 34,
    category: 2,
    icon:iconMaternityWaffleStone,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 6
  },
  {
    uid: "ddwzzanmwhakjqwdq",
    price: 34,
    category: 2,
    icon:iconMaternityWaffleCream,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 7
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
    uid: "ddwsadfewfewqwdq",
    price: 34,
    category: 6,
    icon:iconBedPocketVichyPowderPink,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 0
  },
  {
    uid: "ddwsadfewfaewqwdq",
    price: 34,
    category: 6,
    icon:iconBedPocketVichyClassic,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 1
  },
  {
    uid: "ddwsaAdfewfaewqwdq",
    price: 34,
    category: 6,
    icon:iconBedPocketFloralPowderPink,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 2
  },
  {
    uid: "ddwsaaAdfewfaewqwdq",
    price: 34,
    category: 6,
    icon:iconBedPocketFloralClassic,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 3
  },
  {
    uid: "ddwsaaaxAdfewfaewqwdq",
    price: 34,
    category: 6,
    icon:iconBedPocketOctos,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 4
  },
  {
    uid: "ddwsaaaxAdafewfaewqwdq",
    price: 34,
    category: 6,
    icon:iconBedPocketPureWhite,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 5
  },
  {
    uid: "ddwwgweqwdq",
    price: 34,
    category: 7,
    icon:iconBedBumperVichyPowderPink,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 0
  },
  {
    uid: "ddwawgweqwdq",
    price: 34,
    category: 7,
    icon:iconBedBumperVichyClassic,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 1
  },
  {
    uid: "ddwawdsdgweqwdq",
    price: 34,
    category: 7,
    icon:iconBedBumperFloralPowderPink,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 2
  },
  {
    uid: "ddwawsdadsdgweqwdq",
    price: 34,
    category: 7,
    icon:iconBedBumperFloralClassic,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 3
  },
  {
    uid: "ddwadswsdadsdgweqwdq",
    price: 34,
    category: 7,
    icon:iconBedBumperWaffleCream,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg","https://mcdn.wallpapersafari.com/medium/48/97/EoDR6c.jpg"],
   pattern: 7
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
    uid: "strsdsafevcrfing",
    price: 748,
    category: 8,
    icon:iconCollarVichyClassic,
    images:["https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"],
   pattern: 1
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
    uid: "strsdsafevdcrfing",
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
  },
  {
    uid: "strsdsassaaaafevcrfing",
    price: 748,
    category: 9,
    icon:iconCollarPureWhite,
    images:["https://res.cloudinary.com/daantetcr/image/upload/v1681642953/Octo/strollerBag/originais/OCTO_SS23_517_fiorck.webp","https://res.cloudinary.com/daantetcr/image/upload/v1681642953/Octo/strollerBag/originais/OCTO_SS23_480_hgaxny.webp","https://res.cloudinary.com/daantetcr/image/upload/v1681642953/Octo/strollerBag/originais/OCTO_SS23_492_xh6zbz.webp","https://res.cloudinary.com/daantetcr/image/upload/v1681642953/Octo/strollerBag/originais/OCTO_SS23_501_q3qljp.webp","https://res.cloudinary.com/daantetcr/image/upload/v1681642953/Octo/strollerBag/originais/OCTO_SS23_753_oi9ttb.webp","https://res.cloudinary.com/daantetcr/image/upload/v1681642953/Octo/strollerBag/originais/OCTO_SS23_482_okn1cn.webp","https://res.cloudinary.com/daantetcr/image/upload/v1681642953/Octo/strollerBag/originais/OCTO_SS23_777_fjjxrx.webp"],
   pattern: 5
  }


]

export const categories:Category[] = [
  {
    id: 0,
    title: i18n.t("constants.categories.1"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681156622/Octo/ProductBandana/OCTO_Icones-09_mgzqwg.png",
    price: 34,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "washing"
     },
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1680907360/Octo/ProductBandana/WhatsApp_Image_2023-04-07_at_23.41.06_r9zoev.jpg"
  },
  {
    id: 1,
    title: i18n.t("constants.categories.2"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681157030/Octo/pacifierClip/OCTO_Icones-02_i2gtuj.png",
    price: 345,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "washing"
     },
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
  {
    id: 2,
    title: i18n.t("constants.categories.3"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681157109/Octo/maternityBag/OCTO_Icon_maternity_bag_e8ckwo.png",
    price: 34,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "washing"
     },
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
  {
    id: 3,
    title: i18n.t("constants.categories.4"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681157251/Octo/sleepingBag/OCTO_Icones-04_bzp952.png",
    price: 34,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "washing"
     },
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
 },
  {
    id: 4,
    price: 34,
    title: i18n.t("constants.categories.5"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681157322/Octo/blanket/OCTO_Icones-05_r7tfdz.png",
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "washing"
     },
    image: t7
     },
  {
    id: 5,
      title: i18n.t("constants.categories.6"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681157429/Octo/strollerPocket/OCTO_Icones-06_pquc35.png",
    price: 34,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "washing"
     },
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
   },
  {
    id: 6,
     title: i18n.t("constants.categories.7"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681157513/Octo/bedPocket/OCTO_Icones-07_linnwn.png",
    price: 34,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "washing"
     },
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
    },
  {
    id: 7,
     title: i18n.t("constants.categories.8"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681157586/Octo/bedBumper/OCTO_Icones-08_xvw0tt.png",
    price: 34,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "washing"
     },
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
 
  },
  {
    id: 8,
    title: i18n.t("constants.categories.9"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681156482/Octo/CollarBib/OCTO_Icon_folho_xhxyds.png",
    price: 34,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "washing"
     },
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
  {
    id: 9,
    title: i18n.t("constants.categories.10"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1681207357/Octo/strollerBag/OCTO_Icon_stroller_bag_oujqtc.png",
    price: 34,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "washing"
     },
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
]