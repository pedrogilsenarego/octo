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

  const [loading, setLoading] = useState<boolean>(true);



  return (
    <Box
      key={item.title}

      display='flex'
      onLoad={() => setLoading(false)}

      justifyContent='center'
      alignItems='center'
      style={{
        position: "relative",
        borderRadius: "50%",
        width: "100%",
        boxShadow: loading ? "0px 0px 0px 0px" : "0px 0px 10px 0px #0000001e",
        aspectRatio: 1,
      }}
    >
      {loading && (
        <Ellipsis
          size={30}
          color={Colors.NEON_YELLOW_TRANSPARENT}
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
