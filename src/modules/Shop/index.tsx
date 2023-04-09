import { Box, Grid, useTheme, useMediaQuery } from "@mui/material"
import { generalConstants } from "../../constants/general"
import FilterCategory from "./FilterCategory"
import Description from "./Description"
import ImageShow from "./ImageShow"
import React from "react"
import { ProductContextProvider } from "./ProductContext"
import MenuBar from "../../presentional/MenuBar"




const Shop = () => {
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"))

  return (
    <ProductContextProvider>
      <Box
        display='flex'
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          paddingBottom: "100px",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
          flexDirection: "column",
        }}
      >
        <MenuBar />



        <Grid mt={mobile ? "0px" : "40px"} container columnSpacing={2} rowSpacing="40px" alignItems="spaceBetween" >
          <Grid item xs={12}>
            <FilterCategory />
          </Grid>

          <Grid item xs={12} sm={6}>
            <ImageShow />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Description />
          </Grid>
        </Grid>







      </Box></ProductContextProvider>
  )
}

export default Shop