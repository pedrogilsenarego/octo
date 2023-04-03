import { Box, Grid } from "@mui/material"
import { generalConstants } from "../../constants/general"
import FilterCategory from "./FilterCategory"
import Description from "./Description"
import ImageShow from "./ImageShow"
import React from "react"
import { ProductContextProvider } from "./ProductContext"
import MenuBar from "../../presentional/MenuBar"



const Shop = () => {

  return (
    <ProductContextProvider>
      <Box
        display='flex'
        style={{

          width: "100vw",
          height: "100vh",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
          flexDirection: "column",
        }}
      >
        <MenuBar />
        <div style={{ marginTop: "30px" }}>
          <body style={{ height: "100%" }}>
            <Grid container columnSpacing={4} height="100vh" alignItems="spaceBetween">
              <Grid item xs={5} >
                <FilterCategory />
              </Grid>
              <Grid item xs={7} >
              </Grid>
              <Grid item xs={6}>
                <ImageShow />
              </Grid>
              <Grid item xs={6} >
                <Description />
              </Grid>
            </Grid>
          </body>


        </div>



      </Box></ProductContextProvider>
  )
}

export default Shop