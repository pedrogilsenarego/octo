import { Box, Grid } from "@mui/material"
import { useContext } from "react"
import { categories } from "../../../../../constants/category"
import { ProductContext } from "../../ProductContext"

const MoreInfoPopup = () => {
  const { product } = useContext(ProductContext)

  return (
    <Box height="100%" width="100%" style={{ border: "solid 2px black" }}>

      {categories[parseInt(product)].patterns.map((item, pos) => {
        return (
          <Box key={pos} width="100%">
            <img src={item.images[0]} alt="" width="50%" height="40%" />
          </Box>
        )
      })}

    </Box>
  )
}

export default MoreInfoPopup