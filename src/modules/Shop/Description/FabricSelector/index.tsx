import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useContext, useState } from "react";

import { ProductContext } from "../../ProductContext";
import Element from "./Element";
import { Product } from "../../../../constants/category";
import { useDispatch } from "react-redux";
import Button from "../../../../components/Buttons/Button";
import { addProductToCart } from "../../../../slicer/cart/cart.actions";
import { updateSuccessNotification } from "../../../../slicer/general/general.actions";
import { Colors } from "../../../../constants/pallete";

import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

const FabricSelector = () => {
  const { category, pattern, setProduct, products, productSelected, setProductSelected } =
    useContext(ProductContext);

  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const dispatch = useDispatch();

  const productsAvailable: Product[] = products?.filter(
    (product: Product) => product.category === category
  );

  const fabricsAvailable: Product[] = products?.filter(
    (product: Product) => product.pattern === pattern
  );

  const handleSelectProduct = (pos: number) => {
    setProductSelected(pos);
    setProduct(products[pos]);
  };

  const handleAddCart = () => {
    dispatch(
      addProductToCart(
        category !== null
          ? [productsAvailable[productSelected]]
          : [fabricsAvailable[productSelected]]
      )
    );
    dispatch(updateSuccessNotification("Product Added to Cart"));
  };

  return (
    <Box
      mt='10px'
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "90px",
      }}
    >
      <Grid container rowGap="65px" columnSpacing='15px' justifyContent='start' marginTop="20px">
        {category !== null &&
          productsAvailable?.map((item, pos: number) => {
            return (
              <Grid
                item
                xs={2}
                style={{ position: "relative" }}
                key={pos}
                onClick={() => handleSelectProduct(pos)}
              >
                <Element
                  valuee={item.icon}
                  pos={pos}
                  stateHighLightStatus={pos === productSelected}
                />
                <Box
                  display='flex'
                  justifyContent='center'
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "-30px",
                  }}
                >
                  <Typography>&nbsp;&nbsp;&nbsp;{item.price}€</Typography>
                </Box>
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
                  <Element
                    valuee={item.icon}
                    pos={pos}
                    stateHighLightStatus={pos === productSelected}
                  />
                  <Box
                    display='flex'
                    justifyContent='center'
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: "-30px",
                    }}
                  >
                    <Typography>&nbsp;&nbsp;&nbsp;{item.price}€</Typography>
                  </Box>
                </Grid>
              </>
            );
          })}
      </Grid>
      <div style={{ width: "100%", display: "flex", justifyContent: "start" }}>
        <div
          style={{
            borderTopLeftRadius: "6px",
            borderBottomLeftRadius: "6px",
            border: `solid 2px ${Colors.BLACKISH}`,
            display: "flex",
            alignItems: "center",
            padding: "5px 10px 5px 10px",
            columnGap: "10px"
          }}
        >
          <BsInstagram
            size='1.4rem'
            color={Colors.BLACKIST_TRANSPARENT}
            style={{ cursor: "default" }}
          />
          <BsFacebook
            size='1.4rem'
            color={Colors.BLACKIST_TRANSPARENT}
            style={{ cursor: "default" }}
          />
          <BsWhatsapp
            size='1.4rem'
            color={Colors.BLACKIST_TRANSPARENT}
            style={{ cursor: "default" }}
          />
        </div>
        <Button onClick={handleAddCart} label='Add To Cart' borderRadiusRight />
      </div>
    </Box>
  );
};

export default FabricSelector;
