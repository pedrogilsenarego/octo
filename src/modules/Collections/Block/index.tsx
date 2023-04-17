import { Grid, Typography } from "@mui/material";

import { Colors } from "../../../constants/pallete";
import firstCollection from "../../../assets/firstCollection.svg";

const Block = () => {
  const firstRowImages = [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_007a_wkat6t.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682851/Octo/collections/OCTO_SS23_073a_nakdt6.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_039a_ers2yz.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681682852/Octo/collections/OCTO_SS23_026a_u6hita.webp",
  ];
  return (
    <div
      style={{

        display: "flex",
        flexDirection: "column",
        rowGap: "5px",
      }}
    >
      <Grid container columnSpacing='5px' style={{}}>
        <Grid
          item
          xs={3}
          style={{ overflow: "hidden", height: window.innerHeight * 0.55 }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "relative",
              backgroundColor: Colors.NEON_YELLOW,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
                position: "absolute", bottom: "5%", left: "5%"
              }}
            >

              <Typography style={{
                color: Colors.PURE_GREY,
                fontSize: "12px",
                paddingTop: "8px",
                paddingBottom: "8px",
                borderTop: `solid 2px ${Colors.PURE_GREY}`,
                borderBottom: `solid 2px ${Colors.PURE_GREY}`,
              }} fontWeight={800}>SOFT PINK</Typography>
              <Typography
                style={{
                  color: Colors.PURE_GREY,
                  fontSize: "10px",
                  fontWeight: 800
                }}>
                Pantone 5015 C
              </Typography>
            </div>
          </div>{" "}
        </Grid>
        <Grid
          item
          xs={6}
          style={{ overflow: "hidden", height: window.innerHeight * 0.55 }}
        >
          <img
            src='https://res.cloudinary.com/daantetcr/image/upload/v1681686420/Octo/collections/OCTO_SS23_280a_vpistr.webp'
            alt=''
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Grid>
        <Grid
          item
          xs={3}

          style={{ overflow: "hidden", height: window.innerHeight * 0.55 }}
        >
          <img
            src="https://res.cloudinary.com/daantetcr/image/upload/v1681686420/Octo/collections/OCTO_SS23_287a_jk0bwf.webp"
            alt=''
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Grid>
      </Grid>



      <Grid container columnSpacing='5px' style={{}}>
        <Grid
          item
          xs={6}
          style={{ overflow: "hidden", height: window.innerHeight * 0.55 }}
        >
          <img
            src='https://res.cloudinary.com/daantetcr/image/upload/v1681685727/Octo/collections/OCTO_SS23_643a_amrbgz.webp'
            alt=''
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Grid>

        <Grid xs={6}>
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
        </Grid>
      </Grid>
      <Grid container columnSpacing='5px' style={{}}>
        {firstRowImages?.map((item: string, pos: number) => {
          return (
            <Grid
              item
              xs={3}
              key={pos}
              style={{ overflow: "hidden", height: window.innerHeight * 0.55 }}
            >
              <img
                src={item}
                alt=''
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </Grid>
          );
        })}
      </Grid>

      {/* <Typography
    fontSize='10.5vw'
    color={Colors.BLACKISH}
    fontFamily='Avalanche'
    style={{
      zIndex: 1003,
      whiteSpace: "pre-line",
      lineHeight: "16.5vh",

    }}
  >
    {i18n.t("modules.collections.title")}
  </Typography> */}
    </div>
  )
}

export default Block