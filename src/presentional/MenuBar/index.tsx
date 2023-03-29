import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../translations/i18n";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";
import { BsInstagram } from "react-icons/bs";
import Button from "./Button";
import { Colors } from "../../constants/pallete";
import { ROUTE_PATHS } from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import Label from "../../assets/images/label.png";
import "./index.css"

const MenuBar = () => {
  const ICON_SIZE = "1.6rem";
  const MENU_COLOR = Colors.WHITE_SMUDGE
  const LABEL_SIZE = "220px";
  const theme = useTheme();
  const navigate = useNavigate();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderLaptop = () => {
    return (
      <div
        style={{
          top: 0,
          width: "100vw",
          zIndex: 1000,
          position: "absolute",
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
            </Grid>
            <Grid item>
              <Box
                mt='4.2rem'
                style={{
                  marginRight: "-6rem",
                }}
                display='flex'
                columnGap='40px'
                alignItems='center'
              >
                <Button
                  title={i18n.t("menuBar.about")}
                  link={ROUTE_PATHS.ABOUT}
                />

                <Button
                  title={i18n.t("menuBar.collection")}
                  link={ROUTE_PATHS.COLLECTION}
                />

                <Button
                  title={i18n.t("menuBar.store")}
                  link={ROUTE_PATHS.SHOP}
                />

                <Box display='flex' columnGap='12px' alignItems='center'>
                  <BiSearch
                    className="icon"
                    size={ICON_SIZE}
                    color={MENU_COLOR}
                    style={{ cursor: "pointer" }}

                  />
                  <BsInstagram
                    className="icon"
                    size={ICON_SIZE}
                    color={MENU_COLOR}
                    style={{ cursor: "pointer" }}
                  />
                  <AiOutlineShopping
                    className="icon"
                    size={ICON_SIZE}
                    color={MENU_COLOR}
                    style={{ marginTop: "-3px", cursor: "pointer" }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
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
