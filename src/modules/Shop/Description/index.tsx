import { Typography, Divider, Box } from "@mui/material";

import { i18n } from "../../../translations/i18n";
import { categories } from "../../../constants/category";
import FabricSelector from "./FabricSelector";
import { useContext } from "react";
import Popup from "../../../components/Popup";
import { ProductContext } from "../ProductContext";
import MoreInfoPopup from "./MoreInfoPopup";
import { fabrics } from "../../../constants/fabrics";
import { Colors } from "../../../constants/pallete";

const Description = () => {
  const { product, fabric, infoPopup, setInfoPopup } = useContext(ProductContext);

  return (
    <Box
      style={{
        padding: "20px",
        //backgroundColor: Colors.PRETTY_CREAM,
        borderRadius: "5px",
        minHeight: "500px",
      }}
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
    >
      {product !== null && (
        <Box display="flex" flexDirection="column" justifyContent="space-between">
          <Typography style={{ textTransform: "uppercase" }} fontWeight={800}>{categories[product].title}</Typography>
          <Typography fontWeight={800}>{categories[product].price}&nbsp;&#183;&nbsp;€</Typography>
        </Box>
      )}
      {fabric !== null && (
        <Box display="flex" justifyContent="start">
          <Typography style={{ textTransform: "uppercase" }} fontWeight={800}>{fabrics[fabric].title}</Typography>

        </Box>
      )}


      <Divider style={{ marginTop: "0px" }} />
      <div >
        <div >
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
