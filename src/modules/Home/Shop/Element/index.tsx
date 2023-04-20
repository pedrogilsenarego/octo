import { Box } from "@mui/material";
import { useState } from "react";
import { Category } from "../../../../constants/category";
import { FabricsType } from "../../../../constants/fabrics";
import { Ellipsis } from "react-spinners-css";
import { Colors } from "../../../../constants/pallete";

interface Props {

  item: Category | FabricsType;

}

const Element = ({ item }: Props) => {
  const [hover, setHover] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true);



  return (
    <Box
      key={item.title}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      display='flex'
      onLoad={() => setLoading(false)}

      justifyContent='center'
      alignItems='center'
      style={{
        position: "relative",
        borderRadius: "50%",
        border: hover && (item.title !== "Sample Fabric" && item.title !== "Sample Category") ? `solid 2px ${Colors.NEON_YELLOW}` : "solid 0px transparent",
        width: "100%",
        boxShadow: loading ? "0px 0px 0px 0px" : "0px 0px 10px 0px #0000001e",
        aspectRatio: 1,

      }}
    >
      {loading && (
        <Ellipsis
          size={30}
          color={item.title === "Sample Fabric" || item.title === "Sample Category" ? "transparent" : Colors.NEON_YELLOW_TRANSPARENT}
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
        src={item.icon}
        alt=''
        draggable={false}
        style={{
          backgroundColor: loading ? "transparent" : "#F5F5F5",
          borderRadius: "50%",
          opacity: loading ? 0 : 1,
          position: "absolute",
          objectFit: "cover",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        onLoad={() => setLoading(false)}
      />
    </Box>
  );
};

export default Element;
