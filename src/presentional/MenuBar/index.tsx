import { Box } from "@mui/material";
import { i18n } from "../../translations/i18n";
import { BiSearch } from "react-icons/bi"
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai"

import Button from "./Button";
import { Colors } from "../../constants/pallete";

const MenuBar = () => {




  return (
    <Box display="flex" columnGap="40px" alignItems="center" style={{ position: "absolute", top: "60px", right: "80px" }}>
      <Button title={i18n.t("menuBar.about")} />
      <Button title={i18n.t("menuBar.collection")} />
      <Button title={i18n.t("menuBar.store")} />
      <Box display="flex" columnGap="12px" alignItems="center">
        <BiSearch size="25px" color={Colors.PRETTY_CREAM} style={{ cursor: "pointer" }} />
        <AiOutlineHeart size="25px" color={Colors.PRETTY_CREAM} style={{ cursor: "pointer" }} />
        <AiOutlineShopping size="25px" color={Colors.PRETTY_CREAM} style={{ marginTop: "-3px", cursor: "pointer" }} />
      </Box>
    </Box>
  );
};

export default MenuBar;
