import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../constants/pallete";
import Button from "../../components/Buttons/Button";
import { i18n } from "../../translations/i18n";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { setCookiePolicy } from "../../slicer/general/general.actions";
import { ROUTE_PATHS } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

const CookiePolicy = () => {
  const [cookiePolicyClick, setCookiePolicyClick] = useState<boolean>(false);
  const cookiePolicySignal = useSelector<State, boolean>(
    (state) => state?.general?.cookiePolicy);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return cookiePolicySignal ? (
    <div
      style={{
        width: window.innerWidth,
        position: "fixed",
        bottom: 0,
        zIndex: 5000,
        padding: "1rem",
        backgroundColor: Colors.PRETTY_CREAM_TRANSPARENT,
      }}
    >
      <Grid container rowGap={2}>
        <Grid item xs={12} sm={9}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography style={{ fontSize: mobile ? "0.6rem" : "1rem" }}>
              {i18n.t("cookiePolicy.mainText")}
              <b
                onClick={() => navigate(ROUTE_PATHS.PRIVACY_POLICY)}
                onMouseEnter={() => setCookiePolicyClick(true)}
                onMouseLeave={() => setCookiePolicyClick(false)}
                style={{
                  cursor: "pointer",
                  color: cookiePolicyClick
                    ? Colors.NEON_YELLOW_TRANSPARENT
                    : Colors.BLACKISH,
                }}
              >
                {i18n.t("cookiePolicy.cookiePolicy")}
              </b>
              {i18n.t("cookiePolicy.secondText")}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} justifyContent="center" alignItems="center" display="flex" width="100%" >
          <Button
            onClick={() => dispatch(setCookiePolicy(false))}
            colorHover={Colors.NEON_YELLOW_TRANSPARENT}
            label={i18n.t("cookiePolicy.acceptTerms")}
          />
        </Grid>
      </Grid>
    </div>
  ) : null;
};

export default CookiePolicy;
