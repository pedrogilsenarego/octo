import { Card } from "@mui/material";
import CardMedia from "../../../../components/CardMedia";



const ImageShow = () => {

  const mokData = {
    title: "Moking Bag",

    fabric: ["0", "1", "2"],
    price: 34,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    instructions: "Combined pockets on the front, kangaroo-style on the bib and patch pocket on the back. Closure with buttons on the sides. ",
    materials: "Combined pockets on the front, kangaroo-style on the bib and patch pocket on the back. Closure with buttons on the sides. ",
    images: [
      "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
      "https://www.indiewire.com/wp-content/uploads/2017/11/screen-shot-2017-11-16-at-1-08-00-pm.png?w=780",

    ],
  };

  return (

    <Card >
      <CardMedia image={mokData?.images[0]} height='100%' />

    </Card>



  );
};

export default ImageShow;
