import { Typography, Divider, Box } from "@mui/material";

import { i18n } from "../../../../translations/i18n";
import { categories } from "../../../../constants/category"
import FabricSelector from "./FabricSelector";
import { useContext, useState } from "react";
import { Colors } from "../../../../constants/pallete";
import Popup from "../../../../components/Popup";
import { ProductContext } from "../ProductContext";

const Description = () => {
  const { product } = useContext(ProductContext)
  const [infoPopup, setInfoPopup] = useState<boolean>(false)


  return (


    <Box style={{ padding: "20px", border: `solid 2px ${Colors.BLACKISH}`, borderRadius: "5px" }} display="flex" flexDirection="column" justifyContent="space-between" >
      <Typography fontWeight={800}>{categories[parseInt(product)].title}</Typography>
      <Typography>£ {categories[parseInt(product)].price}</Typography>

      <Divider style={{ marginTop: '20px' }} />
      <div style={{ marginTop: "20px" }}>
        <Typography>{i18n.t("modules.product.fabrics")}</Typography>
        <div style={{ marginTop: "10px" }}>
          <FabricSelector listFabric={categories[parseInt(product)].patterns} />
        </div>
      </div>
      <Divider style={{ marginTop: '40px' }} />
      <div style={{ marginTop: "20px", cursor: "pointer" }} onClick={() => setInfoPopup(true)}>
        <Typography>{i18n.t("modules.product.moreInfo")}</Typography>
      </div>
      <Popup openPopup={infoPopup} title="teste" setOpenPopup={setInfoPopup}
        onClose={() => setInfoPopup(false)}

      >
        <Typography>
          teste
        </Typography>
      </Popup>
    </Box >


  );
};

export default Description;