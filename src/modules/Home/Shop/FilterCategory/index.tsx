import { Grid, Box, Typography } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { categories } from "../../../../constants/category";
import { useContext, useState } from "react";
import { fabrics } from "../../../../constants/fabrics";
import { ProductContext } from "../ProductContext";

const FilterCategory = () => {

  const { setFabric, setProduct } = useContext(ProductContext);
  const [categoryText, setCategoryText] = useState("")
  const [filterText, setFilterText] = useState("")



  return (
    <Box>
      <Box display="flex" columnGap={2} alignItems="center" >
        <Typography fontWeight={800}>
          {i18n.t("modules.shopCategory.title")}
        </Typography>
        <Typography >
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
              xs={12 / 8}
              style={{ cursor: "pointer" }}
            >
              <Box
                onClick={() => setProduct(item.id)}
                display="flex"
                onMouseEnter={() => setCategoryText(item.title)}
                onMouseLeave={() => setCategoryText("")}
                justifyContent="center"
                alignItems="center"
                style={{
                  borderRadius: "50%",
                  width: "100%",

                  boxShadow: "0px 0px 10px 0px #0000001e",
                  paddingBottom: `${aspectRatio * 100}%`,
                  backgroundImage: `url(${item.icon})`,
                  backgroundSize: "cover"
                }}
              >
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box display="flex" columnGap={2} alignItems="center" mt="30px" >
        <Typography fontWeight={800}>
          {i18n.t("modules.shopFabric.title")}
        </Typography>
        <Typography >
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


              <Box
                onClick={() => setFabric(item.id)}
                display="flex"
                onMouseEnter={() => setFilterText(item.title)}
                onMouseLeave={() => setFilterText("")}
                justifyContent="center"
                alignItems="center"
                style={{
                  borderRadius: "50%",
                  width: "100%",

                  boxShadow: "0px 0px 10px 0px #0000001e",
                  paddingBottom: `${aspectRatio * 100}%`,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover"
                }}
              >
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default FilterCategory;
