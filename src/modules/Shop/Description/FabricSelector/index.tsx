import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useContext, useState } from "react";

import { ProductContext } from "../../ProductContext";
import Element from "./Element";
import { Product } from "../../../../constants/category";
import { useDispatch } from "react-redux";
import Button from "../../../../components/Buttons/Button";
import { addProductToCart } from "../../../../slicer/cart/cart.actions";
import { updateSuccessNotification } from "../../../../slicer/general/general.actions";



const FabricSelector = () => {
  const {
    category,
    pattern,
    setProduct,
    products,

  } = useContext(ProductContext);

  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const [productSelected, setProductSelected] = useState<number>(0)
  const dispatch = useDispatch()

  const productsAvailable: Product[] = products?.filter(
    (product: Product) => product.category === category
  );

  const fabricsAvailable: Product[] = products?.filter(
    (product: Product) => product.pattern === pattern
  );

  const handleSelectProduct = (pos: number) => {
    setProductSelected(pos)
    setProduct(products[pos])
  };

  const handleAddCart = () => {
    dispatch(addProductToCart(category !== null ? [productsAvailable[productSelected]] : [fabricsAvailable[productSelected]]))
    dispatch(updateSuccessNotification("Product Added to Cart"))
  }



  return (
    <Box
      mt='10px'
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "40px"
      }}
    >

      <Grid container rowGap={3} columnSpacing="10px">
        {category !== null &&
          productsAvailable?.map((item, pos: number) => {
            return (
              <Grid
                item
                xs={2}
                key={pos}
                onClick={() => handleSelectProduct(pos)}
              >
                <Element valuee={item.icon} pos={pos} stateHighLightStatus={pos === productSelected} />
              </Grid>
            );
          })}
        {pattern !== null &&
          fabricsAvailable?.map((item, pos) => {
            return (
              <>
                <Grid
                  item
                  xs={2}
                  style={{ position: "relative" }}
                  key={pos}
                  onClick={() => handleSelectProduct(pos)}
                >
                  <Element valuee={item.icon} pos={pos} stateHighLightStatus={pos === productSelected} />
                  <Box
                    display='flex'
                    justifyContent='center'
                    style={{ position: "absolute", left: 0, right: 0 }}
                  >
                    <Typography>&nbsp;&nbsp;&nbsp;{item.price}€</Typography>
                  </Box>
                </Grid>
              </>
            );
          })}
      </Grid>
      <div style={{ width: "100%", display: "flex", justifyContent: "start" }}>
        <Button onClick={handleAddCart} label="Add To Cart" borderRadiusRight />
      </div>


    </Box>
  );
};

export default FabricSelector;
