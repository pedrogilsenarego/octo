import { Box, Container, Typography } from "@mui/material"
import { Colors } from "../../../constants/pallete"
import { i18n } from "../../../translations/i18n"

const About = () => {
  return (
    <>
      <Box
        display='flex'
        style={{

          width: "100vw",
          height: "100vh",

        }}
      >
        <Container maxWidth='xl'>
          <Typography
            fontSize='12rem'
            color={Colors.BLACKISH}
            fontFamily='Avalanche'
            style={{
              whiteSpace: "pre-line",
              lineHeight: "10rem",
              marginTop: "31.5%",
            }}
          >
            {i18n.t("modules.home.mainText")}
          </Typography>

        </Container>
      </Box></>
  )
}

export default About