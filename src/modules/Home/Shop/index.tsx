import { Box } from "@mui/material"
import { generalConstants } from "../../../constants/general"

import { Colors } from "../../../constants/pallete"

import FilterCategory from "./FilterCategory"

const Shop = () => {

  return (
    <>
      <Box
        //ref={shopRef}
        display='flex'
        style={{

          width: "100vw",
          height: "100vh",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
          flexDirection: "column",
        }}
      >

        <FilterCategory />



      </Box></>
  )
}

export default Shop