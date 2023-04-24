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
    "https://res.cloudinary.com/daantetcr/image/upload/v1681845605/Octo/collections/NeonYellow/WhatsApp_Image_2023-04-18_at_20.18.59_xjpyep.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681845605/Octo/collections/NeonYellow/WhatsApp_Image_2023-04-18_at_20.18.58_r94vuw.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681845605/Octo/collections/NeonYellow/WhatsApp_Image_2023-04-18_at_20.18.59_1_icqakb.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681845605/Octo/collections/NeonYellow/WhatsApp_Image_2023-04-18_at_20.19.00_lspmpp.jpg",
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
      <img
        draggable={false}
        style={{
          marginTop: "-30vh",
          marginBottom: "-30vh",
          height: "100%",
          cursor: "pointer",

          objectFit: "cover",
          objectPosition: "center",
        }}
        src="https://res.cloudinary.com/daantetcr/image/upload/v1681751224/Octo/collections/Blackish/OCTO_Logotipo_transp-octo_ixffst.png"
        alt=''
      />

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

export const configBlackishMobile: BlockProps = {
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
      <img
        draggable={false}
        style={{
          marginTop: "-70vh",
          marginBottom: "-70vh",
          height: "70%",
          cursor: "pointer",

          objectFit: "cover",
          objectPosition: "center",
        }}
        src="https://res.cloudinary.com/daantetcr/image/upload/v1681751224/Octo/collections/Blackish/OCTO_Logotipo_transp-octo_ixffst.png"
        alt=''
      />

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
          fontSize='10vw'
          color={Colors.SOFT_PINK}
          fontFamily='Avalanche'
        >
          Born
        </Typography>
        <Typography
          fontSize='7vw'
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
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821165/Octo/collections/Anthracite/OCTO_SS23_436a_d0o3ok.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821163/Octo/collections/Anthracite/OCTO_SS23_432a_zjh2li.webp",
  ],
  secondRow: {
    image:
      "https://res.cloudinary.com/daantetcr/image/upload/v1681821165/Octo/collections/Anthracite/OCTO_SS23_582a_ucndi7.webp",
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
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821164/Octo/collections/Anthracite/OCTO_SS23_053a_e0c7wc.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821165/Octo/collections/Anthracite/OCTO_SS23_775a_kuipvj.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821164/Octo/collections/Anthracite/OCTO_SS23_378a_wqsask.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821164/Octo/collections/Anthracite/OCTO_SS23_732a_gvlrhi.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821164/Octo/collections/Anthracite/OCTO_SS23_073a_aau0yy.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821164/Octo/collections/Anthracite/OCTO_SS23_212a_cgmjwy.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821163/Octo/collections/Anthracite/OCTO_SS23_748a_b2kq8w.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821164/Octo/collections/Anthracite/OCTO_SS23_792a_ne9nhx.webp"
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
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822111/Octo/collections/Taupe/OCTO_SS23_517a_klgb88.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822111/Octo/collections/Taupe/OCTO_SS23_510a_ibnjbm.webp",
  ],
  secondRow: {
    image:
      "https://res.cloudinary.com/daantetcr/image/upload/v1681822112/Octo/collections/Taupe/OCTO_SS23_504a_gxrgud.webp",
    jsx: (
      <div>
        <Typography
          fontSize='5.5vw'
          color={Colors.TAUPE}
          fontFamily='Avalanche'
        >
          Embrace
        </Typography>
        <Typography
          fontSize='7vw'
          color={Colors.TAUPE}
          fontFamily='Avalanche'
          lineHeight='70px'
        >
          Octomism
        </Typography>
      </div>
    ),
  },
  thirdRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822112/Octo/collections/Taupe/OCTO_SS23_112a_llygpx.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822112/Octo/collections/Taupe/OCTO_SS23_482a_qhurtx.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822111/Octo/collections/Taupe/OCTO_SS23_721a_ifo4p7.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822112/Octo/collections/Taupe/OCTO_SS23_411a_mtg2oq.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822112/Octo/collections/Taupe/OCTO_SS23_037a_dd20bj.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822111/Octo/collections/Taupe/OCTO_SS23_533a_rimk8f.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822111/Octo/collections/Taupe/OCTO_SS23_716a_ikxrtc.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822111/Octo/collections/Taupe/OCTO_SS23_528a_h5c1s9.webp"
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
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821796/Octo/collections/PrettyCream/OCTO_SS23_692a_hflbzc.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821796/Octo/collections/PrettyCream/OCTO_SS23_666a_p6bau2.webp",
  ],
  secondRow: {
    image:
      "https://res.cloudinary.com/daantetcr/image/upload/v1681821797/Octo/collections/PrettyCream/OCTO_SS23_341a_zfyt6h.webp",
    jsx: (
      <div>
        <Typography
          fontSize='5vw'
          color={Colors.PRETTY_CREAM}
          fontFamily='Avalanche'
        >
          Proudly made
        </Typography>
        <Typography
          fontSize='5vw'
          color={Colors.PRETTY_CREAM}
          fontFamily='Avalanche'
          lineHeight="3vh"
        >
          in Portugal
        </Typography>
      </div>
    ),
  },
  thirdRow: [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821797/Octo/collections/PrettyCream/OCTO_SS23_312a_gdiji7.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821797/Octo/collections/PrettyCream/OCTO_SS23_109a_oz8yqj.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821796/Octo/collections/PrettyCream/OCTO_SS23_675a_jmmrxn.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821796/Octo/collections/PrettyCream/OCTO_SS23_694a_thoip6.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821796/Octo/collections/PrettyCream/OCTO_SS23_680a_wssp71.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821797/Octo/collections/PrettyCream/OCTO_SS23_051a_z64grc.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821797/Octo/collections/PrettyCream/OCTO_SS23_035a_e0rcyq.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681821797/Octo/collections/PrettyCream/OCTO_SS23_078a_jqwkzi.webp"
  ],
};