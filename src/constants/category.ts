

import { i18n } from "../translations/i18n";



export type Product = {
  documentID:string
  category:string
  title:string
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
      description: "Our Sleeping Bag is a lightweight and cozy option that's suitable for use from birth. It's designed to fit perfectly in the carrycot of a stroller, as well as in a cuckoo or cradle. The sleeping bag is equipped with two side loops for easy access and the top can be closed in a hood shape with two ties to protect your baby. The filling gives a soft and fluffy feel that's gentle to the touch.  Crafted in cotton and bambula. ",
      dimensions: "Size: 75 x 45 cm",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
    
     },
   
 },
 {
  id: 1,
   title: i18n.t("constants.categories.8"),
  icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061057/Octo/bedBumper/OCTO_Icones-08_xvw0tt_dwf439.webp",
  price: 34,
  moreInfo: {
    description: "Our baby cot protectors are designed to provide a safe and comfortable sleeping environment for your little one. <br/>Crafted in cotton.",
    dimensions: "120 x 60 x 30 cm",
    washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
  
   },
 
},
{
  id: 2,
   title: i18n.t("constants.categories.7"),
  icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061669/Octo/bedPocket/OCTO_Icones-07_linnwn_nrj2xy.webp",
  price: 34,
  moreInfo: {
    description: "Our baby cot organizer is designed to help you keep all your baby's essentials organized. Simply attach the organizer to the side of your baby's cot using the three secure straps and fill the pockets with all your baby's necessities. You'll have everything you need within arm's reach, making bedtime changes a breeze.Crafted in cotton.",
    dimensions: "46 x 24 cm",
    washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
  
   },
   },
  {
    id: 3,
    price: 34,
    title: i18n.t("constants.categories.5"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061410/Octo/blanket/OCTO_Icones-05_r7tfdz_mc0xoz.webp",
    moreInfo: {
      description: "Our baby blanket is the perfect solution for keeping your little one warm and cozy. Made with superior fabrics, our blanket is designed to provide maximum comfort for your baby. Simply wrap your little one in our soft and cozy blanket to keep them warm and comfortable, whether at home or on the go. Crafted in cotton.",
      dimensions: "95 x 75 cm",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
    
     },
       },
  
  {
    id: 4,
    title: i18n.t("constants.categories.3"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682060588/Octo/maternityBag/OCTO_Icon_maternity_bag_e8ckwo_np9s3k.webp",
    price: 34,
    moreInfo: {
      description: "Our maternity bag is not only practical and lightweight, but also versatile enough to double as a weekend bag. It features a waterproof interior, along with two interior pockets and baby bottle holders to help you stay organized while on the go. For added convenience, the bag comes with a detachable shoulder strap and our signature yellow zip closure. Crafted in cotton.  ",
      dimensions: "48 x 28 x 12 cm",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
    
     },
    },
  {
    id: 5,
    title: i18n.t("constants.categories.6"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061599/Octo/strollerBag/OCTO_Icon_stroller_bag_oujqtc_e1tfe9.webp",
    price: 34,
    moreInfo: {
      description: "This is our Stroller Pocket, designed to be lightweight and easy to carry. With a detachable shoulder strap and our signature yellow zip closure, it's padded to protect your belongings inside. The bag can be attached to your pram's handlebars with snaps or used as a compact walking bag. It’s perfect for daily use!  Crafted in cotton. ",
      dimensions: "30 x 20 x 10 cm",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
     },
    },
 
   {
    id: 6,
    title: i18n.t("constants.categories.2"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061258/Octo/pacifierClip/OCTO_Icones-02_i2gtuj_dgk1ip.webp",
    price: 345,
    moreInfo: {
      description: "The clip should be carefully inspected for any damage or deterioration before each use, and discarded immediately at the first sign of wear and tear. The clip should never be extended or attached to any loose part of the baby's clothing, as this could result in strangulation. It is only meant to be attached to clothing to prevent the dummy from falling on the floor and should not be used as a toy or teether. The clip should never be used when the baby is unsupervised in a cot, bed, or bassinet. Additionally, it should not be tumble-dried or ironed.",
      dimensions: "22cm",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
    
     },
    },


  {
    id: 7,
    title: i18n.t("constants.categories.1"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061167/Octo/ProductBandana/OCTO_Icones-09_mgzqwg_pxvxsd.webp",
    price: 34,
    moreInfo: {
      description: "Our washcloth is an excellent way to keep your baby's clothes dry from drool, ensuring maximum comfort and avoiding potential irritation. It fastens with a snap button and offers two different positions to adjust the size of the neck circumference. Crafted in cotton.",
      dimensions: "N.A.",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
     },
   },
  
  
 
  
 
  
  
  {
    id: 8,
    title: i18n.t("constants.categories.9"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061845/Octo/CollarBib/OCTO_Icon_folho_xhxyds_fu2ywx.webp",
    price: 34,
    moreInfo: {
      description: "Our necklaces are a stylish solution to keep your baby's clothes dry from drool and stains. They come in plain colors as well as our exclusive prints and feature a waterproof backing that absorbs and isolates moisture. Features a tie closure for an adjustable fit around the neck.  Crafted in cotton.",
      dimensions: "N.A.",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
    
     },
     },
  {
    id: 9,
      title: i18n.t("constants.categories.10"),
    icon: "https://res.cloudinary.com/daantetcr/image/upload/v1682061499/Octo/strollerPocket/OCTO_Icones-06_pquc35_ntxhtp.webp",
    price: 34,
    moreInfo: {
      description: "This is our Stroller Pocket, designed to be lightweight and easy to carry. With a detachable shoulder strap and our signature yellow zip closure, it's padded to protect your belongings inside. The bag can be attached to your pram's handlebars with snaps or used as a compact walking bag. It’s perfect for daily use! Crafted in cotton. ",
      dimensions: "Size: 30 x 20 x 10 cm",
      washing: "Suitable for washing in a washing machine. Do not exceed 30º to prevent damage to the fabric. Do not use a dryer"
    
     },
     },
 
]