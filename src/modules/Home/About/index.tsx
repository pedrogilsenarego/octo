import { Box, Typography } from "@mui/material";
import { generalConstants } from "../../../constants/general";
import { Colors } from "../../../constants/pallete";
import { i18n } from "../../../translations/i18n";

const About = () => {
  return (
    <>
      <Box
        display='flex'
        columnGap={2}
        rowGap={4}
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
          width: "100vw",
          height: "100vh",

        }}
      >
        <Box style={{
          width: "35vw",
          height: "35vw",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkaQA6PkIR_hCrT0E_3ksrIemWd1_Rz7hD5zVB5CaBwosrml_B-rnZ-V5B330m0o4NWcg&usqp=CAU)"

        }}>
          <img
            style={{
              width: "32vw",
              height: "32vw",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center",
              filter: "sepia(60%) blur(1px)"
            }}
            src='https://tse2.mm.bing.net/th?id=OIP.1q22bdxzzLyWOu0seyXHKQHaHa&pid=Api&P=0'
            alt=''
          />
        </Box>
        <Box display='flex' justifyContent='center'>
          <Typography
            color={Colors.BLACKISH}
            fontSize='22px'
            style={{ textTransform: "uppercase", cursor: "pointer" }}
          >
            {i18n.t("modules.home.about")}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
