import { Paper, Grid, Box, Typography } from "@mui/material";
import Image from "./Image";
import { i18n } from "../../../../translations/i18n";
import { useDispatch } from "react-redux";
import { Colors } from "../../../../constants/pallete";
import { updateFilters } from "../../../../slicer/shop/shop.actions";
import { categories } from "../../../../constants/category";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../constants/routes";

const FilterCategory = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChooseCategory = (category: string) => {
    dispatch(updateFilters({
      category,
      fabric: []
    }))
  }
  return (

    <Paper style={{ padding: "20px", marginTop: "60px" }}>
      <Typography fontWeight={800}>
        {i18n.t("modules.shopCategory.title")}
      </Typography>
      <Grid
        container
        style={{ borderRadius: "10px", marginTop: "1px" }}
        columnSpacing={2}
        rowSpacing={2}
      >
        {categories.map((item, pos) => {
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
                onClick={() => handleChooseCategory(item.value)}
                display='flex'
                flexDirection="column"
                justifyContent='center'
                alignItems='center'
                style={{
                  backgroundColor: Colors.PRETTY_CREAM,
                  borderRadius: "2px",
                  boxShadow: "2px 2px 10px 2px #00000066",
                }}
              >
                <Image item={item.image} />

              </Box>
              <Box display="flex" justifyContent="center" mt="10px">
                <Typography>{item.title}</Typography>
              </Box>

            </Grid>
          );
        })}
      </Grid>
    </Paper>

  );
};

export default FilterCategory;
