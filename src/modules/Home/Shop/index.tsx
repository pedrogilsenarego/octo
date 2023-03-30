import { Box, Container } from "@mui/material"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Colors } from "../../../constants/pallete"
import { disableSnap, scrollToShop } from "../../../slicer/general/general.actions"
import { State } from "../../../slicer/types"
import FilterCategory from "./FilterCategory"

const Shop = () => {
  const dispatch = useDispatch();
  const shopRef = useRef<HTMLDivElement>(null);
  const scrollToShopL = useSelector<State, boolean>(
    (state) => state.general.scrollToShop
  );

  const handleScrollToShop = () => {
    setTimeout(() => {
      dispatch(disableSnap(false))
      dispatch(scrollToShop(false));
    }, 2000)
    if (null !== shopRef.current) {
      window.scrollTo({
        top: shopRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };


  useEffect(() => {
    if (scrollToShopL) {
      handleScrollToShop();

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToShopL]);
  return (
    <>
      <Box
        ref={shopRef}
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