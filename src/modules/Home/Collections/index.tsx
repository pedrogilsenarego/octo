import { Box, Grid, Typography } from "@mui/material";
import { Colors } from "../../../constants/pallete";
import { i18n } from "../../../translations/i18n";
import { generalConstants } from "../../../constants/general";
import Button from "../../../components/Buttons/Button";
import teste from "../../../assets/teste.jpeg"
import t1 from "../../../assets/t1.jpeg"
import t2 from "../../../assets/t2.jpeg"
import firstCollection from "../../../assets/firstCollection.svg"
import t5 from "../../../assets/t5.jpeg"

const Collections = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          width: "100vw",
          height: "100vh",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
        }}
      >
        <Box


          style={{
            rowGap: "100px",
            width: "100%",
            height: "35vw",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container columnSpacing={2} width="100%" style={{ position: "relative", cursor: "pointer" }}>
            <img
              style={{
                position: "absolute",
                bottom: "-35%",
                left: "10%",
                width: "500px",
                cursor: "pointer",

                objectFit: "cover",
                objectPosition: "center",
              }}
              src={firstCollection}
              alt=''
            />
            <Grid item xs={3}>
              <img
                style={{

                  width: "100%",
                  height: "25vw",
                  borderRadius: "1%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={t1}
                alt=''
              />
            </Grid>
            <Grid item xs={3}>
              <img
                style={{

                  width: "100%",
                  height: "25vw",
                  borderRadius: "1%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={t2}
                alt=''
              />
            </Grid>  <Grid item xs={3}>
              <img
                style={{
                  width: "100%",
                  height: "25vw",
                  borderRadius: "1%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={teste}
                alt=''
              />
            </Grid>  <Grid item xs={3}>
              <img
                style={{
                  width: "100%",
                  height: "25vw",
                  borderRadius: "1%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={t5}
                alt=''
              />
            </Grid>
          </Grid>
          <Box
            display='flex'
            justifyContent='end'
            flexDirection='row'
            alignItems='center'
            mt="-100px"
            width="100%"

          >

            {/* <div style={{ marginTop: "40px" }}>
              <Button
                color={Colors.BLACKISH}
                colorHover={Colors.NEON_YELLOW}
                label={i18n.t("modules.home.discoverCollection")}
              />
            </div> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Collections;
