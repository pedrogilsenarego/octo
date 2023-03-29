import { Box, Container, Typography } from "@mui/material"
import { Colors } from "../../../constants/pallete"
import { i18n } from "../../../translations/i18n"

const Collections = () => {
  return (
    <>
      <Box
        display='flex'
        style={{
          backgroundColor: Colors.BLACKISH,
          width: "100vw",
          height: "100vh",

        }}
      >
        <Container maxWidth='xl'>
          <Typography
            fontSize='12rem'
            color={Colors.SOFT_PINK}
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

export default Collections