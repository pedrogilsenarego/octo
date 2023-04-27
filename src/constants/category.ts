

import { i18n } from "../translations/i18n";



export type Product = {
  uid: string
  category:string
  title?:string
  images: string[]
  fotos:string[]
  price: number
  pattern:string
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

export const categories:Category[] = [
  {
    id: 0,
    title: i18n.t("constants.categories.4"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061335/Octo/sleepingBag/OCTO_Icones-04_bzp952_mtfe1u.webp",
    price: 34,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
    
     },
    image: "https://res.cloudinary.com/dmrll3fnf/image/upload/v1682601761/saco_cama_jdkr7o.webp"
 },
 {
  id: 1,
   title: i18n.t("constants.categories.8"),
  icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061057/Octo/bedBumper/OCTO_Icones-08_xvw0tt_dwf439.webp",
  price: 34,
  moreInfo: {
    description: "Teste",
    dimensions: "DIM",
    washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
  
   },
  image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"

},
{
  id: 2,
   title: i18n.t("constants.categories.7"),
  icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061669/Octo/bedPocket/OCTO_Icones-07_linnwn_nrj2xy.webp",
  price: 34,
  moreInfo: {
    description: "Teste",
    dimensions: "DIM",
    washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
  
   },
  image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
  {
    id: 3,
    price: 34,
    title: i18n.t("constants.categories.5"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061410/Octo/blanket/OCTO_Icones-05_r7tfdz_mc0xoz.webp",
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
    
     },
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1681157429/Octo/strollerPocket/OCTO_Icones-06_pquc35.png"
     },
  
  {
    id: 4,
    title: i18n.t("constants.categories.3"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682060588/Octo/maternityBag/OCTO_Icon_maternity_bag_e8ckwo_np9s3k.webp",
    price: 34,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
    
     },
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
  {
    id: 5,
    title: i18n.t("constants.categories.10"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061599/Octo/strollerBag/OCTO_Icon_stroller_bag_oujqtc_e1tfe9.webp",
    price: 34,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
     },
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
 
   {
    id: 6,
    title: i18n.t("constants.categories.2"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061258/Octo/pacifierClip/OCTO_Icones-02_i2gtuj_dgk1ip.webp",
    price: 345,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
    
     },
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },


  {
    id: 7,
    title: i18n.t("constants.categories.1"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061167/Octo/ProductBandana/OCTO_Icones-09_mgzqwg_pxvxsd.webp",
    price: 34,
    moreInfo: {
      description: "Our washcloth is an excellent way to keep your baby's clothes dry from drool, ensuring maximum comfort and avoiding potential irritation. It fastens with a snap button and offers two different positions to adjust the size of the neck circumference.<br/><br/> Crafted in cotton.",
      dimensions: "N.A.",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
     },
    image: "https://res.cloudinary.com/daantetcr/image/upload/v1680907360/Octo/ProductBandana/WhatsApp_Image_2023-04-07_at_23.41.06_r9zoev.jpg"
  },
  
  
 
  
 
  
  
  {
    id: 8,
    title: i18n.t("constants.categories.9"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061845/Octo/CollarBib/OCTO_Icon_folho_xhxyds_fu2ywx.webp",
    price: 34,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
    
     },
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
  },
  {
    id: 9,
      title: i18n.t("constants.categories.6"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061499/Octo/strollerPocket/OCTO_Icones-06_pquc35_ntxhtp.webp",
    price: 34,
    moreInfo: {
      description: "Teste",
      dimensions: "DIM",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
    
     },
    image: "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg"
   },
 
]