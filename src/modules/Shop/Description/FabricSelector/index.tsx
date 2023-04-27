import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useContext, useState } from "react";

import { ProductContext } from "../../ProductContext";
import Element from "./Element";
import { Product } from "../../../../constants/category";
import { useDispatch } from "react-redux";



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



  return (
    <Box
      mt='10px'
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

      <Grid container rowGap={3} columnSpacing={2}>
        {category !== null &&
          productsAvailable?.map((item, pos: number) => {
            return (
              <Grid
                item
                xs={3}
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
                  xs={3}
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



    </Box>
  );
};

export default FabricSelector;
