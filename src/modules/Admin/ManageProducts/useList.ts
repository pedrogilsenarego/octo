import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts, deleteProduct } from "../../../slicer/products/products.actions";

interface Props {
  tableData: any;
}

const useList = ({ tableData }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAction = (type: string, id: number, value?:any) => {
    switch (type) {
      
     
      case "delete": {
        const payload = {
          documentID: tableData[id].documentID,
          title: tableData[id].title
        };
        
        dispatch(deleteProduct(payload));
        break;
      }
      default:
        break;
    }
  };

  return { handleAction };
};

export default useList;
