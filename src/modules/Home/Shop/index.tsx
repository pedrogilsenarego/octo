import { Box, Container, Grid } from "@mui/material"
import { generalConstants } from "../../../constants/general"

import React from "react"
import { categories } from "../../../constants/category"
import { fabrics } from "../../../constants/fabrics"




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

      {/* <Grid
        container
        style={{ borderRadius: "10px", marginTop: "1px" }}
        columnSpacing={5}
        rowSpacing={1}
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
              xs={12 / 9}
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
      </Grid> */}
      <Grid
        container
        style={{ borderRadius: "10px", marginTop: "1px", paddingLeft: "200px", paddingRight: "200px" }}
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
              xs={3}
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
      </Grid>


    </Box>
  )
}

export default Shop