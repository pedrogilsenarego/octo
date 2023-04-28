import { Box } from "@mui/material";
import { Colors } from "../../../../../constants/pallete";
import { useState } from "react";

import { Ellipsis } from "react-spinners-css";


interface Props {
  size?: string;
  valuee: string;
  stateHighLightStatus?: boolean;
  pos?: number
}

const Element = ({ valuee, stateHighLightStatus, pos }: Props) => {

  const [loading, setLoading] = useState<boolean>(true);


  return (
    <Box
      key={pos}

      style={{
        cursor: "pointer",
        height: "100%",
        aspectRatio: 1,
        position: "relative",
        borderRadius: "4px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        border:
          stateHighLightStatus
            ? `solid 3px ${Colors.BLACKISH}`
            : `solid 3px transparent`,

      }}
    >
      {loading && (
        <Ellipsis

          size={40}
          color={Colors.NEON_YELLOW}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            marginTop: "auto",
            marginBottom: "auto",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      )}
      <img
        onLoad={() => setLoading(false)}
        src={valuee}
        alt=''
        key={pos}
        style={{
          position: "absolute",
          top: "-2.5%",
          left: "-2.5%",
          width: "105%",
          height: "105%",
          opacity: loading ? 0 : 1,
        }}
      />

    </Box>
  );
};

export default Element;
