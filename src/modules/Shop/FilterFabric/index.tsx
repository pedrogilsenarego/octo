import { Paper, Grid, Box, Typography } from "@mui/material";
import { useState } from "react";
import { i18n } from "../../../translations/i18n";
import { useDispatch } from "react-redux";
import { Container } from "@mui/system";
import { updateFilters } from "../../../slicer/shop/shop.actions";
import { fabrics } from "../../../constants/fabrics";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../constants/routes";
import Element from "../../../presentional/SharedComponents/Element";
import Button from "../../../components/Buttons/Button";

const FilterFabric = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([])

  const handleSelectFabrics = (fabric: string) => {
    if (!selectedFabrics.includes(fabric)) {
      setSelectedFabrics([...selectedFabrics, fabric])
    }
    else {
      setSelectedFabrics(selectedFabrics.filter(function (e) { return e !== fabric }))
    }
  }

  const handleChooseFabrics = () => {
    dispatch(updateFilters({
      fabric: selectedFabrics,
      category: ""
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
          {i18n.t("modules.shopFabric.title")}
        </Typography>
        <Grid
          container
          style={{ borderRadius: "10px", marginTop: "-30px" }}
          columnSpacing="50px"
          rowSpacing="50px"
        >
          {fabrics.map((item, pos) => {
            return (
              <Grid
                key={pos}
                item
                justifyContent='center'
                alignItems='center'

                style={{ cursor: "pointer" }}
              >
                <Box
                  onClick={() => handleSelectFabrics(item.value)}

                >
                  <Element size="170px" valuee={item.value} />
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Box display="flex" justifyContent="flex-end" style={{ marginTop: "50px" }}>
          <Button onClick={() => handleChooseFabrics()} label={i18n.t("modules.shopFabric.nextButton")} />
        </Box>
      </Paper>
    </Container>
  );
};

export default FilterFabric;
