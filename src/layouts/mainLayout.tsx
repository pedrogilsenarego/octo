import { Box } from "@mui/material";
import MenuBar from "../presentional/MenuBar";

export const MainLayout = () => {
  const Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudm_2pz9c0RXiY9TkkEziaoRQE5w5gNZj_g&usqp=CAU"
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      style={{
        width: "100vw",
        height: "100vh",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Image})`,
        backgroundSize: "100%"
      }}
    >
      <MenuBar />
    </Box>
  );
};
