import { Typography, Divider, Box } from "@mui/material";
import CardMedia from "../../../../components/CardMedia";
import Detail from "./Detail";
import { i18n } from "../../../../translations/i18n";
import Incrementor from "../../../../components/Incrementor";
import Button from "../../../../components/Buttons/Button";
import FabricSelector from "./FabricSelector";
import { useState } from "react";
import { Colors } from "../../../../constants/pallete";
import Popup from "../../../../components/Popup";

const Description = () => {
  const [imageIndex, setImageIndex] = useState<number>(0)
  const [infoPopup, setInfoPopup] = useState<boolean>(false)
  const mokData = {
    title: "Moking Bag",

    fabric: ["0", "1", "2"],
    price: 34,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    instructions: "Combined pockets on the front, kangaroo-style on the bib and patch pocket on the back. Closure with buttons on the sides. ",
    materials: "Combined pockets on the front, kangaroo-style on the bib and patch pocket on the back. Closure with buttons on the sides. ",
    images: [
      "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
      "https://www.indiewire.com/wp-content/uploads/2017/11/screen-shot-2017-11-16-at-1-08-00-pm.png?w=780",

    ],
  };

  return (


    <Box style={{ padding: "20px", border: `solid 2px ${Colors.BLACKISH}`, borderRadius: "5px" }} display="flex" flexDirection="column" justifyContent="space-between" >
      <Typography fontWeight={800}>{mokData?.title}</Typography>
      <Typography>£ {mokData.price}</Typography>

      <Divider style={{ marginTop: '20px' }} />
      <div style={{ marginTop: "20px" }}>
        <Typography>{i18n.t("modules.product.fabrics")}</Typography>
        <div style={{ marginTop: "10px" }}>
          <FabricSelector listFabric={mokData?.fabric} />
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
