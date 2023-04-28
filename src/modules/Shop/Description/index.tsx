import { Typography, Divider, Box, useTheme, useMediaQuery } from "@mui/material";
import { i18n } from "../../../translations/i18n";
import FabricSelector from "./FabricSelector";
import { useContext, useEffect, useState } from "react";

import { ProductContext } from "../ProductContext";
import Detail from "./Detail";
import { categories } from "../../../constants/category";


const Description = () => {
  const { category, pattern, product } =
    useContext(ProductContext);
  const [moreInfo, setMoreInfo] = useState(false);
  const Theme = useTheme()
  //const mobile = useMediaQuery(Theme.breakpoints.down("sm"))

  useEffect(() => {
    setMoreInfo(false)
  }, [category, pattern])


  return (
    <Box
      style={{
        padding: "20px",

        minHeight: "500px",
      }}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      rowGap="10px"
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
      <Divider style={{ marginTop: "10px" }} />

      <>
        {category !== null && (
          <div
            style={{ marginTop: "20px", cursor: "pointer" }}
            onClick={() => setMoreInfo(!moreInfo)}
          >
            <Typography>{i18n.t("modules.product.moreInfo")}</Typography>
          </div>
        )}

        {moreInfo && product && category !== null && (
          <>
            <Detail
              detail={categories?.find((item) => item?.title === category)?.moreInfo?.description}
              title={i18n.t("modules.product.detail.description")}
            />
            <Detail
              detail={categories?.find((item) => item?.title === category)?.moreInfo?.dimensions}
              title={i18n.t("modules.product.detail.dimensions")}
            />
            <Detail
              detail={categories?.find((item) => item?.title === category)?.moreInfo?.washing}
              title={i18n.t("modules.product.detail.washing")}
            />
          </>
        )}
      </>

    </Box>
  );
};

export default Description;
