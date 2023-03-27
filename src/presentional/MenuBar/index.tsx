import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../translations/i18n";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";
import { BsInstagram } from "react-icons/bs";
import BasicPopover from "../../components/Popover";
import Button from "./Button";
import { Colors } from "../../constants/pallete";
import { ROUTE_PATHS } from "../../constants/routes";
import { useState } from "react"

import { useNavigate } from "react-router-dom";
import Label from "../../assets/images/label.png";

const MenuBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [shopPopover, setShopPopover] = useState<HTMLButtonElement | null>(null)

  const renderLaptop = () => {
    return (

      <div
        style={{
          top: 0,
          width: "100vw",
          zIndex: 1000,
          position: "fixed",
        }}
      >
        <Container maxWidth='xl'>
          <Grid
            container
            display='flex'
            justifyContent='space-between'
            alignItems='start'
          >
            <Grid item>
              <Box
                onClick={() => navigate(ROUTE_PATHS.HOME)}
                width='250px'
                height='250px'
                style={{
                  cursor: "pointer",
                  marginTop: "-24px",
                  marginLeft: "-22px",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${Label})`,
                  backgroundSize: "100%",
                }}
              ></Box>
            </Grid>
            <Grid item>
              <Box mt="20px" display='flex' columnGap='40px' alignItems='center' >
                <Button
                  title={i18n.t("menuBar.about")}
                  link={ROUTE_PATHS.ABOUT}

                />

                <Button
                  title={i18n.t("menuBar.collection")}
                  link={ROUTE_PATHS.COLLECTION}

                  collection
                />
                <div onClick={(event: any) => setShopPopover(event.currentTarget)}>
                  <Button
                    title={i18n.t("menuBar.store")}



                  />
                </div>
                <Box display='flex' columnGap='12px' alignItems='center'>
                  <BiSearch
                    size='25px'
                    color={Colors.PRETTY_CREAM}
                    style={{ cursor: "pointer" }}
                  />
                  <BsInstagram
                    size='25px'
                    color={Colors.PRETTY_CREAM}
                    style={{ cursor: "pointer" }}
                  />
                  <AiOutlineShopping
                    size='25px'
                    color={Colors.PRETTY_CREAM}
                    style={{ marginTop: "-3px", cursor: "pointer" }}
                  />
                </Box>
              </Box>


            </Grid>
          </Grid>
        </Container>
        <BasicPopover anchorEl={shopPopover} setAnchorEl={setShopPopover}>
          <>
            <Button
              title={i18n.t("menuBar.shopSublink.viewAll")}
              link={ROUTE_PATHS.SHOP}
              setAnchorPopover={setShopPopover}
            />
            <Button
              title={i18n.t("menuBar.shopSublink.category")}
              link={ROUTE_PATHS.SHOP_CATEGORIES}
              setAnchorPopover={setShopPopover}
            />
            <Button
              title={i18n.t("menuBar.shopSublink.fabrics")}
              link={ROUTE_PATHS.SHOP_FABRICS}
              setAnchorPopover={setShopPopover}
            />
          </>
        </BasicPopover>
      </div>


    );
  };

  const renderMobile = () => {
    return (
      <Box
        display='flex'
        alignItems='center'
        justifyContent='flex-end'
        style={{
          position: "absolute",
          top: "30px",
          width: "100%",
          paddingRight: "30px",
        }}
      >
        <VscMenu size='35px' color={Colors.PRETTY_CREAM} />
      </Box>
    );
  };

  return mobile ? renderMobile() : renderLaptop();
};

export default MenuBar;
