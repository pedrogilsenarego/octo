import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import t4 from "../../../assets/t4.jpeg"
import Button from "../../../components/Buttons/Button";
import { generalConstants } from "../../../constants/general";
import { Colors } from "../../../constants/pallete";
import { i18n } from "../../../translations/i18n";
import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router-dom";

const About = () => {
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"))
  const navigate = useNavigate()

  const renderLaptop = () => {
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
          <Box
            columnGap={5}
            rowGap={7}
            style={{
              width: "45vw",
              height: "35vw",
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              draggable={false}
              style={{
                width: "87%",
                height: "25vw",

                objectFit: "cover",
                objectPosition: "center",

              }}
              src={t4}
              alt=''
            />
            <Box
              display='flex'
              justifyContent='center'
              flexDirection='column'
              alignItems='center'
              rowGap={2}
            >
              <Typography
                color={Colors.BLACKISH}
                fontSize='22px'
                style={{ textTransform: "uppercase", cursor: "pointer" }}
              >
                {i18n.t("modules.home.about")}
              </Typography>
              <Typography>
                ry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centu
              </Typography>
              <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", rowGap: "10px" }}>
                <Button onClick={() => navigate(ROUTE_PATHS.ABOUT)} colorHover={Colors.NEON_YELLOW_TRANSPARENT} label={i18n.t("modules.home.viewMore")} />
              </div>

            </Box>

          </Box>
        </Box>
      </>)
  }
  const renderMobile = () => {
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
            width: "100vw",
            height: "100vh",
            paddingLeft: generalConstants.PADDING_MOBILE,
            paddingRight: generalConstants.PADDING_MOBILE
          }}
        >
          <Box

            rowGap={7}
            style={{
              width: "100%",
              height: "35vw",
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              draggable={false}
              style={{
                width: "100%",
                height: "45vw",
                borderRadius: "1%",
                objectFit: "cover",
                objectPosition: "center",

              }}
              src={t4}
              alt=''
            />
            <Box
              display='flex'
              justifyContent='center'
              flexDirection='column'
              alignItems='center'
              rowGap={2}
            >
              <Typography
                color={Colors.BLACKISH}
                fontSize='22px'
                style={{ textTransform: "uppercase", cursor: "pointer" }}
              >
                {i18n.t("modules.home.about")}
              </Typography>
              <Typography>
                ry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centu
              </Typography>
              <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", rowGap: "10px" }}>
                <Button colorHover={Colors.NEON_YELLOW_TRANSPARENT} label={i18n.t("modules.home.viewMore")} />
              </div>

            </Box>

          </Box>
        </Box>
      </>
    )
  }

  return !mobile ? renderLaptop() : renderMobile()


};

export default About;
