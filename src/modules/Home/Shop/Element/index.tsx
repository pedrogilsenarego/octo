import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Category } from "../../../../constants/category";
import { FabricsType } from "../../../../constants/fabrics";

import { Colors } from "../../../../constants/pallete";

interface Props {
  item: Category | FabricsType;
}

const Element = ({ item }: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "7px",
        position: "relative",
        paddingBottom: "0px",
        paddingTop: "0px",


      }}
    >
      <Box
        key={item.title}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        display='flex'
        onLoad={() => setLoading(false)}
        justifyContent='center'
        alignItems='center'
        style={{
          cursor: "pointer",
          position: "relative",
          borderRadius: "50%",
          border: hover
            ? `solid 2px ${Colors.NEON_YELLOW}`
            : "solid 0px transparent",
          width: "100%",
          overflow: "hidden",
          boxShadow: loading ? "0px 0px 0px 0px" : "0px 0px 10px 0px #0000001e",
          aspectRatio: 1,
        }}
      >
        <img
          src={item.icon}
          alt=''
          draggable={false}
          style={{
            backgroundColor: loading ? "transparent" : "#F5F5F5",
            borderRadius: "50%",
            opacity: loading ? 0 : 1,

            objectFit: "contain",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          onLoad={() => setLoading(false)}
        />
      </Box>
      <Typography
        style={{
          color: "#ffffff",
          fontSize: "0.6rem",
          display: "inline-block",
          verticalAlign: "bottom",
          textTransform: "uppercase",
          bottom: "-7px",
          textAlign: "center",
          fontWeight: 800,
          letterSpacing: "3px",
          left: 0,
          right: 0,
          lineHeight: "13px",
        }}
      >
        {item.title}
      </Typography>
    </div>
  );
};

export default Element;
