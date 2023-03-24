import { Card, Container, Grid, Typography, Divider, Box } from "@mui/material";
import CardMedia from "../../components/CardMedia";
import Detail from "./Detail";
import { i18n } from "../../translations/i18n";
import Incrementor from "../../components/Incrementor";
import Button from "../../components/Buttons/Button";
import FabricSelector from "./FabricSelector";
import { useState } from "react";

const Product = () => {
  const [imageIndex, setImageIndex] = useState<number>(0)
  const mokData = {
    title: "Moking Bag",

    fabric: ["fabric1", "fabric2", "fabric3"],
    price: 34,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    instructions: "Combined pockets on the front, kangaroo-style on the bib and patch pocket on the back. Closure with buttons on the sides. ",
    materials: "Combined pockets on the front, kangaroo-style on the bib and patch pocket on the back. Closure with buttons on the sides. ",
    images: [
      "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
      "https://www.indiewire.com/wp-content/uploads/2017/11/screen-shot-2017-11-16-at-1-08-00-pm.png?w=780",
      "https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmt8ZW58MHx8MHx8&w=1000&q=80",
      "https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197__340.jpg",
      "https://cdn.pixabay.com/photo/2018/03/13/02/43/eye-3221498__340.jpg",
      "https://media.istockphoto.com/id/1306704388/photo/the-photographer.jpg?s=612x612&w=0&k=20&c=awoiSLOA22QtH_-4oC_sZphhExbANjc5t73JMM1NZ40=",
      "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
      "https://cdn.pixabay.com/photo/2018/03/13/02/43/eye-3221498__340.jpg",
      "https://media.istockphoto.com/id/1306704388/photo/the-photographer.jpg?s=612x612&w=0&k=20&c=awoiSLOA22QtH_-4oC_sZphhExbANjc5t73JMM1NZ40=",
      "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",

    ],
  };

  return (
    <Container maxWidth={"xl"} >
      <Grid container mt='15vh' columnSpacing={3} rowSpacing={3}>
        <Grid item xs={12} sm={7} >
          <Card >
            <CardMedia image={mokData?.images[imageIndex]} height='600px' />
            <Box display="flex" style={{ padding: "10px" }} columnGap={1}>
              {mokData?.images?.map((item, pos) => {
                return (
                  <div key={pos} onClick={() => setImageIndex(pos)}>
                    <CardMedia image={item} height='100px' />
                  </div>
                )
              })}
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card style={{ padding: "20px", }} >
            <Typography fontWeight={800}>{mokData?.title}</Typography>
            <Typography>£ {mokData.price}</Typography>
            <Typography mt='40px'>{mokData.detail}</Typography>
            <Divider style={{ marginTop: '40px' }} />
            <div style={{ marginTop: "40px" }}>
              <Typography>{i18n.t("modules.product.fabrics")}</Typography>
              <div style={{ marginTop: "10px" }}>
                <FabricSelector listFabric={mokData?.fabric} />
              </div>
            </div>
            <Divider style={{ marginTop: '40px' }} />
            <div style={{ marginTop: "40px" }}>
              <Typography>{i18n.t("modules.product.quantity")}</Typography>
              <div style={{ marginTop: "10px" }}>
                <Incrementor />
              </div>
              <div style={{ marginTop: "20px" }}>
                <Button borderRadiusRight label={i18n.t("modules.product.addCart")} />
              </div>
            </div>
            <div style={{ marginTop: "40px" }}>
              <Detail title={i18n.t("modules.product.detail.instructions")} detail={mokData.instructions} />
              <Detail title={i18n.t("modules.product.detail.materials")} detail={mokData.materials} />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
