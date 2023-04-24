import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { generalConstants } from "../../constants/general";
import {
  configAnthracite,
  configBlackish,
  configBlackishMobile,
  configNeonYellow,
  configPrettyCream,
  configSoftPink,
  configTaupe,
} from "./constants";
import Block from "./Block";
import { useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { CollectionPositions } from "../../slicer/general/general.actions";
import { useEffect, useRef } from "react";

const Collections = () => {
  const theme = useTheme();
  const NeonRef = useRef<null | HTMLElement>(null);
  const BlackishRef = useRef<null | HTMLElement>(null);
  const SoftPinkRef = useRef<null | HTMLElement>(null);
  const AnthraciteRef = useRef<null | HTMLElement>(null);
  const TaupeRef = useRef<null | HTMLElement>(null);
  const PrettyCreamRef = useRef<null | HTMLElement>(null);
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const positionScroll = useSelector<State, CollectionPositions | null>(
    (state) => state.general.scrollCollections
  );

  const handleMoveToPos = (positionScroll: CollectionPositions) => {

    switch (positionScroll) {
      case "NEON_YELLOW":
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      case "BLACKISH":
        BlackishRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "SOFT_PINK":
        SoftPinkRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "ANTHRACITE":
        AnthraciteRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "TAUPE":
        TaupeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "PRETTY_CREAM":
        PrettyCreamRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        NeonRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (positionScroll !== null) {
      handleMoveToPos(positionScroll);

    }
  }, [positionScroll]);

  const configB = mobile ? { ...configBlackishMobile } : { ...configBlackish }

  return (
    <>
      <div
        ref={NeonRef as React.RefObject<HTMLDivElement>}
        style={{
          marginTop: "150px",
          width: "100vw",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
        }}
      >
        <Block {...configNeonYellow} />
        <div ref={BlackishRef as React.RefObject<HTMLDivElement>}>
          <Typography
            style={{
              textAlign: "right",
              fontFamily: "Avalanche",
              fontSize: "5vw",
              marginTop: "6vw",
            }}
          >
            Cool moms, easy dads,
          </Typography>
          <Typography
            style={{
              textAlign: "right",
              fontFamily: "Avalanche",
              fontSize: "6vw",
              marginTop: mobile ? "0px" : "-25px",
              marginBottom: "6vw",
              paddingBottom: "-10px",
            }}
          >
            happy kids!
          </Typography>
        </div>
        <Block {...configB} />
        <div ref={SoftPinkRef as React.RefObject<HTMLDivElement>}>
          <Typography
            style={{
              textAlign: "right",
              fontFamily: "Avalanche",
              fontSize: "5vw",
              marginTop: "6vw",
            }}
          >
            Be Joy!
          </Typography>
          <Typography
            style={{
              textAlign: "right",
              fontFamily: "Avalanche",
              fontSize: "6vw",
              marginTop: mobile ? "0px" : "-25px",
              marginBottom: "6vw",
              paddingBottom: "-10px",
            }}
          >
            Be Happiness!
          </Typography>
        </div>
        <Block {...configSoftPink} />
        <div ref={AnthraciteRef as React.RefObject<HTMLDivElement>}>
          <Typography
            style={{
              textAlign: "right",
              fontFamily: "Avalanche",
              fontSize: "5vw",
              marginTop: "6vw",
            }}
          >
            Empower
          </Typography>
          <Typography
            style={{
              textAlign: "right",
              fontFamily: "Avalanche",
              fontSize: "6vw",
              marginTop: mobile ? "0px" : "-25px",
              marginBottom: "6vw",
              paddingBottom: "-10px",
            }}
          >
            the Future!
          </Typography>
        </div>
        <Block {...configAnthracite} />
        <div ref={TaupeRef as React.RefObject<HTMLDivElement>}>
          <Typography
            style={{
              textAlign: "right",
              fontFamily: "Avalanche",
              fontSize: "5vw",
              marginTop: "6vw",
            }}
          >
            Enjoy,
          </Typography>
          <Typography
            style={{
              textAlign: "right",
              fontFamily: "Avalanche",
              fontSize: "6vw",
              marginTop: mobile ? "0px" : "-25px",
              marginBottom: "6vw",
              paddingBottom: "-10px",
            }}
          >
            Every Moment!
          </Typography>
        </div>
        <Block {...configTaupe} />
        <div ref={PrettyCreamRef as React.RefObject<HTMLDivElement>}>
          <Typography
            style={{
              textAlign: "right",
              fontFamily: "Avalanche",
              fontSize: "5vw",
              marginTop: "6vw",
            }}
          >
            We are moms, dads and kids
          </Typography>
          <Typography
            style={{
              textAlign: "right",
              fontFamily: "Avalanche",
              fontSize: "6vw",
              marginTop: mobile ? "0px" : "-25px",
              marginBottom: "6vw",
              paddingBottom: "-10px",
            }}
          >
            with no Strings Attached!
          </Typography>
        </div>
        <Block {...configPrettyCream} />
      </div >
    </>
  );
};

export default Collections;
