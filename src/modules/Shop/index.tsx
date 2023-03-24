import { Container, Grid, Typography } from "@mui/material";
import CardMedia from "../../components/CardMedia";

const Shop = () => {
  const mokData = [
    {
      title: "Moking Bag",

      fabric: ["Nylon", "Wool"],
      price: 34,
      detail: "somehgth",
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

      fabric: ["Nylon", "Wool"],
      price: 34,
      detail: "somehgth",
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

      fabric: ["Nylon", "Wool"],
      price: 34,
      detail: "somehgth",
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

      fabric: ["Nylon", "Wool"],
      price: 34,
      detail: "somehgth",
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

  return (
    <Container maxWidth='xl'>
      <Grid
        container
        columnSpacing={3}
        rowSpacing={3}

        mt='30vh'
      >
        {mokData.map((item, pos) => {
          return (
            <Grid item xs={4} key={pos}>
              <CardMedia image={item.images[0]} height='600px' />
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
