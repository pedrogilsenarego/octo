import { Box, Container } from "@mui/material"
import { Colors } from "../../../constants/pallete"
import FilterCategory from "./FilterCategory"

const Shop = () => {
  return (
    <>
      <Box
        display='flex'
        style={{
          backgroundColor: Colors.WHITE_SMUDGE,
          width: "100vw",
          height: "100vh",

        }}
      >
        <Container maxWidth='xl'>
          <FilterCategory />


        </Container>
      </Box></>
  )
}

export default Shop