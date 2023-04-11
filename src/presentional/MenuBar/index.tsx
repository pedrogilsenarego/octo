import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../translations/i18n";
import { AiOutlineShopping } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";
import { BsInstagram } from "react-icons/bs";
import Button from "./Button";
import { Colors } from "../../constants/pallete";
import { ROUTE_PATHS } from "../../constants/routes";
import { useLocation, useNavigate } from "react-router-dom";
import Label from "../../assets/images/label.png";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { scrollTo, updateLang } from "../../slicer/general/general.actions";
import { generalConstants } from "../../constants/general";
import { useState } from "react";
import Cart from "./Cart";
import DrawerMine from "../../components/Drawer";
import { CartProduct } from "../../slicer/cart/cart.types";
import { State } from "../../slicer/types";
import { BiHomeAlt2 } from "react-icons/bi";

const MenuBar = () => {
  const [cartDrawer, setCartDrawer] = useState<boolean>(false);
  const [mobileDrawer, setMobileDrawer] = useState<boolean>(false);

  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ICON_SIZE = "1.6rem";
  const MENU_COLOR =
    location.pathname === ROUTE_PATHS.HOME
      ? Colors.WHITE_SMUDGE
      : Colors.BLACKISH;
  const LABEL_SIZE = "220px";
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );
  const lang = useSelector<State, string>(
    (state) => state.general.lang || "EN"
  );

  const handleClick = (value: number) => {
    dispatch(scrollTo(value));
  };

  const handleChangeLang = () => {
    changeLanguage(lang === "PT" ? "en" : "pt");
  };

  const changeLanguage = (lng: string) => {
    dispatch(updateLang(lng.toUpperCase()));
    i18n.changeLanguage(lng);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  const renderLaptop = () => {
    return (
      <div
        style={{
          top: 0,
          width: "100vw",
          zIndex: 1000,
          position: "absolute",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
        }}
      >
        <Grid
          container
          display='flex'
          justifyContent='space-between'
          alignItems='start'
        >
          <Grid item>
            {location.pathname === ROUTE_PATHS.HOME && (
              <Box
                onClick={() => navigate(ROUTE_PATHS.HOME)}
                width={LABEL_SIZE}
                height={LABEL_SIZE}
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
            )}
          </Grid>
          <Grid item>
            <Box
              mt='4.2rem'
              display='flex'
              columnGap='40px'
              alignItems='center'
            >
              {location.pathname === ROUTE_PATHS.HOME && (
                <>
                  <Button
                    color={MENU_COLOR}
                    title={i18n.t("menuBar.about")}
                    onClick={() => handleClick(1)}
                  />

                  <Button
                    color={MENU_COLOR}
                    title={i18n.t("menuBar.collection")}
                    onClick={() => handleClick(2)}
                  />

                  <Button
                    color={MENU_COLOR}
                    title={i18n.t("menuBar.store")}
                    onClick={() => navigate(ROUTE_PATHS.SHOP)}
                  />
                </>
              )}

              <Box
                display='flex'
                columnGap='12px'
                alignItems='center'
                justifyContent='center'
              >
                {location.pathname === ROUTE_PATHS.HOME && (
                  <>
                    <Typography
                      color={MENU_COLOR}
                      className='icon'
                      style={{ cursor: "pointer" }}
                      onClick={() => handleChangeLang()}
                    >
                      {lang}
                    </Typography>
                    <BsInstagram
                      className='icon'
                      size='1.4rem'
                      color={MENU_COLOR}
                      style={{ cursor: "pointer" }}
                    />
                  </>
                )}
                {location.pathname !== ROUTE_PATHS.HOME && (
                  <BiHomeAlt2
                    onClick={() => navigate(ROUTE_PATHS.HOME)}
                    className='icon'
                    size='1.4rem'
                    color={MENU_COLOR}
                    style={{ cursor: "pointer" }}
                  />
                )}
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {cartProducts.length > 0 && (
                    <Box
                      style={{
                        position: "absolute",
                        right: -7,
                        bottom: -7,
                      }}
                    >
                      <Typography
                        fontWeight={800}
                        fontSize='12px'
                        color={MENU_COLOR}
                      >
                        {cartProducts.length}
                      </Typography>
                    </Box>
                  )}
                  <AiOutlineShopping
                    onClick={() => {
                      setCartDrawer(true);
                    }}
                    className='icon'
                    size={ICON_SIZE}
                    color={MENU_COLOR}
                    style={{ marginTop: "-3px", cursor: "pointer" }}
                  />
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <DrawerMine
          minWidth='30vw'
          fullHeight
          position='left'
          openDrawer={cartDrawer}
          setOpenDrawer={setCartDrawer}
        >
          <Cart />
        </DrawerMine>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='flex-end'
          style={{
            zIndex: 1000,
            position: "absolute",
            top: "30px",
            width: "100%",
            paddingRight: "30px",
          }}
        >
          <VscMenu
            size='35px'
            color={Colors.PRETTY_CREAM}
            onClick={() => setMobileDrawer(true)}
          />
        </Box>
        <DrawerMine
          fullWidth
          fullHeight
          position='left'
          openDrawer={mobileDrawer}
          setOpenDrawer={setMobileDrawer}
        >
          <Box mt="20px" padding='20px' display="flex" flexDirection="column" rowGap={4} justifyContent="center" alignItems="center">
            <Divider style={{ width: "80%" }} />
            {location.pathname !== ROUTE_PATHS.HOME && (
              <Typography
                style={{ textTransform: "uppercase" }}
                fontWeight={800}
                onClick={() => {
                  navigate(ROUTE_PATHS.HOME);
                  setMobileDrawer(false);
                }}
              >
                {i18n.t("menuBar.home")}
              </Typography>
            )}
            <Typography
              style={{ textTransform: "uppercase" }}
              fontWeight={800}
              onClick={() => {
                navigate(ROUTE_PATHS.ABOUT);
                setMobileDrawer(false);
              }}
            >
              {i18n.t("menuBar.about")}
            </Typography>
            <Typography
              style={{ textTransform: "uppercase" }}
              fontWeight={800}
              onClick={() => {
                navigate(ROUTE_PATHS.COLLECTION);
                setMobileDrawer(false);
              }}
            >
              {i18n.t("menuBar.collection")}
            </Typography>
            <Typography
              style={{ textTransform: "uppercase" }}
              fontWeight={800}
              onClick={() => {
                navigate(ROUTE_PATHS.SHOP);
                setMobileDrawer(false);
              }}
            >
              {i18n.t("menuBar.store")}
            </Typography>
            <Divider style={{ width: "80%" }} />
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              {cartProducts.length > 0 && (
                <Box
                  style={{
                    position: "absolute",
                    right: -7,
                    bottom: -7,
                  }}
                >
                  <Typography
                    fontWeight={800}
                    fontSize='12px'
                    color={Colors.BLACKISH}
                  >
                    {cartProducts.length}
                  </Typography>
                </Box>
              )}
              <AiOutlineShopping
                onClick={(e) => { e.preventDefault(); setMobileDrawer(false); setCartDrawer(true); }}

                className='icon'
                size={ICON_SIZE}
                color={Colors.BLACKISH}
                style={{ marginTop: "-3px", cursor: "pointer" }}
              />
            </div>

            <Divider style={{ width: "80%" }} />
            <BsInstagram
              className='icon'
              size='1.4rem'
              color={Colors.BLACKISH}
              style={{ cursor: "pointer" }}
            />
            <Divider style={{ width: "80%" }} />
            <Typography
              color={Colors.BLACKISH}
              className='icon'
              style={{ cursor: "pointer" }}
              onClick={() => handleChangeLang()}
            >
              {lang}
            </Typography>
          </Box>

        </DrawerMine>
        <DrawerMine


          fullHeight
          position='left'
          openDrawer={cartDrawer}
          setOpenDrawer={setCartDrawer}
        >
          <Cart closeCart={setCartDrawer} />
        </DrawerMine>
      </>
    );
  };

  return mobile ? renderMobile() : renderLaptop();
};

export default MenuBar;
