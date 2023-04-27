import { Typography, Divider, Box, useTheme, useMediaQuery } from "@mui/material";
import { i18n } from "../../../translations/i18n";
import FabricSelector from "./FabricSelector";
import { useContext, useState } from "react";
import Popup from "../../../components/Popup";
import { ProductContext } from "../ProductContext";
import MoreInfoPopup from "./MoreInfoPopup";


const Description = () => {
  const { category, pattern, infoPopup, setInfoPopup, } =
    useContext(ProductContext);
  const [moreInfo, setMoreInfo] = useState(false);
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"))


  return (
    <Box
      style={{
        padding: "20px",

        minHeight: "500px",
      }}
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
    >
      {category !== null && (
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
        >
          <Typography style={{ textTransform: "uppercase" }} fontWeight={800}>
            {category}
          </Typography>
          {/* <Typography fontWeight={800}>
            {categories[product].price}&nbsp;€
          </Typography> */}
        </Box>
      )}
      {pattern !== null && (
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
        >
          <Typography style={{ textTransform: "uppercase" }} fontWeight={800}>
            {pattern}
          </Typography>

        </Box>
      )}

      <Divider style={{ marginTop: "0px" }} />
      <div>
        <div>
          <FabricSelector />
        </div>
      </div>
      <Divider style={{ marginTop: "20px" }} />
      {category !== null && (
        <>
          <div
            style={{ marginTop: "20px", cursor: "pointer" }}
            onClick={() => setMoreInfo(!moreInfo)}
          >
            <Typography>{i18n.t("modules.product.moreInfo")}</Typography>
          </div>
          {moreInfo && (
            <>
              {/* <Detail
                detail={categories[product].moreInfo.description}
                title={i18n.t("modules.product.detail.description")}
              />
              <Detail
                detail={categories[product].moreInfo.dimensions}
                title={i18n.t("modules.product.detail.dimensions")}
              />
              <Detail
                detail={categories[product].moreInfo.washing}
                title={i18n.t("modules.product.detail.washing")}
              /> */}
            </>
          )}
        </>
      )}

      {category !== null && (
        <Popup
          closeButton={mobile ? true : false}
          openPopup={infoPopup}
          title={`${category}&nbsp;&#183;&nbsp;is this correct?€`}
          setOpenPopup={setInfoPopup}
          onClose={() => setInfoPopup(false)}
        >
          <MoreInfoPopup />
        </Popup>
      )}
      {pattern !== null && (
        <Popup
          closeButton={mobile ? true : false}
          openPopup={infoPopup}
          title={pattern}
          setOpenPopup={setInfoPopup}
          onClose={() => setInfoPopup(false)}
        >
          <MoreInfoPopup />
        </Popup>
      )}
    </Box>
  );
};

export default Description;
