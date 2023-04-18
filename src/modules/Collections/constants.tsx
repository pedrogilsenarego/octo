import { BlockProps } from "./Block";
import firstCollection from "../../assets/firstCollection.svg";
import { Typography } from "@mui/material";
import { Colors } from "../../constants/pallete";
import { i18n } from "../../translations/i18n";

export const configNeonYellow: BlockProps = {
  pantoneProps: {
    title: "Neon Yellow",
    pantoneNumber: "389 C",
    rgb: [210, 229, 0],
    cymk: [23, 0, 100, 0],
  },
  firstRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681686420/Octo/collections/NeonYellow/OCTO_SS23_280a_vpistr.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681686420/Octo/collections/NeonYellow/OCTO_SS23_287a_jk0bwf.webp",
  ],
  secondRow: {
    image:
      "https://res.cloudinary.com/daantetcr/image/upload/v1681685727/Octo/collections/NeonYellow/OCTO_SS23_643a_amrbgz.webp",
    jsx: (
      <div style={{ width: "100%" }}>
        <img
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
      </div>
    ),
  },
  thirdRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/NeonYellow/OCTO_SS23_007a_wkat6t.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682851/Octo/collections/NeonYellow/OCTO_SS23_073a_nakdt6.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/NeonYellow/OCTO_SS23_039a_ers2yz.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/NeonYellow/OCTO_SS23_026a_u6hita.webp",
  ],
};

export const configBlackish: BlockProps = {
  pantoneProps: {
    title: "Blackish",
    pantoneNumber: "7547 C",
    rgb: [26, 32, 50],
    cymk: [87, 78, 52, 62],
  },
  firstRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_264a_of1g4a.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_256a_a2edk9.webp",
  ],
  secondRow: {
    image:
      "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_223a_dchn4k.webp",
    jsx: (
      <div style={{ overflow: "hidden", height: window.innerHeight * 0.55, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          draggable={false}
          style={{
            height: "140%",
            cursor: "pointer",

            objectFit: "cover",
            objectPosition: "center",
          }}
          src="https://res.cloudinary.com/daantetcr/image/upload/v1681751224/Octo/collections/Blackish/OCTO_Logotipo_transp-octo_ixffst.png"
          alt=''
        />
      </div>
    ),
  },
  thirdRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_040a_alqvpf.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_365a_s3dia6.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_396a_w6uu6x.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_267a_r9p0xz.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_178a_qjqshy.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_537a_bat7e3.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_676a_uegbrh.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_464a_amlggx.webp"
  ],
};

export const configSoftPink: BlockProps = {
  pantoneProps: {
    title: "Soft Pink",
    pantoneNumber: "5015 C",
    rgb: [192, 157, 157],
    cymk: [26, 39, 32, 0],
  },
  firstRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_231a_yhed6v.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_243a_pompjz.webp",
  ],
  secondRow: {
    image:
      "https://res.cloudinary.com/daantetcr/image/upload/v1681808238/Octo/collections/SoftPink/OCTO_SS23_631a_hgmaez.webp",
    jsx: (
      <div>
        <Typography
          fontSize='6rem'
          color={Colors.SOFT_PINK}
          fontFamily='Avalanche'
        >
          Born
        </Typography>
        <Typography
          fontSize='6rem'
          color={Colors.SOFT_PINK}
          fontFamily='Avalanche'
          lineHeight='40px'
        >
          Octomistic
        </Typography>
      </div>
    ),
  },
  thirdRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_013a_upq63p.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_590a_ej5rp5.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_390a_zc9bmk.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_386a_y7chmt.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_315a_wxg2gt.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_194a_v9rbrx.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_606a_bmxgb7.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_050a_jtexvw.webp"
  ],
};

export const configAnthracite: BlockProps = {
  pantoneProps: {
    title: "Anthracite",
    pantoneNumber: "445 C",
    rgb: [81, 84, 86],
    cymk: [66, 56, 54, 31],
  },
  firstRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681686420/Octo/collections/OCTO_SS23_280a_vpistr.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681686420/Octo/collections/OCTO_SS23_287a_jk0bwf.webp",
  ],
  secondRow: {
    image:
      "https://res.cloudinary.com/daantetcr/image/upload/v1681685727/Octo/collections/OCTO_SS23_643a_amrbgz.webp",
    jsx: (
      <img
        draggable={false}
        style={{
          width: "130%",
          cursor: "pointer",

          objectFit: "cover",
          objectPosition: "center",
        }}
        src="https://res.cloudinary.com/daantetcr/image/upload/v1681750302/Octo/collections/Anthracite/OCTO_Logotipo_transp-babybrand_jvfwz7.png"
        alt=''
      />
    ),
  },
  thirdRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_007a_wkat6t.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682851/Octo/collections/OCTO_SS23_073a_nakdt6.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_039a_ers2yz.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_026a_u6hita.webp",
  ],
};

export const configTaupe: BlockProps = {
  pantoneProps: {
    title: "Taupe",
    pantoneNumber: "877 C",
    rgb: [131, 128, 128],
    cymk: [50, 44, 43, 7],
  },
  firstRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681686420/Octo/collections/OCTO_SS23_280a_vpistr.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681686420/Octo/collections/OCTO_SS23_287a_jk0bwf.webp",
  ],
  secondRow: {
    image:
      "https://res.cloudinary.com/daantetcr/image/upload/v1681685727/Octo/collections/OCTO_SS23_643a_amrbgz.webp",
    jsx: (
      <div>
        <Typography
          fontSize='6rem'
          color={Colors.TAUPE}
          fontFamily='Avalanche'
        >
          We are
        </Typography>
        <Typography
          fontSize='6rem'
          color={Colors.TAUPE}
          fontFamily='Avalanche'
          lineHeight='40px'
        >
          Octomistic
        </Typography>
      </div>
    ),
  },
  thirdRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_007a_wkat6t.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682851/Octo/collections/OCTO_SS23_073a_nakdt6.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_039a_ers2yz.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_026a_u6hita.webp",
  ],
};

export const configPrettyCream: BlockProps = {
  pantoneProps: {
    title: "Pretty Cream",
    pantoneNumber: "400 C",
    rgb: [205, 200, 194],
    cymk: [20, 17, 20, 0],
  },
  firstRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681686420/Octo/collections/OCTO_SS23_280a_vpistr.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681686420/Octo/collections/OCTO_SS23_287a_jk0bwf.webp",
  ],
  secondRow: {
    image:
      "https://res.cloudinary.com/daantetcr/image/upload/v1681685727/Octo/collections/OCTO_SS23_643a_amrbgz.webp",
    jsx: (
      <div>
        <Typography
          fontSize='6rem'
          color={Colors.PRETTY_CREAM}
          fontFamily='Avalanche'
        >
          Proudly made
        </Typography>
        <Typography
          fontSize='6rem'
          color={Colors.PRETTY_CREAM}
          fontFamily='Avalanche'
          lineHeight='40px'
        >
          in Portugal
        </Typography>
      </div>
    ),
  },
  thirdRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_007a_wkat6t.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682851/Octo/collections/OCTO_SS23_073a_nakdt6.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_039a_ers2yz.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_026a_u6hita.webp",
  ],
};