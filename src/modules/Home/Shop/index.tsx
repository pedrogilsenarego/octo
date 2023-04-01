import { Box, Grid } from "@mui/material"
import { generalConstants } from "../../../constants/general"
import FilterCategory from "./FilterCategory"
import Description from "./Description"
import ImageShow from "./ImageShow"

const Shop = () => {

  return (
    <>
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



      </Box></>
  )
}

export default Shop