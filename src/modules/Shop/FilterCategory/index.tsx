import { Grid, Box, Typography } from "@mui/material";
import { i18n } from "../../../translations/i18n";
import { categories } from "../../../constants/category";
import { fabrics } from "../../../constants/fabrics";
import Element from "./Element";
import { useState } from "react";
import { Colors } from "../../../constants/pallete";

const FilterCategory = () => {
  const [categoryText, setCategoryText] = useState("");
  const [filterText, setFilterText] = useState("");

  return (
    <div
      style={{
        borderBottom: `solid 2px ${Colors.PRETTY_CREAM}`,
        paddingLeft: "18vw",
        paddingRight: "18vw",
        paddingTop: "10px",
        paddingBottom: "60px",
        marginBottom: "10px"
      }}
    >
      <Grid container columnSpacing='30px' rowGap={3} style={{ marginTop: "20px" }}>
        <Grid item xs={12}>
          <Box display='flex' flexDirection='column' rowGap={2}>
            <Box display='flex' columnGap={0} alignItems='center' justifyContent="center">
              <Typography fontWeight={800}>
                {i18n.t("modules.shopCategory.title")}&nbsp;&#183;&nbsp;
              </Typography>
              <Typography style={{ textTransform: "uppercase" }}>
                {categoryText}
              </Typography>
            </Box>
            <Grid
              container
              style={{ borderRadius: "10px" }}
              columnSpacing={2}
              rowSpacing={1}
            >
              {categories.map((item, pos) => {
                return (
                  <Grid
                    key={pos}
                    item
                    justifyContent='center'
                    alignItems='center'
                    xs={12 / 10}
                    style={{ cursor: "pointer" }}
                  >
                    <Element key={pos} setText={setCategoryText} item={item} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} mt="20px">
          <Box display='flex' flexDirection='column' rowGap={2} >
            <Box display='flex' columnGap={0} alignItems='center' justifyContent="center">
              <Typography fontWeight={800}>
                {i18n.t("modules.shopFabric.title")}&nbsp;&#183;&nbsp;
              </Typography>
              <Typography style={{ textTransform: "uppercase" }}>
                {filterText}
              </Typography>
            </Box>
            <Grid
              container
              style={{ borderRadius: "10px", marginTop: "5px" }}
              columnSpacing="30px"
              rowGap={2}
            >
              {fabrics.map((item, pos) => {
                return (
                  <Grid
                    key={pos}
                    item
                    justifyContent='center'
                    alignItems='center'
                    xs={12 / 8}
                    style={{ cursor: "pointer" }}
                  >
                    <Element setText={setFilterText} item={item} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default FilterCategory;
