import { Box, Grid, useTheme, useMediaQuery, Typography } from "@mui/material";
import { generalConstants } from "../../constants/general";
import FilterCategory from "./FilterCategory";
import Description from "./Description";
import ImageShow from "./ImageShow";
import React, { memo } from "react";
import { ProductContextProvider } from "./ProductContext";

interface Props {
  show?: boolean
}
const Shop = memo(({ show = false }: Props) => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const handleInstagram = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'instagram://user?username=octo.mistic';
      setTimeout(() => {
        window.location.href = 'https://instagram.com/octo.mistic?igshid=YmMyMTA2M2Y=';
      }, 1000);
    } else {
      window.open('https://instagram.com/octo.mistic?igshid=YmMyMTA2M2Y=', '_blank');
    }
  }


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
        <Typography fontSize="20px" style={{ marginTop: mobile ? "150px" : "0px" }}>
          We're thrilled that our website is up and running, but we're sorry to say that you're not able to shop just yet. We're working hard to put the finishing touches on our online store so that you can have the best shopping experience possible.<br />
          We know you're excited to see what we have in store, and we can't wait to show you!<br />
          Thank you for your patience and understanding, and we'll let you know as soon as our store is ready for business!<br />
          In any case, if you wish to purchase any of our products, you can do so by reaching out to us via email at <b>hello@octo-mistic.com</b> or by sending us a direct message on Instagram <b style={{ cursor: "pointer" }} onClick={handleInstagram}>@octo.mistic</b>, and we will assist you throughout the process
        </Typography>
      </div >
      {show && (<ProductContextProvider>
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







        </Box></ProductContextProvider>)}

    </>
  );
});

export default Shop;
