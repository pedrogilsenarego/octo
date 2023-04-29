import { Typography, Box, useTheme, useMediaQuery } from "@mui/material"
import { Colors } from "../../constants/pallete"
import { generalConstants } from "../../constants/general";

const BuySuccess = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <Box
      display='flex'
      style={{
        alignItems: "center",

        minHeight: "100vh",
        width: "100vw",
        paddingTop: mobile ? "100px" : "140px",
        paddingBottom: "100px",
        paddingLeft: generalConstants.PADDING,
        paddingRight: generalConstants.PADDING,
        flexDirection: "column",
      }}
    ><Typography color={Colors.BLACKISH} fontSize="3rem" fontWeight={800} mt="80px">
        Welcome Octomistyc</Typography>
      <Typography color={Colors.BLACKISH} fontSize="3rem" fontWeight={800} mt="80px">As a new member of the Octo Fam, share with the world some of your favorite and special products.</Typography>

    </Box>
  )
}

export default BuySuccess