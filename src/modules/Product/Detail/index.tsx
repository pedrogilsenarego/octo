import { Divider, Typography } from "@mui/material";


interface Props {
  title: string;
  detail: string;
}

const Detail = ({ title, detail }: Props) => {
  return (
    <>
      <Divider style={{ marginTop: "10px" }} />
      <Typography
        style={{ marginTop: "10px", fontWeight: 800, cursor: "pointer" }}

      >
        {title}
      </Typography>
      <Typography style={{ marginTop: "10px" }}>{detail}</Typography>
    </>
  );
};

export default Detail;
