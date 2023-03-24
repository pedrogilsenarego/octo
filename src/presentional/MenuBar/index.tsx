import { Box, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../translations/i18n";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";
import { BsInstagram } from "react-icons/bs";

import Button from "./Button";
import { Colors } from "../../constants/pallete";
import { ROUTE_PATHS } from "../../constants/routes";
import BasicPopover from "../../components/Popover";
import { useState } from "react";
import CollectionPopover from "./CollectionPopover";

const MenuBar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorPopover, setAnchorPopover] = useState<any>(null);

  const renderLaptop = () => {
    return (
      <>
        <Box mt="20px" display='flex' columnGap='40px' alignItems='center' >
          <Button
            title={i18n.t("menuBar.about")}
            link={ROUTE_PATHS.ABOUT}
            setAnchorPopover={setAnchorPopover}
          />

          <Button
            title={i18n.t("menuBar.collection")}
            link={ROUTE_PATHS.COLLECTION}
            setAnchorPopover={setAnchorPopover}
            collection
          />

          <Button
            title={i18n.t("menuBar.store")}
            link={ROUTE_PATHS.SHOP}
            setAnchorPopover={setAnchorPopover}
          />
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
        <BasicPopover anchorEl={anchorPopover} setAnchorEl={setAnchorPopover}>
          <CollectionPopover />
        </BasicPopover>
      </>
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
