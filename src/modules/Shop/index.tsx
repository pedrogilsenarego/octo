import { Box, Container, Grid, Typography } from "@mui/material";
import CardMedia from "../../components/CardMedia";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../constants/routes";
import { useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { Filters } from "../../slicer/shop/shop.types"
import Element from "../../presentional/SharedComponents/Element";

const Shop = () => {
  const navigate = useNavigate()
  const mokData = [
    {
      title: "Moking Bag",
      uid: "ihihiojioo",
      fabric: ["0", "2"],
      price: 34,
      detail: "somehgth",
      instructions: "Ihiohiohoi",
      category: "0",
      images: [
        "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
        "https://www.indiewire.com/wp-content/uploads/2017/11/screen-shot-2017-11-16-at-1-08-00-pm.png?w=780",
        "https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmt8ZW58MHx8MHx8&w=1000&q=80",
        "https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197__340.jpg",
        "https://cdn.pixabay.com/photo/2018/03/13/02/43/eye-3221498__340.jpg",
        "https://media.istockphoto.com/id/1306704388/photo/the-photographer.jpg?s=612x612&w=0&k=20&c=awoiSLOA22QtH_-4oC_sZphhExbANjc5t73JMM1NZ40=",
        "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
      ],
    },
    {
      title: "Moking Bag",
      uid: "ihihiojioo",
      fabric: ["1", "2"],
      price: 34,
      detail: "somehgth",
      category: "2",
      instructions: "Ihiohiohoi",
      images: [
        "https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197__340.jpg",
        "https://www.indiewire.com/wp-content/uploads/2017/11/screen-shot-2017-11-16-at-1-08-00-pm.png?w=780",
        "https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmt8ZW58MHx8MHx8&w=1000&q=80",
        "https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197__340.jpg",
        "https://cdn.pixabay.com/photo/2018/03/13/02/43/eye-3221498__340.jpg",
        "https://media.istockphoto.com/id/1306704388/photo/the-photographer.jpg?s=612x612&w=0&k=20&c=awoiSLOA22QtH_-4oC_sZphhExbANjc5t73JMM1NZ40=",
        "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
      ],
    },
    {
      title: "Moking Bag",
      uid: "ihihiojioo",
      fabric: ["1", "0"],
      price: 34,
      detail: "somehgth",
      category: "0",
      instructions: "Ihiohiohoi",
      images: [
        "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
        "https://www.indiewire.com/wp-content/uploads/2017/11/screen-shot-2017-11-16-at-1-08-00-pm.png?w=780",
        "https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmt8ZW58MHx8MHx8&w=1000&q=80",
        "https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197__340.jpg",
        "https://cdn.pixabay.com/photo/2018/03/13/02/43/eye-3221498__340.jpg",
        "https://media.istockphoto.com/id/1306704388/photo/the-photographer.jpg?s=612x612&w=0&k=20&c=awoiSLOA22QtH_-4oC_sZphhExbANjc5t73JMM1NZ40=",
        "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
      ],
    },
    {
      title: "Moking Bag",
      uid: "ihihiojioo",
      fabric: ["0"],
      price: 34,
      detail: "somehgth",
      category: "5",
      instructions: "Ihiohiohoi",
      images: [
        "https://www.indiewire.com/wp-content/uploads/2017/11/screen-shot-2017-11-16-at-1-08-00-pm.png?w=780",
        "https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmt8ZW58MHx8MHx8&w=1000&q=80",
        "https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197__340.jpg",
        "https://cdn.pixabay.com/photo/2018/03/13/02/43/eye-3221498__340.jpg",
        "https://media.istockphoto.com/id/1306704388/photo/the-photographer.jpg?s=612x612&w=0&k=20&c=awoiSLOA22QtH_-4oC_sZphhExbANjc5t73JMM1NZ40=",
        "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
      ],
    },
  ];

  const filters = useSelector<State, Filters>(
    (state) => state?.shop.filters
  );

  const filterData = () => {
    if (filters?.category !== "" && filters?.fabric.length !== 0) {
      const filterFabric = mokData.filter(obj => obj.fabric.some(fabric => filters.fabric.includes(fabric)))
      return filterFabric.filter(obj => obj.category === filters?.category)
    }
    if (filters?.category !== "") {
      return mokData.filter(obj => obj.category === filters?.category)
    }
    if (filters?.fabric.length !== 0) { return mokData.filter(obj => obj.fabric.some(fabric => filters.fabric.includes(fabric))) }
    else return mokData
  }

  return (
    <Container maxWidth='xl'>
      <Grid
        container
        columnSpacing={3}
        rowSpacing={3}

        mt='15vh'
      >
        {filterData().map((item, pos) => {
          return (
            <Grid item xs={12} sm={4} key={pos} style={{ position: "relative" }}>
              <CardMedia image={item.images[0]} height='600px' onClick={() =>
                navigate(
                  ROUTE_PATHS.PRODUCT.replace(
                    ":id",
                    mokData[pos].uid
                  )
                )
              } />
              <Box display='flex' columnGap={1} style={{ position: "absolute", bottom: 60, right: 10 }}>
                {item.fabric.map((item: string, pos: number) => {
                  return (
                    <div key={pos}>
                      <Element size="40px" valuee={item} />
                    </div>
                  );
                })}
              </Box>
              <Typography>{item.title}</Typography>
              <Typography>£ {item.price}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Shop;
