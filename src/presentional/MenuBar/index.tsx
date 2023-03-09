import { Box } from "@mui/material";
import { i18n } from "../../translations/i18n";

import Button from "./Button";

const MenuBar = () => {




  return (
    <Box display="flex" columnGap="20px" style={{ position: "absolute", top: "100px", right: "100px" }}>
      <Button title={i18n.t("menuBar.about")} />
      <Button title={i18n.t("menuBar.collection")} />
      <Button title={i18n.t("menuBar.store")} />
    </Box>
  );
};

export default MenuBar;
