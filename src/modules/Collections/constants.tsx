import { BlockProps } from "./Block";
import firstCollection from "../../assets/firstCollection.svg";

export const configBlackish: BlockProps = {
  pantoneProps: {
    title: "Neon Yellow",
    pantoneNumber: "389 C",
    rgb: [210, 229, 0],
    cymk: [23, 0, 100, 0]
  },
  firstRow: ['https://res.cloudinary.com/daantetcr/image/upload/v1681686420/Octo/collections/OCTO_SS23_280a_vpistr.webp', "https://res.cloudinary.com/daantetcr/image/upload/v1681686420/Octo/collections/OCTO_SS23_287a_jk0bwf.webp"],
  secondRow: {
    image: 'https://res.cloudinary.com/daantetcr/image/upload/v1681685727/Octo/collections/OCTO_SS23_643a_amrbgz.webp',
    jsx: <img
      draggable={false}
      style={{
        width: "100%",
        cursor: "pointer",

        objectFit: "cover",
        objectPosition: "center",
      }}
      src={firstCollection}
      alt=''
    />
  },
  thirdRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_007a_wkat6t.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682851/Octo/collections/OCTO_SS23_073a_nakdt6.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_039a_ers2yz.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_026a_u6hita.webp",
  ]
}