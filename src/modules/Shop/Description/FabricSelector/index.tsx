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
import { fabricsX } from "../../../../constants/fabrics";

const FabricSelector = () => {
  const {
    category,
    pattern,
    setProduct,
    products,
    productSelected,
    setProductSelected,
    vertical
  } = useContext(ProductContext);

  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const dispatch = useDispatch();

  const productsAvailable: Product[] = products?.filter(
    (product: Product) => product.category === category
  );

  // const patternPriority: {
  //   [key: string]: string;
  // } = {
  //   "Sleeping Bag": fabricsX[3],
  //   "Bed Bumper": fabricsX[0],
  //   "Bed Pocket": fabricsX[2],
  //   "Blanket": fabricsX[3],
  //   "Pacifier Clip": fabricsX[4],
  //   "Bandana Bib": fabricsX[1],
  //   "Collar Bib": fabricsX[2],
  // };

  // const productsAvailableFiltered = () => {
  //   let finalOrder: Product[] = [];

  //   if (category === null) {
  //     return productsAvailable;
  //   }

  //   const matchingProduct = productsAvailable.find(
  //     product => product.pattern === patternPriority[category]
  //   );
  //   if (matchingProduct) {
  //     finalOrder.push(matchingProduct);
  //   }
  //   finalOrder.push(...productsAvailable.filter(product => product !== matchingProduct));
  //   if (!finalOrder.length) {
  //     return productsAvailable;
  //   }
  //   return finalOrder;
  // };


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
        rowGap: "60px",
      }}
    >
      <Grid
        container
        rowGap='25px'
        columnGap={vertical ? "0px" : '45px'}
        columnSpacing={vertical ? "10px" : "0px"}
        justifyContent='start'
        marginTop='20px'
      >
        {category !== null &&
          productsAvailable?.map((item: Product, pos: number) => {
            return (
              <Grid
                item
                xs={vertical ? 6 : 2}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  textAlign: "center",

                }}
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
                  alignItems='center'
                  flexDirection='column'
                  style={{ height: "70px" }}
                >
                  <Typography
                    style={{
                      textTransform: "uppercase",
                      textAlign: "center",

                      letterSpacing: "2px",

                      lineHeight: "11px",
                    }}
                    fontWeight={pos === productSelected ? 800 : 500}
                    fontSize='0.6rem'
                  >
                    {item.pattern}
                  </Typography>
                  <Typography
                    fontWeight={pos === productSelected ? 800 : 500}
                    fontSize='0.9rem'
                  >
                    {item.price}&nbsp;€
                  </Typography>
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
                  xs={vertical ? 6 : 2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
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
                    alignItems='center'
                    flexDirection='column'
                    style={{ height: "70px" }}

                  >
                    <Typography
                      style={{
                        textTransform: "uppercase",
                        textAlign: "center",

                        letterSpacing: "2px",

                        lineHeight: "11px",
                      }}
                      fontWeight={pos === productSelected ? 800 : 500}
                      fontSize='0.6rem'
                    >
                      {item.category}
                    </Typography>
                    <Typography
                      fontWeight={pos === productSelected ? 800 : 500}
                      fontFamily='cursive'
                      fontSize='0.9rem'
                    >
                      {item.price}&nbsp;€
                    </Typography>
                  </Box>
                </Grid>
              </>
            );
          })}
      </Grid>
      <div style={{ width: "100%", display: "flex", justifyContent: "start", columnGap: "5px" }}>
        <div
          style={{
            borderTopLeftRadius: "6px",
            borderBottomLeftRadius: "6px",
            border: `solid 2px ${Colors.BLACKISH}`,
            display: "flex",
            alignItems: "center",
            padding: "5px 10px 5px 10px",
            columnGap: "10px",
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
