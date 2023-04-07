import { Box, Container, Grid, Typography } from "@mui/material"
import { generalConstants } from "../../../constants/general"
import Button from "../../../components/Buttons/Button"
import React from "react"
import { categories } from "../../../constants/category"
import { fabrics } from "../../../constants/fabrics"
import { Colors } from "../../../constants/pallete"
import { i18n } from "../../../translations/i18n"




const Shop = () => {

  return (
    <Box
      display='flex'
      style={{
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100vw",
        height: "100vh",
        padding: "15vw",
        flexDirection: "column",

      }}
    >
      <Typography style={{ textTransform: "uppercase", fontWeight: 800, fontSize: "1.2rem" }}>Products</Typography>

      <Grid
        container
        style={{ borderRadius: "10px", marginTop: "10px" }}
        columnSpacing="15px"
        rowSpacing="20px"
      >
        {categories.map((item, pos) => {
          const img = new Image();
          img.src = item.icon;
          const aspectRatio = img.naturalHeight / img.naturalWidth;
          return (
            <Grid
              key={pos}
              item
              justifyContent='center'
              alignItems='center'
              xs={12 / 10}
              style={{ cursor: "pointer" }}
            >
              <Box

                display="flex"

                justifyContent="center"
                alignItems="center"
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  boxShadow: "0px 0px 10px 0px #0000001e",
                  paddingBottom: `${aspectRatio * 100}%`,
                  backgroundImage: `url(${item.icon})`,
                  backgroundSize: "cover"
                }}
              >
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Typography mt="11vh" style={{ fontSize: "1.2rem", textTransform: "uppercase", fontWeight: 800 }}>Patterns</Typography>
      <Grid
        container
        style={{ borderRadius: "10px", marginTop: "-10px", }}
        columnSpacing={5}
        rowSpacing={5}
      >
        {fabrics.map((item, pos) => {
          const img = new Image();
          img.src = item.image;
          const aspectRatio = img.naturalHeight / img.naturalWidth;
          return (
            <Grid
              key={pos}
              item
              justifyContent='center'
              alignItems='center'
              xs={12 / 8}
              style={{ cursor: "pointer" }}
            >


              <Box

                display="flex"

                justifyContent="center"
                alignItems="center"
                style={{
                  borderRadius: "50%",
                  width: "100%",

                  boxShadow: "0px 0px 10px 0px #0000001e",
                  paddingBottom: `${aspectRatio * 100}%`,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover"
                }}
              >
              </Box>
            </Grid>
          );
        })}
        <div style={{ marginTop: "100px", display: "flex", width: "100%", justifyContent: "center" }}>

          <Button colorHover={Colors.NEON_YELLOW_TRANSPARENT} label={i18n.t("modules.home.shopOurCollection")} />
        </div>
      </Grid>


    </Box>
  )
}

export default Shop