import { Typography, Divider, Box } from "@mui/material";

import { i18n } from "../../../translations/i18n";
import { categories } from "../../../constants/category";
import FabricSelector from "./FabricSelector";
import { useContext } from "react";
import Popup from "../../../components/Popup";
import { ProductContext } from "../ProductContext";
import MoreInfoPopup from "./MoreInfoPopup";
import { fabrics } from "../../../constants/fabrics";

const Description = () => {
  const { product, fabric, infoPopup, setInfoPopup } = useContext(ProductContext);


  return (
    <Box
      style={{
        padding: "20px",

        borderRadius: "5px",
      }}
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
    >
      {product !== null && (
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight={800}>{categories[product].title}</Typography>
          <Typography fontWeight={800}>{categories[product].price}&nbsp;&#183;&nbsp;€</Typography>
        </Box>
      )}

      <Divider style={{ marginTop: "10px" }} />
      <div style={{ marginTop: "40px" }}>
        <Typography>{product !== null ? i18n.t("modules.product.fabrics") : i18n.t("modules.product.products")}&nbsp;&#183;</Typography>
        <div style={{ marginTop: "10px" }}>
          <FabricSelector />
        </div>
      </div>
      <Divider style={{ marginTop: "20px" }} />
      <div
        style={{ marginTop: "20px", cursor: "pointer" }}

      >
        <Typography>{i18n.t("modules.product.moreInfo")}</Typography>
      </div>
      {product !== null && (<Popup
        openPopup={infoPopup}
        title={categories[product].title}
        setOpenPopup={setInfoPopup}
        onClose={() => setInfoPopup(false)}
      >
        <MoreInfoPopup />
      </Popup>)}
      {fabric !== null && (<Popup
        openPopup={infoPopup}
        title={fabrics[fabric].title}
        setOpenPopup={setInfoPopup}
        onClose={() => setInfoPopup(false)}
      >
        <MoreInfoPopup />
      </Popup>)}
    </Box>
  );
};

export default Description;
