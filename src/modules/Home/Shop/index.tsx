import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "../../../components/Buttons/Button";
import React from "react";
import { categories } from "../../../constants/category";
import { fabrics } from "../../../constants/fabrics";
import { Colors } from "../../../constants/pallete";
import { i18n } from "../../../translations/i18n";
import Element from "./Element";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../constants/routes";

const Shop = () => {
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"))
  const navigate = useNavigate()

  return (
    <Box
      display='flex'
      style={{
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100vw",
        height: "100vh",
        padding: "15vw",
        flexDirection: "column",
      }}
    >
      <Typography
        style={{
          textTransform: "uppercase",
          fontWeight: 800,
          fontSize: "1.2rem",
        }}
      >
        Products
      </Typography>

      <Grid
        container
        style={{ borderRadius: "10px", marginTop: "10px" }}
        columnSpacing='15px'
        rowSpacing='20px'
      >
        {categories.map((item, pos) => {

          return (
            <Grid
              key={pos}
              item
              justifyContent='center'
              alignItems='center'
              xs={12 / 5} sm={12 / 10}
              style={{ cursor: "pointer" }}
            >
              <Element key={pos} item={item} />
            </Grid>
          );
        })}
      </Grid>
      <Typography
        mt={mobile ? "5vh" : '11vh'}
        style={{
          fontSize: "1.2rem",
          textTransform: "uppercase",
          fontWeight: 800,
        }}
      >
        Patterns
      </Typography>
      <Grid
        container
        style={{ borderRadius: "10px", marginTop: "-10px" }}
        columnSpacing={mobile ? 2 : 5}
        rowSpacing={mobile ? 3 : 5}
      >
        {fabrics.map((item, pos) => {
          return (
            <Grid
              key={pos}
              item
              justifyContent='center'
              alignItems='center'
              xs={12 / 4} sm={12 / 8}
              style={{ cursor: "pointer" }}
            >
              <Element key={pos} item={item} />
            </Grid>
          );
        })}
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => navigate(ROUTE_PATHS.SHOP)}
            colorHover={Colors.NEON_YELLOW_TRANSPARENT}
            label={i18n.t("modules.home.shopOurCollection")}
          />
        </div>
      </Grid>
    </Box>
  );
};

export default Shop;
