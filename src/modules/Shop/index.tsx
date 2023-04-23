import { Box, Grid, useTheme, useMediaQuery, Typography } from "@mui/material";
import { generalConstants } from "../../constants/general";
import FilterCategory from "./FilterCategory";
import Description from "./Description";
import ImageShow from "./ImageShow";
import React from "react";
import { ProductContextProvider } from "./ProductContext";

const Shop = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <>
      <div
        style={{
          marginLeft: generalConstants.PADDING,
          marginRight: generalConstants.PADDING,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <Typography fontSize="20px">
          We're thrilled that our website is up and running, but we're sorry to
          say that you're not able to shop just yet. We're working hard to put
          the finishing touches on our online store so that you can have the
          best shopping experience possible. We know you're excited to see what
          we have in store, and we can't wait to show you! Thank you for your
          patience and understanding, and we'll let you know as soon as our
          store is ready for business!
        </Typography>
      </div>
      {/* <ProductContextProvider>
        <Box
          display='flex'
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            paddingBottom: "100px",
            paddingLeft: generalConstants.PADDING,
            paddingRight: generalConstants.PADDING,
            flexDirection: "column",
          }}
        >




          <Grid mt={mobile ? "0px" : "40px"} container columnSpacing={2} rowSpacing="40px" alignItems="spaceBetween" >
            <Grid item xs={12}>
              <FilterCategory />
            </Grid>

            <Grid item xs={12} sm={6}>
              <ImageShow />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Description />
            </Grid>
          </Grid>







        </Box></ProductContextProvider> */}
    </>
  );
};

export default Shop;
