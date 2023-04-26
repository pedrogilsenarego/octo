import { Typography, Divider, Box, useTheme, useMediaQuery } from "@mui/material";
import { i18n } from "../../../translations/i18n";
import FabricSelector from "./FabricSelector";
import { useContext, useState } from "react";
import Popup from "../../../components/Popup";
import { ProductContext } from "../ProductContext";
import MoreInfoPopup from "./MoreInfoPopup";
import { fabrics } from "../../../constants/fabrics";
import Detail from "../../Shop/Description/Detail"
import { categories } from "../../../constants/category";
import { Colors } from "../../../constants/pallete";

const Description = () => {
  const { category, pattern, infoPopup, setInfoPopup, selectedFabrics, products } =
    useContext(ProductContext);
  const [moreInfo, setMoreInfo] = useState(false);
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"))


  return (
    <Box
      style={{
        padding: "20px",
        backgroundColor: Colors.PRETTY_CREAM,
        borderRadius: "5px",
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
          <Box display='flex' alignItems='center'>
            {selectedFabrics.map((item, pos) => {
              return <Typography key={pos}>&nbsp;{item.price} | </Typography>;
            })}

            <Typography fontWeight={800}>&nbsp;€</Typography>
          </Box>
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

      {/* {category !== null && (
        // <Popup
        //   closeButton={mobile ? true : false}
        //   openPopup={infoPopup}
        //   title={`${categories[product].title}&nbsp;&#183;&nbsp;${categories[product].price}€`}
        //   setOpenPopup={setInfoPopup}
        //   onClose={() => setInfoPopup(false)}
        // >
        //   <MoreInfoPopup />
        // </Popup>
      )}
      {pattern !== null && (
        <Popup
          closeButton={mobile ? true : false}
          openPopup={infoPopup}
          title={fabrics[fabric].title}
          setOpenPopup={setInfoPopup}
          onClose={() => setInfoPopup(false)}
        >
          <MoreInfoPopup />
        </Popup>
      )} */}
    </Box>
  );
};

export default Description;
