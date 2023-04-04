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
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",

          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
          flexDirection: "column",
        }}
      >
        <MenuBar />



        <Grid mt="150px" container columnSpacing={2} rowSpacing="60px" alignItems="spaceBetween" >
          <Grid item xs={12}>
            <FilterCategory />
          </Grid>

          <Grid item xs={9 * 12 / 17}>
            <ImageShow />
          </Grid>
          <Grid item xs={8 * 12 / 17} >
            <Description />
          </Grid>
        </Grid>







      </Box></ProductContextProvider>
  )
}

export default Shop