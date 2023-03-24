import { Paper, Grid, Box, Typography } from "@mui/material";
import Image from "./Image";
import { i18n } from "../../../translations/i18n";

import icon1 from "../../../assets/icons/icon1.png";
import icon2 from "../../../assets/icons/OCTO_Icones-02.png";
import icon3 from "../../../assets/icons/OCTO_Icones-03.png";
import icon4 from "../../../assets/icons/OCTO_Icones-04.png";
import icon5 from "../../../assets/icons/OCTO_Icones-05.png";
import icon6 from "../../../assets/icons/OCTO_Icones-06.png";
import icon7 from "../../../assets/icons/OCTO_Icones-07.png";
import icon8 from "../../../assets/icons/OCTO_Icones-08.png";
import { Colors } from "../../../constants/pallete";
import { Container } from "@mui/system";

const FilterCategory = () => {
  const listOfIcons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];
  return (
    <Container
      maxWidth='xl'
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper style={{ padding: "40px", marginTop: "100px" }}>
        <Typography fontWeight={800}>
          {i18n.t("modules.shopCategory.title")}
        </Typography>
        <Grid
          container
          style={{ borderRadius: "10px", marginTop: "0px" }}
          columnSpacing={4}
          rowSpacing={4}
        >
          {listOfIcons.map((item, pos) => {
            return (
              <Grid
                key={pos}
                item
                justifyContent='center'
                alignItems='center'
                xs={3}
                style={{ cursor: "pointer" }}
              >
                <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  style={{
                    backgroundColor: Colors.PRETTY_CREAM,
                    borderRadius: "2px",
                    boxShadow: "2px 2px 10px 2px #00000066",
                  }}
                >
                  <Image item={item} />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Container>
  );
};

export default FilterCategory;
