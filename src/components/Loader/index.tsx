import { Typography } from "@mui/material";
import { Ellipsis } from "react-spinners-css";
import { Colors } from "../../constants/pallete";

interface Props {
  size?: number;
  color?: string;
  customMessage?: string;
  progress?: number;
}

const Loader = ({ size = 100, color, customMessage, progress }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <img
        draggable={false}
        style={{
          height: "60%",
          cursor: "pointer",
          objectFit: "cover",
          objectPosition: "center",
        }}
        src="https://res.cloudinary.com/daantetcr/image/upload/v1681751224/Octo/collections/Blackish/OCTO_Logotipo_transp-octo_ixffst.png"
        alt=""
      />
      <Typography style={{ textAlign: "center" }}>{customMessage}</Typography>
      <Ellipsis size={size || 100} color={Colors.BLACKISH} />
    </div>
  );
};

export default Loader;
