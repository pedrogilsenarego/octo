import { Box, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../translations/i18n";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";

import Button from "./Button";
import { Colors } from "../../constants/pallete";

const MenuBar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderLaptop = () => {
    return (
      <Box
        display='flex'
        columnGap='40px'
        alignItems='center'
        style={{ position: "absolute", top: "60px", right: "80px" }}
      >
        <Button title={i18n.t("menuBar.about")} />
        <Button title={i18n.t("menuBar.collection")} />
        <Button title={i18n.t("menuBar.store")} />
        <Box display='flex' columnGap='12px' alignItems='center'>
          <BiSearch
            size='25px'
            color={Colors.PRETTY_CREAM}
            style={{ cursor: "pointer" }}
          />
          <AiOutlineHeart
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
