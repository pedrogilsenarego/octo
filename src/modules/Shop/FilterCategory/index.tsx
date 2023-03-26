import { Paper, Grid, Box, Typography } from "@mui/material";
import Image from "./Image";
import { i18n } from "../../../translations/i18n";
import { useDispatch } from "react-redux";
import { Colors } from "../../../constants/pallete";
import { Container } from "@mui/system";
import { updateFilters } from "../../../slicer/shop/shop.actions";
import { categories } from "../../../constants/category";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../constants/routes";

const FilterCategory = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChooseCategory = (category: string) => {
    dispatch(updateFilters({
      category,
      fabric: []
    }))
    navigate(ROUTE_PATHS.SHOP)
  }
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
          style={{ borderRadius: "10px", marginTop: "-30px" }}
          columnSpacing="50px"
          rowSpacing="50px"
        >
          {categories.map((item, pos) => {
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
                  onClick={() => handleChooseCategory(item.value)}
                  display='flex'
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
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Container>
  );
};

export default FilterCategory;
