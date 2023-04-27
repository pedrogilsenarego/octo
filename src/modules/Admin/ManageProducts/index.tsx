import { Box, Card, Divider, Typography } from "@mui/material";
import Button from "../../../components/Buttons/Button";
import { ROUTE_PATHS } from "../../../constants/routes";
import { i18n } from "../../../translations/i18n";
import { useNavigate } from "react-router";
import TableList from "../../../components/TableList";
import { tableColumns } from "./Constants";
import { useSelector } from "react-redux";
import { State } from "../../../slicer/types";
import useList from "./useList";
import Shop from "../../Shop";


const ManageStorys = () => {
  const navigate = useNavigate();
  // const tableData = useSelector<State, any>(
  //   (state) => state?.products?.products?.data || []
  // );


  // const { handleAction } = useList({ tableData })

  return (
    <>

      <Typography fontSize="16px">Products</Typography>
      <Divider />

      <Box style={{ marginTop: "60px" }}>
        <Box display='flex' justifyContent='start' style={{ marginBottom: "40px" }}>
          <Button
            borderRadius="6px"
            label="Submit new Product"
            onClick={() => navigate(ROUTE_PATHS.ADMIN_PRODUCT_CREATE)}
          />
        </Box>
        {/* {tableData.length > 0 && (<Card style={{ padding: "20px" }}>
          <TableList columns={tableColumns} rows={tableData.rows} onAction={handleAction} />
        </Card>)} */}

      </Box >
    </>
  );
}

export default ManageStorys;
