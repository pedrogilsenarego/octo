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
            <Grid container columnSpacing={4} style={{ display: "flex", }}>
              <Grid item xs={5} style={{ height: "94vh" }}>
                <Box display="flex" flexDirection="column" justifyContent="space-between" style={{ height: "100%" }}>
                  <FilterCategory />
                  <ImageShow />
                </Box>
              </Grid>
              <Grid item xs={7} >
                <Description />
              </Grid>
            </Grid>
          </body>


        </div>



      </Box></>
  )
}

export default Shop