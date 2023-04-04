import { Grid, Box, Typography } from "@mui/material";
import { i18n } from "../../../translations/i18n";
import { categories } from "../../../constants/category";
import { fabrics } from "../../../constants/fabrics";
import Element from "./Element";
import { useState } from "react";

const FilterCategory = () => {
  const [categoryText, setCategoryText] = useState("")
  const [filterText, setFilterText] = useState("")



  return (
    <Box>
      <Box display="flex" columnGap={0} alignItems="center" >
        <Typography fontWeight={800}>
          {i18n.t("modules.shopCategory.title")}&nbsp;&#183;&nbsp;
        </Typography>
        <Typography style={{ textTransform: "uppercase" }}>
          {categoryText}
        </Typography>
      </Box>
      <Grid
        container
        style={{ borderRadius: "10px", marginTop: "1px" }}
        columnSpacing={1.5}
        rowSpacing={1}
      >
        {categories.map((item, pos) => {
          const img = new Image();
          img.src = item.icon;
          const aspectRatio = img.naturalHeight / img.naturalWidth;
          return (
            <Grid
              key={pos}
              item
              justifyContent='center'
              alignItems='center'
              xs={12 / 9}
              style={{ cursor: "pointer" }}
            >
              <Element aspectRatio={aspectRatio} setText={setCategoryText} item={item} />
            </Grid>
          );
        })}
      </Grid>
      <Box display="flex" columnGap={0} alignItems="center" mt="30px" >
        <Typography fontWeight={800}>
          {i18n.t("modules.shopFabric.title")}&nbsp;&#183;&nbsp;
        </Typography>
        <Typography style={{ textTransform: "uppercase" }}>
          {filterText}
        </Typography>
      </Box>
      <Grid
        container
        style={{ borderRadius: "10px", marginTop: "1px" }}
        columnSpacing={1.5}
        rowSpacing={2}
      >
        {fabrics.map((item, pos) => {
          const img = new Image();
          img.src = item.image;
          const aspectRatio = img.naturalHeight / img.naturalWidth;
          return (
            <Grid
              key={pos}
              item
              justifyContent='center'
              alignItems='center'
              xs={12 / 8}
              style={{ cursor: "pointer" }}
            >


              <Element aspectRatio={aspectRatio} setText={setFilterText} item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default FilterCategory;
