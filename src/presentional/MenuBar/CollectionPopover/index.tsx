import { Grid, Box } from "@mui/material";
import "./index.css";

import { Colors } from "../../../constants/pallete";
import icon1 from "../../../assets/icons/icon1.png";
import icon2 from "../../../assets/icons/OCTO_Icones-02.png";
import icon3 from "../../../assets/icons/OCTO_Icones-03.png";
import icon4 from "../../../assets/icons/OCTO_Icones-04.png";
import icon5 from "../../../assets/icons/OCTO_Icones-05.png";
import icon6 from "../../../assets/icons/OCTO_Icones-06.png";
import icon7 from "../../../assets/icons/OCTO_Icones-07.png";
import icon8 from "../../../assets/icons/OCTO_Icones-08.png";

const CollectionPopover = () => {
  const listOfIcons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];
  return (
    <Box
      style={{
        margin: "5px",
        //border: `dashed 2px ${Colors.NEON_YELLOW}`,
        borderRadius: "4px",
      }}
    >
      <Grid
        container
        style={{ padding: "10px", borderRadius: "10px", maxWidth: "480px" }}
        columnSpacing={1}
        rowSpacing={1}


      >
        {listOfIcons.map((item, pos) => {
          return (
            <Grid
              key={pos}
              item
              justifyContent='center'
              alignItems='center'
              xs={3}
              style={{ cursor: "pointer", }}
            >
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                style={{

                  backgroundColor: Colors.BLACKISH,
                  borderRadius: "2px",
                  boxShadow: "2px 2px 10px 2px #00000066",
                }}
              >
                <img
                  src={item}
                  alt=''
                  style={{
                    margin: "-10px",
                    height: "120px",
                    width: "120px",
                    color: "black",
                  }}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CollectionPopover;
