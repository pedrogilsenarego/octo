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
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
          width: "100vw",
          height: "100vh",

        }}
      >
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <img
          style={{
            width: "40vw",
            height: "40vw",
            objectFit: "cover",
            objectPosition: "center",
          }}
          src='https://tse2.mm.bing.net/th?id=OIP.1q22bdxzzLyWOu0seyXHKQHaHa&pid=Api&P=0'
          alt=''
        />
      </Box>
    </>
  );
};

export default About;
