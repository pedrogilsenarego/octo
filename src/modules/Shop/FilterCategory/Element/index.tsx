import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { Category } from "../../../../constants/category";
import { ProductContext } from "../../ProductContext";
import { FabricsType } from "../../../../constants/fabrics";
import { Ellipsis } from "react-spinners-css";
import { Colors } from "../../../../constants/pallete";
interface Props {
  setText: (value: string) => void
  item: Category | FabricsType
}

const Element = ({ item, setText }: Props) => {
  const { setFabric, setProduct } = useContext(ProductContext);
  const [loading, setLoading] = useState<boolean>(true)
  console.log(loading)
  return (

    <Box
      onClick={() => {
        if ("price" in item) {
          setProduct(item.id);
          setFabric(null);
        } else {
          setProduct(null);
          setFabric(item.id);
        }


      }}
      display="flex"
      onLoad={() => setLoading(false)}
      onMouseEnter={() => setText(item.title)}
      onMouseLeave={() => setText("")}
      justifyContent="center"
      alignItems="center"
      style={{
        position: "relative",
        borderRadius: "50%",
        width: "100%",

        boxShadow: "0px 0px 10px 0px #0000001e",
        aspectRatio: 1,


      }}
    >{loading && (
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
        alt=""
        style={{ borderRadius: "50%", opacity: loading ? 0 : 1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        onLoad={() => setLoading(false)}
      />
    </Box>
  )
}

export default Element